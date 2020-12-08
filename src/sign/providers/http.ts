// Copyright (c) 2020 Wei Chain LTD
// Distributed under the Apache License 2.0 software license, see https://www.apache.org/licenses/LICENSE-2.0
import { Node, RpcAepp, Universal } from '@aeternity/aepp-sdk/es';

import Config from '../config';
import ContractSource from '../config/contractSource';

export default class HttpProvider {
    public config: any;
    public client: any;
    public contract: any;
    public contractAddress: string;

    private contractSource: string;

    constructor(config = Config, contractSource = ContractSource) {
        this.config = config;
        this.contractSource = contractSource;
        this.contractAddress = this.config.contractAddress;
    }

    async setup() {
        if (!this.client) {
            const node = await Node({ url: this.config.providerUrl, internalUrl: this.config.internalUrl });

            this.client = await Universal({ nodes: [{ name: 'Assetify', instance: node }], compilerUrl: this.config.compilerUrl });

            this.contract = await this.client.getContractInstance(this.contractSource, { contractAddress: this.contractAddress });
        }
    }

    async setupRpc(wallet: any, onAddressChange: Function, onNetworkChange: Function) {
        const node = await Node({ url: this.config.providerUrl, internalUrl: this.config.internalUrl });

        this.client = await RpcAepp({
            name: 'Assetify',
            nodes: [{ name: this.config.nodeName, instance: node }],
            compilerUrl: this.config.compilerUrl,

            onNetworkChange: (network: any) => {
                onNetworkChange(network);
            },
            onAddressChange: async (addresses: any) => {
                onAddressChange(addresses);
            },
        });

        const connection = await wallet.getConnection();

        if (connection) {
            await this.client.connectToWallet(connection);

            if (!this.contract) {
                this.contract = await this.client.getContractInstance(this.contractSource, {
                    contractAddress: this.config.contractAddress,
                });
            }

            return await this.client.subscribeAddress('subscribe', 'current');
        }
    }

    async deployContract(args: any[], contractSource = this.contractSource) {
        if (this.client) {
            const contract = await this.client.getContractInstance(contractSource);
            await contract.methods.init(...args);
            return contract.deployInfo;
        }

        throw new Error('Client not initialized.');
    }

    async setContract(contractAddress: string, contractSource = this.contractSource) {
        if (this.client) {
            this.contract = await this.client.getContractInstance(contractSource, { contractAddress });
            return;
        }

        throw new Error('Client not initialized.');
    }

    async callContract(method: string, args: any[], options?: any) {
        if (this.contract) {
            return await this.contract.methods[method](...args, options);
        }

        throw new Error('Contract not initialized.');
    }

    async getCurrentBlock() {
        if (this.client) {
            return await this.client.height();
        }

        throw new Error('Client not initialized.');
    }

    async getBalance(address: string) {
        if (this.client) {
            return await this.client.getBalance(address);
        }

        throw new Error('Client not initialized.');
    }

    async getTxInfo(txHash: string) {
        if (this.client) {
            return await this.client.getTxInfo(txHash);
        }

        throw new Error('Client not initialized.');
    }

    getContractAddress() {
        return this.contractAddress;
    }
}
