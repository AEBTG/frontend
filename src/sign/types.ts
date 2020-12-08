// Copyright (c) 2020 Wei Chain LTD
// Distributed under the Apache License 2.0 software license, see https://www.apache.org/licenses/LICENSE-2.0
export interface Provider {
    client: any;

    setup(): void;

    setupRpc(wallet: any, onAddressChange: Function, onNetworkChange: Function): Promise<any>;

    deployContract(args: any[]): Promise<any>;

    setContract(contractAddress: string, contractSource?: string): Promise<void>;

    callContract(method: string, args: any[], options?: any): Promise<any>;

    getCurrentBlock(): Promise<string | number>;

    getBalance(address: string): Promise<string | number>;

    getTxInfo(txHash: string): Promise<TxInfo>;

    getContractAddress(): string;
}

type TxInfo = {
    log: [];
};
