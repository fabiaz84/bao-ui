/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface TokenoracleInterface extends utils.Interface {
  functions: {
    "fetch(address[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "fetch" | "fetch(address[])"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "fetch",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "fetch(address[])",
    values: [PromiseOrValue<string>[]]
  ): string;

  decodeFunctionResult(functionFragment: "fetch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fetch(address[])",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Tokenoracle extends BaseContract {
  contractName: "Tokenoracle";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenoracleInterface;

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
    fetch(
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<
      [string[], string[], number[], BigNumber[]] & {
        symbols: string[];
        names: string[];
        decimals: number[];
        supplies: BigNumber[];
      }
    >;

    "fetch(address[])"(
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<
      [string[], string[], number[], BigNumber[]] & {
        symbols: string[];
        names: string[];
        decimals: number[];
        supplies: BigNumber[];
      }
    >;
  };

  fetch(
    tokens: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<
    [string[], string[], number[], BigNumber[]] & {
      symbols: string[];
      names: string[];
      decimals: number[];
      supplies: BigNumber[];
    }
  >;

  "fetch(address[])"(
    tokens: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<
    [string[], string[], number[], BigNumber[]] & {
      symbols: string[];
      names: string[];
      decimals: number[];
      supplies: BigNumber[];
    }
  >;

  callStatic: {
    fetch(
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<
      [string[], string[], number[], BigNumber[]] & {
        symbols: string[];
        names: string[];
        decimals: number[];
        supplies: BigNumber[];
      }
    >;

    "fetch(address[])"(
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<
      [string[], string[], number[], BigNumber[]] & {
        symbols: string[];
        names: string[];
        decimals: number[];
        supplies: BigNumber[];
      }
    >;
  };

  filters: {};

  estimateGas: {
    fetch(
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fetch(address[])"(
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    fetch(
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fetch(address[])"(
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
