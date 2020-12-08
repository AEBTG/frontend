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
    this.setContract();

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

  public async sendAEBTG(toAddress: string, amount: number): Promise<any> {
    if (this.contract) {
      this.contract.transferTo(toAddress, amount).then(

        (val) => {
          console.log(val);
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

  private setContract(): void {
    if (!this.contract) {
      this.contract = new Contract(this.provider);
    }
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
      this.provider = new Providers.HttpProvider();
      await this.provider.setupRpc(waellet, this.onAddressChange.bind(this), this.onNetworkChange.bind(this));
    }
  }

  private convertAmount(amount: number): string {
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
