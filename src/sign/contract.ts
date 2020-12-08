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

    async deposit(amount: string, options = DEFAULT_OPTIONS) {
        const result = await this.provider.callContract('deposit', [], { amount, ...options });
        return result;
    }

    async getInternalBalance() {
        const address = await this.provider.client.address();
        const result = await this.provider.callContract('balance_of', [address]);
        return result;
    }

    async isChallendged() {
        const result = await this.provider.callContract('is_challenged', []);
        return result;
    }

    async unlockFundsForLender(options = DEFAULT_OPTIONS) {
        const result = await this.provider.callContract('lender_unlock_funds', [], options);
        return result;
    }

    async challengeLender(options = DEFAULT_OPTIONS) {
        const result = await this.provider.callContract('lender_challenge', [], options);
        return result;
    }

    async unlockFundsForBorrower(options = DEFAULT_OPTIONS) {
        const result = await this.provider.callContract('borrower_unlock_funds', [], options);
        return result;
    }

    async challengeBorrower(options = DEFAULT_OPTIONS) {
        const result = await this.provider.callContract('borrower_challenge', [], options);
        return result;
    }

    async withdraw(address: string, options = DEFAULT_OPTIONS) {
        const result = await this.provider.callContract('withdraw', [address], options);
        return result;
    }

    async liquidate(address: string, options = DEFAULT_OPTIONS) {
        const result = await this.provider.callContract('liquidate', [address], options);
        return result;
    }

    async sendToBorrower(options = DEFAULT_OPTIONS) {
        const result = await this.provider.callContract('send_to_borrower', [], options);
        return result;
    }
}
