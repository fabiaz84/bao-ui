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

export interface BaoDistributionInterface extends utils.Interface {
  functions: {
    "baoToken()": FunctionFragment;
    "claim()": FunctionFragment;
    "claimable(address,uint64)": FunctionFragment;
    "distCurve(uint256,uint256)": FunctionFragment;
    "distributions(address)": FunctionFragment;
    "endDistribution()": FunctionFragment;
    "lockDistribution(uint256)": FunctionFragment;
    "lockStatus(address)": FunctionFragment;
    "merkleRoot()": FunctionFragment;
    "startDistribution(bytes32[],uint256)": FunctionFragment;
    "treasury()": FunctionFragment;
    "votingEscrow()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "baoToken"
      | "baoToken()"
      | "claim"
      | "claim()"
      | "claimable"
      | "claimable(address,uint64)"
      | "distCurve"
      | "distCurve(uint256,uint256)"
      | "distributions"
      | "distributions(address)"
      | "endDistribution"
      | "endDistribution()"
      | "lockDistribution"
      | "lockDistribution(uint256)"
      | "lockStatus"
      | "lockStatus(address)"
      | "merkleRoot"
      | "merkleRoot()"
      | "startDistribution"
      | "startDistribution(bytes32[],uint256)"
      | "treasury"
      | "treasury()"
      | "votingEscrow"
      | "votingEscrow()"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "baoToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "baoToken()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "claim()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimable",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimable(address,uint64)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "distCurve",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "distCurve(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "distributions",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "distributions(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "endDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "endDistribution()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockDistribution",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "lockDistribution(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "lockStatus",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "lockStatus(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoot()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startDistribution",
    values: [PromiseOrValue<BytesLike>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startDistribution(bytes32[],uint256)",
    values: [PromiseOrValue<BytesLike>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "treasury()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingEscrow",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingEscrow()",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "baoToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baoToken()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimable(address,uint64)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "distCurve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "distCurve(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributions(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endDistribution()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockDistribution(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockStatus", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockStatus(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "merkleRoot()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startDistribution(bytes32[],uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "treasury()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votingEscrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingEscrow()",
    data: BytesLike
  ): Result;

  events: {
    "DistributionEnded(address,uint256)": EventFragment;
    "DistributionLocked(address,uint256)": EventFragment;
    "DistributionStarted(address)": EventFragment;
    "TokensClaimed(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DistributionEnded"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "DistributionEnded(address,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DistributionLocked"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "DistributionLocked(address,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DistributionStarted"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "DistributionStarted(address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TokensClaimed(address,uint256)"
  ): EventFragment;
}

export interface DistributionEndedEventObject {
  _account: string;
  _amount: BigNumber;
}
export type DistributionEndedEvent = TypedEvent<
  [string, BigNumber],
  DistributionEndedEventObject
>;

export type DistributionEndedEventFilter =
  TypedEventFilter<DistributionEndedEvent>;

export interface DistributionLockedEventObject {
  _account: string;
  _amount: BigNumber;
}
export type DistributionLockedEvent = TypedEvent<
  [string, BigNumber],
  DistributionLockedEventObject
>;

export type DistributionLockedEventFilter =
  TypedEventFilter<DistributionLockedEvent>;

export interface DistributionStartedEventObject {
  _account: string;
}
export type DistributionStartedEvent = TypedEvent<
  [string],
  DistributionStartedEventObject
>;

export type DistributionStartedEventFilter =
  TypedEventFilter<DistributionStartedEvent>;

export interface TokensClaimedEventObject {
  _account: string;
  _amount: BigNumber;
}
export type TokensClaimedEvent = TypedEvent<
  [string, BigNumber],
  TokensClaimedEventObject
>;

export type TokensClaimedEventFilter = TypedEventFilter<TokensClaimedEvent>;

export interface BaoDistribution extends BaseContract {
  contractName: "BaoDistribution";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaoDistributionInterface;

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
    baoToken(overrides?: CallOverrides): Promise<[string]>;

    "baoToken()"(overrides?: CallOverrides): Promise<[string]>;

    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "claim()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimable(
      _account: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { c: BigNumber }>;

    "claimable(address,uint64)"(
      _account: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { c: BigNumber }>;

    distCurve(
      _amountOwedTotal: PromiseOrValue<BigNumberish>,
      _daysSinceStart: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _amount: BigNumber }>;

    "distCurve(uint256,uint256)"(
      _amountOwedTotal: PromiseOrValue<BigNumberish>,
      _daysSinceStart: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _amount: BigNumber }>;

    distributions(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        dateStarted: BigNumber;
        dateEnded: BigNumber;
        lastClaim: BigNumber;
        amountOwedTotal: BigNumber;
      }
    >;

    "distributions(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        dateStarted: BigNumber;
        dateEnded: BigNumber;
        lastClaim: BigNumber;
        amountOwedTotal: BigNumber;
      }
    >;

    endDistribution(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "endDistribution()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lockDistribution(
      _time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "lockDistribution(uint256)"(
      _time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lockStatus(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "lockStatus(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    merkleRoot(overrides?: CallOverrides): Promise<[string]>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<[string]>;

    startDistribution(
      _proof: PromiseOrValue<BytesLike>[],
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "startDistribution(bytes32[],uint256)"(
      _proof: PromiseOrValue<BytesLike>[],
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    "treasury()"(overrides?: CallOverrides): Promise<[string]>;

    votingEscrow(overrides?: CallOverrides): Promise<[string]>;

    "votingEscrow()"(overrides?: CallOverrides): Promise<[string]>;
  };

  baoToken(overrides?: CallOverrides): Promise<string>;

  "baoToken()"(overrides?: CallOverrides): Promise<string>;

  claim(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "claim()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimable(
    _account: PromiseOrValue<string>,
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "claimable(address,uint64)"(
    _account: PromiseOrValue<string>,
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  distCurve(
    _amountOwedTotal: PromiseOrValue<BigNumberish>,
    _daysSinceStart: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "distCurve(uint256,uint256)"(
    _amountOwedTotal: PromiseOrValue<BigNumberish>,
    _daysSinceStart: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  distributions(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      dateStarted: BigNumber;
      dateEnded: BigNumber;
      lastClaim: BigNumber;
      amountOwedTotal: BigNumber;
    }
  >;

  "distributions(address)"(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      dateStarted: BigNumber;
      dateEnded: BigNumber;
      lastClaim: BigNumber;
      amountOwedTotal: BigNumber;
    }
  >;

  endDistribution(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "endDistribution()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lockDistribution(
    _time: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "lockDistribution(uint256)"(
    _time: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lockStatus(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "lockStatus(address)"(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  merkleRoot(overrides?: CallOverrides): Promise<string>;

  "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

  startDistribution(
    _proof: PromiseOrValue<BytesLike>[],
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "startDistribution(bytes32[],uint256)"(
    _proof: PromiseOrValue<BytesLike>[],
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  treasury(overrides?: CallOverrides): Promise<string>;

  "treasury()"(overrides?: CallOverrides): Promise<string>;

  votingEscrow(overrides?: CallOverrides): Promise<string>;

  "votingEscrow()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    baoToken(overrides?: CallOverrides): Promise<string>;

    "baoToken()"(overrides?: CallOverrides): Promise<string>;

    claim(overrides?: CallOverrides): Promise<void>;

    "claim()"(overrides?: CallOverrides): Promise<void>;

    claimable(
      _account: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimable(address,uint64)"(
      _account: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    distCurve(
      _amountOwedTotal: PromiseOrValue<BigNumberish>,
      _daysSinceStart: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "distCurve(uint256,uint256)"(
      _amountOwedTotal: PromiseOrValue<BigNumberish>,
      _daysSinceStart: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    distributions(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        dateStarted: BigNumber;
        dateEnded: BigNumber;
        lastClaim: BigNumber;
        amountOwedTotal: BigNumber;
      }
    >;

    "distributions(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        dateStarted: BigNumber;
        dateEnded: BigNumber;
        lastClaim: BigNumber;
        amountOwedTotal: BigNumber;
      }
    >;

    endDistribution(overrides?: CallOverrides): Promise<void>;

    "endDistribution()"(overrides?: CallOverrides): Promise<void>;

    lockDistribution(
      _time: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "lockDistribution(uint256)"(
      _time: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    lockStatus(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "lockStatus(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    merkleRoot(overrides?: CallOverrides): Promise<string>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

    startDistribution(
      _proof: PromiseOrValue<BytesLike>[],
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "startDistribution(bytes32[],uint256)"(
      _proof: PromiseOrValue<BytesLike>[],
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;

    "treasury()"(overrides?: CallOverrides): Promise<string>;

    votingEscrow(overrides?: CallOverrides): Promise<string>;

    "votingEscrow()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "DistributionEnded(address,uint256)"(
      _account?: null,
      _amount?: null
    ): DistributionEndedEventFilter;
    DistributionEnded(
      _account?: null,
      _amount?: null
    ): DistributionEndedEventFilter;

    "DistributionLocked(address,uint256)"(
      _account?: null,
      _amount?: null
    ): DistributionLockedEventFilter;
    DistributionLocked(
      _account?: null,
      _amount?: null
    ): DistributionLockedEventFilter;

    "DistributionStarted(address)"(
      _account?: null
    ): DistributionStartedEventFilter;
    DistributionStarted(_account?: null): DistributionStartedEventFilter;

    "TokensClaimed(address,uint256)"(
      _account?: null,
      _amount?: null
    ): TokensClaimedEventFilter;
    TokensClaimed(_account?: null, _amount?: null): TokensClaimedEventFilter;
  };

  estimateGas: {
    baoToken(overrides?: CallOverrides): Promise<BigNumber>;

    "baoToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "claim()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimable(
      _account: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimable(address,uint64)"(
      _account: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    distCurve(
      _amountOwedTotal: PromiseOrValue<BigNumberish>,
      _daysSinceStart: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "distCurve(uint256,uint256)"(
      _amountOwedTotal: PromiseOrValue<BigNumberish>,
      _daysSinceStart: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    distributions(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "distributions(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    endDistribution(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "endDistribution()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lockDistribution(
      _time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "lockDistribution(uint256)"(
      _time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lockStatus(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lockStatus(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<BigNumber>;

    startDistribution(
      _proof: PromiseOrValue<BytesLike>[],
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "startDistribution(bytes32[],uint256)"(
      _proof: PromiseOrValue<BytesLike>[],
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    "treasury()"(overrides?: CallOverrides): Promise<BigNumber>;

    votingEscrow(overrides?: CallOverrides): Promise<BigNumber>;

    "votingEscrow()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    baoToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "baoToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "claim()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimable(
      _account: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "claimable(address,uint64)"(
      _account: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    distCurve(
      _amountOwedTotal: PromiseOrValue<BigNumberish>,
      _daysSinceStart: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "distCurve(uint256,uint256)"(
      _amountOwedTotal: PromiseOrValue<BigNumberish>,
      _daysSinceStart: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    distributions(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "distributions(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    endDistribution(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "endDistribution()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lockDistribution(
      _time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "lockDistribution(uint256)"(
      _time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lockStatus(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lockStatus(address)"(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startDistribution(
      _proof: PromiseOrValue<BytesLike>[],
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "startDistribution(bytes32[],uint256)"(
      _proof: PromiseOrValue<BytesLike>[],
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "treasury()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    votingEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "votingEscrow()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
