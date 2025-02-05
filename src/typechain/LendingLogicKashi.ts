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

export interface LendingLogicKashiInterface extends utils.Interface {
  functions: {
    "bentoBox()": FunctionFragment;
    "exchangeRate(address)": FunctionFragment;
    "exchangeRateView(address)": FunctionFragment;
    "getAPRFromUnderlying(address)": FunctionFragment;
    "getAPRFromWrapped(address)": FunctionFragment;
    "lend(address,uint256,address)": FunctionFragment;
    "lendingRegistry()": FunctionFragment;
    "protocolKey()": FunctionFragment;
    "unlend(address,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bentoBox"
      | "bentoBox()"
      | "exchangeRate"
      | "exchangeRate(address)"
      | "exchangeRateView"
      | "exchangeRateView(address)"
      | "getAPRFromUnderlying"
      | "getAPRFromUnderlying(address)"
      | "getAPRFromWrapped"
      | "getAPRFromWrapped(address)"
      | "lend"
      | "lend(address,uint256,address)"
      | "lendingRegistry"
      | "lendingRegistry()"
      | "protocolKey"
      | "protocolKey()"
      | "unlend"
      | "unlend(address,uint256,address)"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "bentoBox", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bentoBox()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeRate",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeRate(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeRateView",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeRateView(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAPRFromUnderlying",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAPRFromUnderlying(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAPRFromWrapped",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAPRFromWrapped(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "lend",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "lend(address,uint256,address)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "lendingRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lendingRegistry()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolKey",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolKey()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unlend",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "unlend(address,uint256,address)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "bentoBox", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bentoBox()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exchangeRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeRate(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeRateView",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeRateView(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAPRFromUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAPRFromUnderlying(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAPRFromWrapped",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAPRFromWrapped(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lend", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lend(address,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lendingRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lendingRegistry()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolKey()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlend", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unlend(address,uint256,address)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface LendingLogicKashi extends BaseContract {
  contractName: "LendingLogicKashi";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LendingLogicKashiInterface;

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
    bentoBox(overrides?: CallOverrides): Promise<[string]>;

    "bentoBox()"(overrides?: CallOverrides): Promise<[string]>;

    exchangeRate(
      _kaToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "exchangeRate(address)"(
      _kaToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exchangeRateView(
      _kaToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "exchangeRateView(address)"(
      _kaToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAPRFromUnderlying(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getAPRFromUnderlying(address)"(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAPRFromWrapped(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getAPRFromWrapped(address)"(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lend(
      _underlying: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[], string[]] & { targets: string[]; data: string[] }>;

    "lend(address,uint256,address)"(
      _underlying: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[], string[]] & { targets: string[]; data: string[] }>;

    lendingRegistry(overrides?: CallOverrides): Promise<[string]>;

    "lendingRegistry()"(overrides?: CallOverrides): Promise<[string]>;

    protocolKey(overrides?: CallOverrides): Promise<[string]>;

    "protocolKey()"(overrides?: CallOverrides): Promise<[string]>;

    unlend(
      _wrapped: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[], string[]] & { targets: string[]; data: string[] }>;

    "unlend(address,uint256,address)"(
      _wrapped: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[], string[]] & { targets: string[]; data: string[] }>;
  };

  bentoBox(overrides?: CallOverrides): Promise<string>;

  "bentoBox()"(overrides?: CallOverrides): Promise<string>;

  exchangeRate(
    _kaToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "exchangeRate(address)"(
    _kaToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exchangeRateView(
    _kaToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "exchangeRateView(address)"(
    _kaToken: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAPRFromUnderlying(
    _token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getAPRFromUnderlying(address)"(
    _token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAPRFromWrapped(
    _token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getAPRFromWrapped(address)"(
    _token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lend(
    _underlying: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _tokenHolder: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string[], string[]] & { targets: string[]; data: string[] }>;

  "lend(address,uint256,address)"(
    _underlying: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _tokenHolder: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string[], string[]] & { targets: string[]; data: string[] }>;

  lendingRegistry(overrides?: CallOverrides): Promise<string>;

  "lendingRegistry()"(overrides?: CallOverrides): Promise<string>;

  protocolKey(overrides?: CallOverrides): Promise<string>;

  "protocolKey()"(overrides?: CallOverrides): Promise<string>;

  unlend(
    _wrapped: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _tokenHolder: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string[], string[]] & { targets: string[]; data: string[] }>;

  "unlend(address,uint256,address)"(
    _wrapped: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    _tokenHolder: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string[], string[]] & { targets: string[]; data: string[] }>;

  callStatic: {
    bentoBox(overrides?: CallOverrides): Promise<string>;

    "bentoBox()"(overrides?: CallOverrides): Promise<string>;

    exchangeRate(
      _kaToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exchangeRate(address)"(
      _kaToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeRateView(
      _kaToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exchangeRateView(address)"(
      _kaToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAPRFromUnderlying(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAPRFromUnderlying(address)"(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAPRFromWrapped(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAPRFromWrapped(address)"(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lend(
      _underlying: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[], string[]] & { targets: string[]; data: string[] }>;

    "lend(address,uint256,address)"(
      _underlying: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[], string[]] & { targets: string[]; data: string[] }>;

    lendingRegistry(overrides?: CallOverrides): Promise<string>;

    "lendingRegistry()"(overrides?: CallOverrides): Promise<string>;

    protocolKey(overrides?: CallOverrides): Promise<string>;

    "protocolKey()"(overrides?: CallOverrides): Promise<string>;

    unlend(
      _wrapped: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[], string[]] & { targets: string[]; data: string[] }>;

    "unlend(address,uint256,address)"(
      _wrapped: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[], string[]] & { targets: string[]; data: string[] }>;
  };

  filters: {};

  estimateGas: {
    bentoBox(overrides?: CallOverrides): Promise<BigNumber>;

    "bentoBox()"(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeRate(
      _kaToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "exchangeRate(address)"(
      _kaToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exchangeRateView(
      _kaToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exchangeRateView(address)"(
      _kaToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAPRFromUnderlying(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAPRFromUnderlying(address)"(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAPRFromWrapped(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAPRFromWrapped(address)"(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lend(
      _underlying: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lend(address,uint256,address)"(
      _underlying: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lendingRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    "lendingRegistry()"(overrides?: CallOverrides): Promise<BigNumber>;

    protocolKey(overrides?: CallOverrides): Promise<BigNumber>;

    "protocolKey()"(overrides?: CallOverrides): Promise<BigNumber>;

    unlend(
      _wrapped: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "unlend(address,uint256,address)"(
      _wrapped: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bentoBox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "bentoBox()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exchangeRate(
      _kaToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "exchangeRate(address)"(
      _kaToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exchangeRateView(
      _kaToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "exchangeRateView(address)"(
      _kaToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAPRFromUnderlying(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAPRFromUnderlying(address)"(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAPRFromWrapped(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAPRFromWrapped(address)"(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lend(
      _underlying: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lend(address,uint256,address)"(
      _underlying: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lendingRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lendingRegistry()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protocolKey(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "protocolKey()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unlend(
      _wrapped: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "unlend(address,uint256,address)"(
      _wrapped: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      _tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
