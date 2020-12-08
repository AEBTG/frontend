import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import Contract from './../../../sign/contract';
import Providers from './../../../sign/providers';
import HttpProvider from './../../../sign/providers/http';

interface WalletsInfo {
  newWallet: Wallet;
  wallets: { [key: string]: Wallet };
}

interface Wallet {
  id: string;
  name: string;
  networkId: string;
  origin: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class AeWalletService {

  public balance = new BehaviorSubject<number>(0);

  private readonly contractAddress = 'ct_gtjR37cYNFwaseW6gvG3j3iGEzVXaaueFQPk8JRaKqMXF2YYX';

  private provider: HttpProvider;
  private contract: Contract;
  private walletAddress: string;

  public async connect(): Promise<boolean> {

    const connected: boolean = await this.setProvider().then(
      (val) => {
        console.log(val);
        return true;
      },
      (err) => {
        console.log(err);
        return false;
      }
    );

    this.walletAddress = await this.provider.client.address();

    const contract: Contract = this.getContract();

    const balance = await contract.getInternalBalance();
    console.log(balance);

    return Promise.resolve(connected);
  }

  public getAddress(): string {
    if (this.walletAddress) {
      return this.walletAddress;
    }

    return 'Wallet not connected';
  }

  public updateBalance(): void {

    if (this.contract) {
      this.getBalance().then(
        (val) => {
          console.log('Ballance: ' + val);
          this.balance.next(val);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  private async getBalance(): Promise<number> {
    const balance = await this.contract.getInternalBalance();

    return Promise.resolve(balance.decodedResult);
  }

  private getContract(): Contract {
    if (!this.contract) {
      this.contract = new Contract(this.provider);
    }

    return this.contract;
  }

  private getWaellet(): Promise<Wallet> {
    console.log('Attempt to connect to Aeternity wallet...');
    return new Promise( (resolve, reject) => {
      Providers.WaelletProvider( (walletData: WalletsInfo) => {
        if (walletData.newWallet) {
          resolve(walletData.newWallet);
        } else if (walletData.wallets) {
          resolve(Object.values(walletData.wallets)[0])
        }

        reject('No wallets found');
      });
    });
  }

  private async setProvider(): Promise<any> {
    const waellet: Wallet = await this.getWaellet();

    if (!this.provider) {

      const config = {
        explorer: 'https://testnet.explorer.aepps.com/transactions/',
        providerUrl: 'https://testnet.aeternity.io/',
        internalUrl: 'https://testnet.aeternity.io/',
        compilerUrl: 'https://latest.compiler.aepps.com',
        nodeName: 'testnet',
        wsUrl: 'wss://testnet.aeternal.io/websocket',
        contractAddress: this.contractAddress
      };

      this.provider = new Providers.HttpProvider(config);
      await this.provider.setupRpc(waellet, this.onAddressChange.bind(this), this.onNetworkChange.bind(this));
    }
    // await this.provider.setupRpc(waellet, this.onAddressChange.bind(this), this.onNetworkChange.bind(this));
    // this.contractAddresss = contractAddress;
  }

  private convertCollateralAmount(amount: number): string {
    amount = amount * Math.pow(10, 18);

    return amount.toString();
  }

  private onAddressChange(response: any): void {
    console.log(response);
  }

  private onNetworkChange(response: any): void {
    console.log(response);
  }

}
