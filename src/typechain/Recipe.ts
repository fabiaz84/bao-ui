/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface RecipeInterface extends utils.Interface {
  functions: {
    "bake(address,uint256,uint256,uint16[])": FunctionFragment;
    "dexSwap(address,address,uint256,uint16)": FunctionFragment;
    "getPricePie(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "saveEth(address,uint256)": FunctionFragment;
    "saveToken(address,address,uint256)": FunctionFragment;
    "setBalancerPoolMapping(address,bytes32)": FunctionFragment;
    "setUniPoolMapping(address,uint16)": FunctionFragment;
    "toPie(address,uint256,uint16[])": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bake"
      | "bake(address,uint256,uint256,uint16[])"
      | "dexSwap"
      | "dexSwap(address,address,uint256,uint16)"
      | "getPricePie"
      | "getPricePie(address,uint256)"
      | "owner"
      | "owner()"
      | "renounceOwnership"
      | "renounceOwnership()"
      | "saveEth"
      | "saveEth(address,uint256)"
      | "saveToken"
      | "saveToken(address,address,uint256)"
      | "setBalancerPoolMapping"
      | "setBalancerPoolMapping(address,bytes32)"
      | "setUniPoolMapping"
      | "setUniPoolMapping(address,uint16)"
      | "toPie"
      | "toPie(address,uint256,uint16[])"
      | "transferOwnership"
      | "transferOwnership(address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bake",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "bake(address,uint256,uint256,uint16[])",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "dexSwap",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "dexSwap(address,address,uint256,uint16)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPricePie",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPricePie(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "saveEth",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "saveEth(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "saveToken",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "saveToken(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setBalancerPoolMapping",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBalancerPoolMapping(address,bytes32)",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setUniPoolMapping",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setUniPoolMapping(address,uint16)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "toPie",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "toPie(address,uint256,uint16[])",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership(address)",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "bake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bake(address,uint256,uint256,uint16[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dexSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "dexSwap(address,address,uint256,uint16)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPricePie",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPricePie(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "saveEth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "saveEth(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "saveToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "saveToken(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBalancerPoolMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBalancerPoolMapping(address,bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUniPoolMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUniPoolMapping(address,uint16)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "toPie", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "toPie(address,uint256,uint16[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership(address)",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Recipe extends BaseContract {
  contractName: "Recipe";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RecipeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bake(
      _outputToken: PromiseOrValue<string>,
      _maxInput: PromiseOrValue<BigNumberish>,
      _mintAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "bake(address,uint256,uint256,uint16[])"(
      _outputToken: PromiseOrValue<string>,
      _maxInput: PromiseOrValue<BigNumberish>,
      _mintAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dexSwap(
      _assetIn: PromiseOrValue<string>,
      _assetOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "dexSwap(address,address,uint256,uint16)"(
      _assetIn: PromiseOrValue<string>,
      _assetOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getPricePie(
      _pie: PromiseOrValue<string>,
      _pieAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "getPricePie(address,uint256)"(
      _pie: PromiseOrValue<string>,
      _pieAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    saveEth(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "saveEth(address,uint256)"(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    saveToken(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "saveToken(address,address,uint256)"(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBalancerPoolMapping(
      _inputAsset: PromiseOrValue<string>,
      _pool: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setBalancerPoolMapping(address,bytes32)"(
      _inputAsset: PromiseOrValue<string>,
      _pool: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUniPoolMapping(
      _outputAsset: PromiseOrValue<string>,
      _Fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setUniPoolMapping(address,uint16)"(
      _outputAsset: PromiseOrValue<string>,
      _Fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    toPie(
      _pie: PromiseOrValue<string>,
      _outputAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "toPie(address,uint256,uint16[])"(
      _pie: PromiseOrValue<string>,
      _outputAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  bake(
    _outputToken: PromiseOrValue<string>,
    _maxInput: PromiseOrValue<BigNumberish>,
    _mintAmount: PromiseOrValue<BigNumberish>,
    _dexIndex: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "bake(address,uint256,uint256,uint16[])"(
    _outputToken: PromiseOrValue<string>,
    _maxInput: PromiseOrValue<BigNumberish>,
    _mintAmount: PromiseOrValue<BigNumberish>,
    _dexIndex: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dexSwap(
    _assetIn: PromiseOrValue<string>,
    _assetOut: PromiseOrValue<string>,
    _amountOut: PromiseOrValue<BigNumberish>,
    _dexIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "dexSwap(address,address,uint256,uint16)"(
    _assetIn: PromiseOrValue<string>,
    _assetOut: PromiseOrValue<string>,
    _amountOut: PromiseOrValue<BigNumberish>,
    _dexIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getPricePie(
    _pie: PromiseOrValue<string>,
    _pieAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "getPricePie(address,uint256)"(
    _pie: PromiseOrValue<string>,
    _pieAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  saveEth(
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "saveEth(address,uint256)"(
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  saveToken(
    _token: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "saveToken(address,address,uint256)"(
    _token: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBalancerPoolMapping(
    _inputAsset: PromiseOrValue<string>,
    _pool: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setBalancerPoolMapping(address,bytes32)"(
    _inputAsset: PromiseOrValue<string>,
    _pool: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUniPoolMapping(
    _outputAsset: PromiseOrValue<string>,
    _Fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setUniPoolMapping(address,uint16)"(
    _outputAsset: PromiseOrValue<string>,
    _Fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  toPie(
    _pie: PromiseOrValue<string>,
    _outputAmount: PromiseOrValue<BigNumberish>,
    _dexIndex: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "toPie(address,uint256,uint16[])"(
    _pie: PromiseOrValue<string>,
    _outputAmount: PromiseOrValue<BigNumberish>,
    _dexIndex: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bake(
      _outputToken: PromiseOrValue<string>,
      _maxInput: PromiseOrValue<BigNumberish>,
      _mintAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        inputAmountUsed: BigNumber;
        outputAmount: BigNumber;
      }
    >;

    "bake(address,uint256,uint256,uint16[])"(
      _outputToken: PromiseOrValue<string>,
      _maxInput: PromiseOrValue<BigNumberish>,
      _mintAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        inputAmountUsed: BigNumber;
        outputAmount: BigNumber;
      }
    >;

    dexSwap(
      _assetIn: PromiseOrValue<string>,
      _assetOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "dexSwap(address,address,uint256,uint16)"(
      _assetIn: PromiseOrValue<string>,
      _assetOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getPricePie(
      _pie: PromiseOrValue<string>,
      _pieAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number[]] & { mintPrice: BigNumber; dexIndex: number[] }
    >;

    "getPricePie(address,uint256)"(
      _pie: PromiseOrValue<string>,
      _pieAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number[]] & { mintPrice: BigNumber; dexIndex: number[] }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    saveEth(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "saveEth(address,uint256)"(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    saveToken(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "saveToken(address,address,uint256)"(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setBalancerPoolMapping(
      _inputAsset: PromiseOrValue<string>,
      _pool: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setBalancerPoolMapping(address,bytes32)"(
      _inputAsset: PromiseOrValue<string>,
      _pool: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUniPoolMapping(
      _outputAsset: PromiseOrValue<string>,
      _Fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setUniPoolMapping(address,uint16)"(
      _outputAsset: PromiseOrValue<string>,
      _Fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    toPie(
      _pie: PromiseOrValue<string>,
      _outputAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "toPie(address,uint256,uint16[])"(
      _pie: PromiseOrValue<string>,
      _outputAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    bake(
      _outputToken: PromiseOrValue<string>,
      _maxInput: PromiseOrValue<BigNumberish>,
      _mintAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "bake(address,uint256,uint256,uint16[])"(
      _outputToken: PromiseOrValue<string>,
      _maxInput: PromiseOrValue<BigNumberish>,
      _mintAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dexSwap(
      _assetIn: PromiseOrValue<string>,
      _assetOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "dexSwap(address,address,uint256,uint16)"(
      _assetIn: PromiseOrValue<string>,
      _assetOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getPricePie(
      _pie: PromiseOrValue<string>,
      _pieAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "getPricePie(address,uint256)"(
      _pie: PromiseOrValue<string>,
      _pieAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    saveEth(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "saveEth(address,uint256)"(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    saveToken(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "saveToken(address,address,uint256)"(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBalancerPoolMapping(
      _inputAsset: PromiseOrValue<string>,
      _pool: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setBalancerPoolMapping(address,bytes32)"(
      _inputAsset: PromiseOrValue<string>,
      _pool: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUniPoolMapping(
      _outputAsset: PromiseOrValue<string>,
      _Fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setUniPoolMapping(address,uint16)"(
      _outputAsset: PromiseOrValue<string>,
      _Fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    toPie(
      _pie: PromiseOrValue<string>,
      _outputAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "toPie(address,uint256,uint16[])"(
      _pie: PromiseOrValue<string>,
      _outputAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bake(
      _outputToken: PromiseOrValue<string>,
      _maxInput: PromiseOrValue<BigNumberish>,
      _mintAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "bake(address,uint256,uint256,uint16[])"(
      _outputToken: PromiseOrValue<string>,
      _maxInput: PromiseOrValue<BigNumberish>,
      _mintAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dexSwap(
      _assetIn: PromiseOrValue<string>,
      _assetOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "dexSwap(address,address,uint256,uint16)"(
      _assetIn: PromiseOrValue<string>,
      _assetOut: PromiseOrValue<string>,
      _amountOut: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getPricePie(
      _pie: PromiseOrValue<string>,
      _pieAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "getPricePie(address,uint256)"(
      _pie: PromiseOrValue<string>,
      _pieAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    saveEth(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "saveEth(address,uint256)"(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    saveToken(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "saveToken(address,address,uint256)"(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBalancerPoolMapping(
      _inputAsset: PromiseOrValue<string>,
      _pool: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setBalancerPoolMapping(address,bytes32)"(
      _inputAsset: PromiseOrValue<string>,
      _pool: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUniPoolMapping(
      _outputAsset: PromiseOrValue<string>,
      _Fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setUniPoolMapping(address,uint16)"(
      _outputAsset: PromiseOrValue<string>,
      _Fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    toPie(
      _pie: PromiseOrValue<string>,
      _outputAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "toPie(address,uint256,uint16[])"(
      _pie: PromiseOrValue<string>,
      _outputAmount: PromiseOrValue<BigNumberish>,
      _dexIndex: PromiseOrValue<BigNumberish>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
