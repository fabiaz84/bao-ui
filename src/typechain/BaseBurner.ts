/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
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

export interface BaseBurnerInterface extends utils.Interface {
  functions: {
    "burn(address)": FunctionFragment;
    "execute()": FunctionFragment;
    "recover_balance(address)": FunctionFragment;
    "set_recovery(address)": FunctionFragment;
    "set_killed(bool)": FunctionFragment;
    "commit_transfer_ownership(address)": FunctionFragment;
    "accept_transfer_ownership()": FunctionFragment;
    "commit_transfer_emergency_ownership(address)": FunctionFragment;
    "accept_transfer_emergency_ownership()": FunctionFragment;
    "receiver()": FunctionFragment;
    "recovery()": FunctionFragment;
    "is_killed()": FunctionFragment;
    "owner()": FunctionFragment;
    "emergency_owner()": FunctionFragment;
    "future_owner()": FunctionFragment;
    "future_emergency_owner()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "burn"
      | "burn(address)"
      | "execute"
      | "execute()"
      | "recover_balance"
      | "recover_balance(address)"
      | "set_recovery"
      | "set_recovery(address)"
      | "set_killed"
      | "set_killed(bool)"
      | "commit_transfer_ownership"
      | "commit_transfer_ownership(address)"
      | "accept_transfer_ownership"
      | "accept_transfer_ownership()"
      | "commit_transfer_emergency_ownership"
      | "commit_transfer_emergency_ownership(address)"
      | "accept_transfer_emergency_ownership"
      | "accept_transfer_emergency_ownership()"
      | "receiver"
      | "receiver()"
      | "recovery"
      | "recovery()"
      | "is_killed"
      | "is_killed()"
      | "owner"
      | "owner()"
      | "emergency_owner"
      | "emergency_owner()"
      | "future_owner"
      | "future_owner()"
      | "future_emergency_owner"
      | "future_emergency_owner()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "burn",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "burn(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "execute", values?: undefined): string;
  encodeFunctionData(functionFragment: "execute()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recover_balance",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "recover_balance(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "set_recovery",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "set_recovery(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "set_killed",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "set_killed(bool)",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "commit_transfer_ownership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "commit_transfer_ownership(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "accept_transfer_ownership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "accept_transfer_ownership()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "commit_transfer_emergency_ownership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "commit_transfer_emergency_ownership(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "accept_transfer_emergency_ownership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "accept_transfer_emergency_ownership()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "receiver", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "receiver()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "recovery", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recovery()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "is_killed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "is_killed()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "emergency_owner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergency_owner()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "future_owner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "future_owner()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "future_emergency_owner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "future_emergency_owner()",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "burn(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recover_balance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recover_balance(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "set_recovery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "set_recovery(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "set_killed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "set_killed(bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commit_transfer_ownership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commit_transfer_ownership(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accept_transfer_ownership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accept_transfer_ownership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commit_transfer_emergency_ownership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commit_transfer_emergency_ownership(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accept_transfer_emergency_ownership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accept_transfer_emergency_ownership()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receiver", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "receiver()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recovery", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recovery()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "is_killed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "is_killed()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergency_owner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergency_owner()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "future_owner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "future_owner()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "future_emergency_owner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "future_emergency_owner()",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BaseBurner extends BaseContract {
  contractName: "BaseBurner";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseBurnerInterface;

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
    burn(
      _coin: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "burn(address)"(
      _coin: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    execute(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "execute()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    recover_balance(
      _coin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "recover_balance(address)"(
      _coin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    set_recovery(
      _recovery: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "set_recovery(address)"(
      _recovery: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    set_killed(
      _is_killed: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "set_killed(bool)"(
      _is_killed: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    commit_transfer_ownership(
      _future_owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "commit_transfer_ownership(address)"(
      _future_owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    accept_transfer_ownership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "accept_transfer_ownership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    commit_transfer_emergency_ownership(
      _future_owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "commit_transfer_emergency_ownership(address)"(
      _future_owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    accept_transfer_emergency_ownership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "accept_transfer_emergency_ownership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    receiver(overrides?: CallOverrides): Promise<[string]>;

    "receiver()"(overrides?: CallOverrides): Promise<[string]>;

    recovery(overrides?: CallOverrides): Promise<[string]>;

    "recovery()"(overrides?: CallOverrides): Promise<[string]>;

    is_killed(overrides?: CallOverrides): Promise<[boolean]>;

    "is_killed()"(overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    emergency_owner(overrides?: CallOverrides): Promise<[string]>;

    "emergency_owner()"(overrides?: CallOverrides): Promise<[string]>;

    future_owner(overrides?: CallOverrides): Promise<[string]>;

    "future_owner()"(overrides?: CallOverrides): Promise<[string]>;

    future_emergency_owner(overrides?: CallOverrides): Promise<[string]>;

    "future_emergency_owner()"(overrides?: CallOverrides): Promise<[string]>;
  };

  burn(
    _coin: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "burn(address)"(
    _coin: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  execute(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "execute()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  recover_balance(
    _coin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "recover_balance(address)"(
    _coin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  set_recovery(
    _recovery: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "set_recovery(address)"(
    _recovery: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  set_killed(
    _is_killed: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "set_killed(bool)"(
    _is_killed: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  commit_transfer_ownership(
    _future_owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "commit_transfer_ownership(address)"(
    _future_owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  accept_transfer_ownership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "accept_transfer_ownership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  commit_transfer_emergency_ownership(
    _future_owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "commit_transfer_emergency_ownership(address)"(
    _future_owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  accept_transfer_emergency_ownership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "accept_transfer_emergency_ownership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  receiver(overrides?: CallOverrides): Promise<string>;

  "receiver()"(overrides?: CallOverrides): Promise<string>;

  recovery(overrides?: CallOverrides): Promise<string>;

  "recovery()"(overrides?: CallOverrides): Promise<string>;

  is_killed(overrides?: CallOverrides): Promise<boolean>;

  "is_killed()"(overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  emergency_owner(overrides?: CallOverrides): Promise<string>;

  "emergency_owner()"(overrides?: CallOverrides): Promise<string>;

  future_owner(overrides?: CallOverrides): Promise<string>;

  "future_owner()"(overrides?: CallOverrides): Promise<string>;

  future_emergency_owner(overrides?: CallOverrides): Promise<string>;

  "future_emergency_owner()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    burn(
      _coin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "burn(address)"(
      _coin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    execute(overrides?: CallOverrides): Promise<boolean>;

    "execute()"(overrides?: CallOverrides): Promise<boolean>;

    recover_balance(
      _coin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "recover_balance(address)"(
      _coin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    set_recovery(
      _recovery: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "set_recovery(address)"(
      _recovery: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    set_killed(
      _is_killed: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "set_killed(bool)"(
      _is_killed: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    commit_transfer_ownership(
      _future_owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "commit_transfer_ownership(address)"(
      _future_owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    accept_transfer_ownership(overrides?: CallOverrides): Promise<boolean>;

    "accept_transfer_ownership()"(overrides?: CallOverrides): Promise<boolean>;

    commit_transfer_emergency_ownership(
      _future_owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "commit_transfer_emergency_ownership(address)"(
      _future_owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    accept_transfer_emergency_ownership(
      overrides?: CallOverrides
    ): Promise<boolean>;

    "accept_transfer_emergency_ownership()"(
      overrides?: CallOverrides
    ): Promise<boolean>;

    receiver(overrides?: CallOverrides): Promise<string>;

    "receiver()"(overrides?: CallOverrides): Promise<string>;

    recovery(overrides?: CallOverrides): Promise<string>;

    "recovery()"(overrides?: CallOverrides): Promise<string>;

    is_killed(overrides?: CallOverrides): Promise<boolean>;

    "is_killed()"(overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    emergency_owner(overrides?: CallOverrides): Promise<string>;

    "emergency_owner()"(overrides?: CallOverrides): Promise<string>;

    future_owner(overrides?: CallOverrides): Promise<string>;

    "future_owner()"(overrides?: CallOverrides): Promise<string>;

    future_emergency_owner(overrides?: CallOverrides): Promise<string>;

    "future_emergency_owner()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    burn(
      _coin: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "burn(address)"(
      _coin: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    execute(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "execute()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    recover_balance(
      _coin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "recover_balance(address)"(
      _coin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    set_recovery(
      _recovery: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "set_recovery(address)"(
      _recovery: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    set_killed(
      _is_killed: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "set_killed(bool)"(
      _is_killed: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    commit_transfer_ownership(
      _future_owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "commit_transfer_ownership(address)"(
      _future_owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    accept_transfer_ownership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "accept_transfer_ownership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    commit_transfer_emergency_ownership(
      _future_owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "commit_transfer_emergency_ownership(address)"(
      _future_owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    accept_transfer_emergency_ownership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "accept_transfer_emergency_ownership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    receiver(overrides?: CallOverrides): Promise<BigNumber>;

    "receiver()"(overrides?: CallOverrides): Promise<BigNumber>;

    recovery(overrides?: CallOverrides): Promise<BigNumber>;

    "recovery()"(overrides?: CallOverrides): Promise<BigNumber>;

    is_killed(overrides?: CallOverrides): Promise<BigNumber>;

    "is_killed()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    emergency_owner(overrides?: CallOverrides): Promise<BigNumber>;

    "emergency_owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    future_owner(overrides?: CallOverrides): Promise<BigNumber>;

    "future_owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    future_emergency_owner(overrides?: CallOverrides): Promise<BigNumber>;

    "future_emergency_owner()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      _coin: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "burn(address)"(
      _coin: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    execute(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "execute()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    recover_balance(
      _coin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "recover_balance(address)"(
      _coin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    set_recovery(
      _recovery: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "set_recovery(address)"(
      _recovery: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    set_killed(
      _is_killed: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "set_killed(bool)"(
      _is_killed: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    commit_transfer_ownership(
      _future_owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "commit_transfer_ownership(address)"(
      _future_owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    accept_transfer_ownership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "accept_transfer_ownership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    commit_transfer_emergency_ownership(
      _future_owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "commit_transfer_emergency_ownership(address)"(
      _future_owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    accept_transfer_emergency_ownership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "accept_transfer_emergency_ownership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    receiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "receiver()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recovery(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "recovery()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    is_killed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "is_killed()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emergency_owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "emergency_owner()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    future_owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "future_owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    future_emergency_owner(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "future_emergency_owner()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
