// Copyright (c) 2020 Wei Chain LTD
// Distributed under the Apache License 2.0 software license, see https://www.apache.org/licenses/LICENSE-2.0
import { Provider } from './types';

const DEFAULT_OPTIONS = { waitMined: false };

export default class AssetifyContract {
    public provider: Provider;

    constructor(provider: Provider) {
        this.provider = provider;
    }

    async getCurrentBlock() {
        return await this.provider.getCurrentBlock();
    }

    async getBalance(address: string) {
        return await this.provider.getBalance(address);
    }

    getContractAddress() {
        return this.provider.getContractAddress();
    }

    async setContract(contractAddress: string, contractSource?: string) {
        await this.provider.setContract(contractAddress, contractSource);
    }

    async getInternalBalance() {
        const address = await this.provider.client.address();
        const result = await this.provider.callContract('balance_of', [address]);
        return result;
    }

    async transferTo(receiverAddress: string, amount: number) {
        const result = await this.provider.callContract('transfer', [receiverAddress, amount]);
        return result;
    }
}
