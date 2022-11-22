/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck


import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DefiSdk, DefiSdkInterface } from "../DefiSdk";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "protocolName",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "adapters",
        type: "address[]",
      },
      {
        internalType: "address[][]",
        name: "tokens",
        type: "address[][]",
      },
    ],
    name: "addProtocolAdapters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "protocolNames",
        type: "string[]",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "websiteURL",
            type: "string",
          },
          {
            internalType: "string",
            name: "iconURL",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "version",
            type: "uint256",
          },
        ],
        internalType: "struct ProtocolMetadata[]",
        name: "metadata",
        type: "tuple[]",
      },
      {
        internalType: "address[][]",
        name: "adapters",
        type: "address[][]",
      },
      {
        internalType: "address[][][]",
        name: "tokens",
        type: "address[][][]",
      },
    ],
    name: "addProtocols",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "tokenAdapterNames",
        type: "string[]",
      },
      {
        internalType: "address[]",
        name: "adapters",
        type: "address[]",
      },
    ],
    name: "addTokenAdapters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "adapter",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "getAdapterBalance",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "adapterAddress",
                type: "address",
              },
              {
                internalType: "string",
                name: "adapterType",
                type: "string",
              },
            ],
            internalType: "struct AdapterMetadata",
            name: "metadata",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    components: [
                      {
                        internalType: "address",
                        name: "token",
                        type: "address",
                      },
                      {
                        internalType: "string",
                        name: "name",
                        type: "string",
                      },
                      {
                        internalType: "string",
                        name: "symbol",
                        type: "string",
                      },
                      {
                        internalType: "uint8",
                        name: "decimals",
                        type: "uint8",
                      },
                    ],
                    internalType: "struct TokenMetadata",
                    name: "metadata",
                    type: "tuple",
                  },
                  {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                  },
                ],
                internalType: "struct TokenBalance",
                name: "base",
                type: "tuple",
              },
              {
                components: [
                  {
                    components: [
                      {
                        internalType: "address",
                        name: "token",
                        type: "address",
                      },
                      {
                        internalType: "string",
                        name: "name",
                        type: "string",
                      },
                      {
                        internalType: "string",
                        name: "symbol",
                        type: "string",
                      },
                      {
                        internalType: "uint8",
                        name: "decimals",
                        type: "uint8",
                      },
                    ],
                    internalType: "struct TokenMetadata",
                    name: "metadata",
                    type: "tuple",
                  },
                  {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                  },
                ],
                internalType: "struct TokenBalance[]",
                name: "underlying",
                type: "tuple[]",
              },
            ],
            internalType: "struct FullTokenBalance[]",
            name: "balances",
            type: "tuple[]",
          },
        ],
        internalType: "struct AdapterBalance",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "adapters",
        type: "address[]",
      },
    ],
    name: "getAdapterBalances",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "adapterAddress",
                type: "address",
              },
              {
                internalType: "string",
                name: "adapterType",
                type: "string",
              },
            ],
            internalType: "struct AdapterMetadata",
            name: "metadata",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    components: [
                      {
                        internalType: "address",
                        name: "token",
                        type: "address",
                      },
                      {
                        internalType: "string",
                        name: "name",
                        type: "string",
                      },
                      {
                        internalType: "string",
                        name: "symbol",
                        type: "string",
                      },
                      {
                        internalType: "uint8",
                        name: "decimals",
                        type: "uint8",
                      },
                    ],
                    internalType: "struct TokenMetadata",
                    name: "metadata",
                    type: "tuple",
                  },
                  {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                  },
                ],
                internalType: "struct TokenBalance",
                name: "base",
                type: "tuple",
              },
              {
                components: [
                  {
                    components: [
                      {
                        internalType: "address",
                        name: "token",
                        type: "address",
                      },
                      {
                        internalType: "string",
                        name: "name",
                        type: "string",
                      },
                      {
                        internalType: "string",
                        name: "symbol",
                        type: "string",
                      },
                      {
                        internalType: "uint8",
                        name: "decimals",
                        type: "uint8",
                      },
                    ],
                    internalType: "struct TokenMetadata",
                    name: "metadata",
                    type: "tuple",
                  },
                  {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                  },
                ],
                internalType: "struct TokenBalance[]",
                name: "underlying",
                type: "tuple[]",
              },
            ],
            internalType: "struct FullTokenBalance[]",
            name: "balances",
            type: "tuple[]",
          },
        ],
        internalType: "struct AdapterBalance[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getBalances",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string",
                name: "websiteURL",
                type: "string",
              },
              {
                internalType: "string",
                name: "iconURL",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "version",
                type: "uint256",
              },
            ],
            internalType: "struct ProtocolMetadata",
            name: "metadata",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "adapterAddress",
                    type: "address",
                  },
                  {
                    internalType: "string",
                    name: "adapterType",
                    type: "string",
                  },
                ],
                internalType: "struct AdapterMetadata",
                name: "metadata",
                type: "tuple",
              },
              {
                components: [
                  {
                    components: [
                      {
                        components: [
                          {
                            internalType: "address",
                            name: "token",
                            type: "address",
                          },
                          {
                            internalType: "string",
                            name: "name",
                            type: "string",
                          },
                          {
                            internalType: "string",
                            name: "symbol",
                            type: "string",
                          },
                          {
                            internalType: "uint8",
                            name: "decimals",
                            type: "uint8",
                          },
                        ],
                        internalType: "struct TokenMetadata",
                        name: "metadata",
                        type: "tuple",
                      },
                      {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                      },
                    ],
                    internalType: "struct TokenBalance",
                    name: "base",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        components: [
                          {
                            internalType: "address",
                            name: "token",
                            type: "address",
                          },
                          {
                            internalType: "string",
                            name: "name",
                            type: "string",
                          },
                          {
                            internalType: "string",
                            name: "symbol",
                            type: "string",
                          },
                          {
                            internalType: "uint8",
                            name: "decimals",
                            type: "uint8",
                          },
                        ],
                        internalType: "struct TokenMetadata",
                        name: "metadata",
                        type: "tuple",
                      },
                      {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                      },
                    ],
                    internalType: "struct TokenBalance[]",
                    name: "underlying",
                    type: "tuple[]",
                  },
                ],
                internalType: "struct FullTokenBalance[]",
                name: "balances",
                type: "tuple[]",
              },
            ],
            internalType: "struct AdapterBalance[]",
            name: "adapterBalances",
            type: "tuple[]",
          },
        ],
        internalType: "struct ProtocolBalance[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenType",
        type: "string",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getFinalFullTokenBalance",
    outputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "token",
                    type: "address",
                  },
                  {
                    internalType: "string",
                    name: "name",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "symbol",
                    type: "string",
                  },
                  {
                    internalType: "uint8",
                    name: "decimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct TokenMetadata",
                name: "metadata",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct TokenBalance",
            name: "base",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "token",
                    type: "address",
                  },
                  {
                    internalType: "string",
                    name: "name",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "symbol",
                    type: "string",
                  },
                  {
                    internalType: "uint8",
                    name: "decimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct TokenMetadata",
                name: "metadata",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct TokenBalance[]",
            name: "underlying",
            type: "tuple[]",
          },
        ],
        internalType: "struct FullTokenBalance",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenType",
        type: "string",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getFullTokenBalance",
    outputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "token",
                    type: "address",
                  },
                  {
                    internalType: "string",
                    name: "name",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "symbol",
                    type: "string",
                  },
                  {
                    internalType: "uint8",
                    name: "decimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct TokenMetadata",
                name: "metadata",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct TokenBalance",
            name: "base",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "token",
                    type: "address",
                  },
                  {
                    internalType: "string",
                    name: "name",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "symbol",
                    type: "string",
                  },
                  {
                    internalType: "uint8",
                    name: "decimals",
                    type: "uint8",
                  },
                ],
                internalType: "struct TokenMetadata",
                name: "metadata",
                type: "tuple",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct TokenBalance[]",
            name: "underlying",
            type: "tuple[]",
          },
        ],
        internalType: "struct FullTokenBalance",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "protocolName",
        type: "string",
      },
    ],
    name: "getProtocolAdapters",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "string[]",
        name: "protocolNames",
        type: "string[]",
      },
    ],
    name: "getProtocolBalances",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "description",
                type: "string",
              },
              {
                internalType: "string",
                name: "websiteURL",
                type: "string",
              },
              {
                internalType: "string",
                name: "iconURL",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "version",
                type: "uint256",
              },
            ],
            internalType: "struct ProtocolMetadata",
            name: "metadata",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "adapterAddress",
                    type: "address",
                  },
                  {
                    internalType: "string",
                    name: "adapterType",
                    type: "string",
                  },
                ],
                internalType: "struct AdapterMetadata",
                name: "metadata",
                type: "tuple",
              },
              {
                components: [
                  {
                    components: [
                      {
                        components: [
                          {
                            internalType: "address",
                            name: "token",
                            type: "address",
                          },
                          {
                            internalType: "string",
                            name: "name",
                            type: "string",
                          },
                          {
                            internalType: "string",
                            name: "symbol",
                            type: "string",
                          },
                          {
                            internalType: "uint8",
                            name: "decimals",
                            type: "uint8",
                          },
                        ],
                        internalType: "struct TokenMetadata",
                        name: "metadata",
                        type: "tuple",
                      },
                      {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                      },
                    ],
                    internalType: "struct TokenBalance",
                    name: "base",
                    type: "tuple",
                  },
                  {
                    components: [
                      {
                        components: [
                          {
                            internalType: "address",
                            name: "token",
                            type: "address",
                          },
                          {
                            internalType: "string",
                            name: "name",
                            type: "string",
                          },
                          {
                            internalType: "string",
                            name: "symbol",
                            type: "string",
                          },
                          {
                            internalType: "uint8",
                            name: "decimals",
                            type: "uint8",
                          },
                        ],
                        internalType: "struct TokenMetadata",
                        name: "metadata",
                        type: "tuple",
                      },
                      {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                      },
                    ],
                    internalType: "struct TokenBalance[]",
                    name: "underlying",
                    type: "tuple[]",
                  },
                ],
                internalType: "struct FullTokenBalance[]",
                name: "balances",
                type: "tuple[]",
              },
            ],
            internalType: "struct AdapterBalance[]",
            name: "adapterBalances",
            type: "tuple[]",
          },
        ],
        internalType: "struct ProtocolBalance[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "protocolName",
        type: "string",
      },
    ],
    name: "getProtocolMetadata",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "websiteURL",
            type: "string",
          },
          {
            internalType: "string",
            name: "iconURL",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "version",
            type: "uint256",
          },
        ],
        internalType: "struct ProtocolMetadata",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProtocolNames",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "adapter",
        type: "address",
      },
    ],
    name: "getSupportedTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenAdapterName",
        type: "string",
      },
    ],
    name: "getTokenAdapter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenAdapterNames",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "protocolName",
        type: "string",
      },
    ],
    name: "isValidProtocol",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenAdapterName",
        type: "string",
      },
    ],
    name: "isValidTokenAdapter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "protocolName",
        type: "string",
      },
      {
        internalType: "uint256[]",
        name: "adapterIndices",
        type: "uint256[]",
      },
    ],
    name: "removeProtocolAdapters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "protocolNames",
        type: "string[]",
      },
    ],
    name: "removeProtocols",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "tokenAdapterNames",
        type: "string[]",
      },
    ],
    name: "removeTokenAdapters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "protocolName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "newAdapterAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "newSupportedTokens",
        type: "address[]",
      },
    ],
    name: "updateProtocolAdapter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "protocolName",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "websiteURL",
        type: "string",
      },
      {
        internalType: "string",
        name: "iconURL",
        type: "string",
      },
    ],
    name: "updateProtocolMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenAdapterName",
        type: "string",
      },
      {
        internalType: "address",
        name: "adapter",
        type: "address",
      },
    ],
    name: "updateTokenAdapter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class DefiSdk__factory {
  static readonly abi = _abi;
  static createInterface(): DefiSdkInterface {
    return new utils.Interface(_abi) as DefiSdkInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DefiSdk {
    return new Contract(address, _abi, signerOrProvider) as DefiSdk;
  }
}
