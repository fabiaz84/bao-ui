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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface MarketOracleInterface extends utils.Interface {
  functions: {
    "changeOwner(address)": FunctionFragment;
    "feeds(address)": FunctionFragment;
    "fixedPrices(address)": FunctionFragment;
    "getUnderlyingPrice(address)": FunctionFragment;
    "isPriceOracle()": FunctionFragment;
    "owner()": FunctionFragment;
    "removeFeed(address)": FunctionFragment;
    "removeFixedPrice(address)": FunctionFragment;
    "setFeed(address,address,uint8)": FunctionFragment;
    "setFixedPrice(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "changeOwner"
      | "changeOwner(address)"
      | "feeds"
      | "feeds(address)"
      | "fixedPrices"
      | "fixedPrices(address)"
      | "getUnderlyingPrice"
      | "getUnderlyingPrice(address)"
      | "isPriceOracle"
      | "isPriceOracle()"
      | "owner"
      | "owner()"
      | "removeFeed"
      | "removeFeed(address)"
      | "removeFixedPrice"
      | "removeFixedPrice(address)"
      | "setFeed"
      | "setFeed(address,address,uint8)"
      | "setFixedPrice"
      | "setFixedPrice(address,uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "changeOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeOwner(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "feeds",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "feeds(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "fixedPrices",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "fixedPrices(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnderlyingPrice",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnderlyingPrice(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isPriceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isPriceOracle()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeFeed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFeed(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFixedPrice",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFixedPrice(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeed",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeed(address,address,uint8)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setFixedPrice",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFixedPrice(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeOwner(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeds(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fixedPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fixedPrices(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnderlyingPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnderlyingPrice(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPriceOracle()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeFeed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeFeed(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFixedPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFixedPrice(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFeed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeed(address,address,uint8)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFixedPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFixedPrice(address,uint256)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MarketOracle extends BaseContract {
  contractName: "MarketOracle";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketOracleInterface;

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
    changeOwner(
      owner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "changeOwner(address)"(
      owner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    feeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, number] & { addr: string; tokenDecimals: number }>;

    "feeds(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, number] & { addr: string; tokenDecimals: number }>;

    fixedPrices(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "fixedPrices(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUnderlyingPrice(
      cToken_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getUnderlyingPrice(address)"(
      cToken_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isPriceOracle(overrides?: CallOverrides): Promise<[boolean]>;

    "isPriceOracle()"(overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    removeFeed(
      cToken_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "removeFeed(address)"(
      cToken_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeFixedPrice(
      cToken_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "removeFixedPrice(address)"(
      cToken_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFeed(
      cToken_: PromiseOrValue<string>,
      feed_: PromiseOrValue<string>,
      tokenDecimals_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setFeed(address,address,uint8)"(
      cToken_: PromiseOrValue<string>,
      feed_: PromiseOrValue<string>,
      tokenDecimals_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFixedPrice(
      cToken_: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setFixedPrice(address,uint256)"(
      cToken_: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  changeOwner(
    owner_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "changeOwner(address)"(
    owner_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  feeds(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, number] & { addr: string; tokenDecimals: number }>;

  "feeds(address)"(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, number] & { addr: string; tokenDecimals: number }>;

  fixedPrices(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "fixedPrices(address)"(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUnderlyingPrice(
    cToken_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getUnderlyingPrice(address)"(
    cToken_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isPriceOracle(overrides?: CallOverrides): Promise<boolean>;

  "isPriceOracle()"(overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  removeFeed(
    cToken_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "removeFeed(address)"(
    cToken_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeFixedPrice(
    cToken_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "removeFixedPrice(address)"(
    cToken_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFeed(
    cToken_: PromiseOrValue<string>,
    feed_: PromiseOrValue<string>,
    tokenDecimals_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setFeed(address,address,uint8)"(
    cToken_: PromiseOrValue<string>,
    feed_: PromiseOrValue<string>,
    tokenDecimals_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFixedPrice(
    cToken_: PromiseOrValue<string>,
    price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setFixedPrice(address,uint256)"(
    cToken_: PromiseOrValue<string>,
    price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    changeOwner(
      owner_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeOwner(address)"(
      owner_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    feeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, number] & { addr: string; tokenDecimals: number }>;

    "feeds(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, number] & { addr: string; tokenDecimals: number }>;

    fixedPrices(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fixedPrices(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnderlyingPrice(
      cToken_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUnderlyingPrice(address)"(
      cToken_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPriceOracle(overrides?: CallOverrides): Promise<boolean>;

    "isPriceOracle()"(overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    removeFeed(
      cToken_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeFeed(address)"(
      cToken_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeFixedPrice(
      cToken_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeFixedPrice(address)"(
      cToken_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeed(
      cToken_: PromiseOrValue<string>,
      feed_: PromiseOrValue<string>,
      tokenDecimals_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFeed(address,address,uint8)"(
      cToken_: PromiseOrValue<string>,
      feed_: PromiseOrValue<string>,
      tokenDecimals_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFixedPrice(
      cToken_: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFixedPrice(address,uint256)"(
      cToken_: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    changeOwner(
      owner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "changeOwner(address)"(
      owner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    feeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "feeds(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fixedPrices(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fixedPrices(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnderlyingPrice(
      cToken_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUnderlyingPrice(address)"(
      cToken_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    "isPriceOracle()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeFeed(
      cToken_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "removeFeed(address)"(
      cToken_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeFixedPrice(
      cToken_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "removeFixedPrice(address)"(
      cToken_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFeed(
      cToken_: PromiseOrValue<string>,
      feed_: PromiseOrValue<string>,
      tokenDecimals_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setFeed(address,address,uint8)"(
      cToken_: PromiseOrValue<string>,
      feed_: PromiseOrValue<string>,
      tokenDecimals_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFixedPrice(
      cToken_: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setFixedPrice(address,uint256)"(
      cToken_: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeOwner(
      owner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "changeOwner(address)"(
      owner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    feeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "feeds(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fixedPrices(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fixedPrices(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnderlyingPrice(
      cToken_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUnderlyingPrice(address)"(
      cToken_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isPriceOracle()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeFeed(
      cToken_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "removeFeed(address)"(
      cToken_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeFixedPrice(
      cToken_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "removeFixedPrice(address)"(
      cToken_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFeed(
      cToken_: PromiseOrValue<string>,
      feed_: PromiseOrValue<string>,
      tokenDecimals_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setFeed(address,address,uint8)"(
      cToken_: PromiseOrValue<string>,
      feed_: PromiseOrValue<string>,
      tokenDecimals_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFixedPrice(
      cToken_: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setFixedPrice(address,uint256)"(
      cToken_: PromiseOrValue<string>,
      price: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
