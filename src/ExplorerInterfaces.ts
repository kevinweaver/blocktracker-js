export interface Address {
  sent: number;
  received: number;
  isContract: boolean;
}

export interface Addresses {
  [key: string]: Address;
}

export interface Transaction {
  to: string;
  from: string;
  value: string;
}

export interface ExplorerOutput {
  start: number;
  end: number;
  current: number;
  totalEth: number;
  uncles: number;
  sent: number;
  received: number;
  contracts: number;
  addresses: Addresses;
}
