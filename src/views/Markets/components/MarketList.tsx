import { useWeb3React } from '@web3-react/core'
import Config from 'bao/lib/config'
import { ActiveSupportedMarket } from 'bao/lib/types'
import { getComptrollerContract } from 'bao/utils'
import BigNumber from 'bignumber.js'
import { Button } from 'components/Button'
import { SubmitButton } from 'components/Button/Button'
import HrText from 'components/HrText'
import { SpinnerLoader } from 'components/Loader'
import Tooltipped from 'components/Tooltipped'
import useBao from 'hooks/base/useBao'
import useTransactionHandler from 'hooks/base/useTransactionHandler'
import {
	AccountLiquidity,
	useAccountLiquidity,
} from 'hooks/markets/useAccountLiquidity'
import {
	Balance,
	useAccountBalances,
	useBorrowBalances,
	useSupplyBalances,
} from 'hooks/markets/useBalances'
import { useExchangeRates } from 'hooks/markets/useExchangeRates'
import { useAccountMarkets } from 'hooks/markets/useMarkets'
import React, { useMemo, useState } from 'react'
import {
	Accordion,
	Badge,
	Col,
	Container,
	FormCheck,
	Row,
} from 'react-bootstrap'
import styled from 'styled-components'
import { decimate, getDisplayBalance } from 'utils/numberFormat'
import { MarketBorrowModal, MarketSupplyModal } from './Modals'
import { MarketDetails, StatBlock } from './Stats'

export const MarketList: React.FC<MarketListProps> = ({
	markets: _markets,
}: MarketListProps) => {
	const { account } = useWeb3React()
	const accountBalances = useAccountBalances()
	const accountMarkets = useAccountMarkets()
	const accountLiquidity = useAccountLiquidity()
	const supplyBalances = useSupplyBalances()
	const borrowBalances = useBorrowBalances()
	const { exchangeRates } = useExchangeRates()

	const collateralMarkets = useMemo(() => {
		if (!(_markets && supplyBalances)) return
		return _markets
			.filter((market) => !market.isSynth)
			.sort((a, b) =>
				supplyBalances.find(
					(balance) =>
						balance.address.toLowerCase() === b.marketAddress.toLowerCase(),
				).balance > 0
					? 1
					: 0,
			)
	}, [_markets, supplyBalances])

	const synthMarkets = useMemo(() => {
		if (!(_markets && borrowBalances)) return
		return _markets
			.filter((market) => market.isSynth)
			.sort((a, b) =>
				borrowBalances.find(
					(balance) =>
						balance.address.toLowerCase() === b.marketAddress.toLowerCase(),
				).balance > 0
					? 1
					: 0,
			)
	}, [_markets, borrowBalances])

	return (
		<>
			{collateralMarkets &&
			synthMarkets &&
			accountBalances &&
			accountLiquidity &&
			accountMarkets &&
			supplyBalances &&
			borrowBalances &&
			exchangeRates ? (
				<Row>
					<Col lg={12} xl={6}>
						<HrText content="Collateral" />
						<>
							{account ? (
								<MarketListHeader headers={['Asset', 'Wallet', 'Liquidity']} />
							) : (
								<OfflineListHeader headers={['Asset', 'Liquidity']} />
							)}
						</>
						{collateralMarkets.map((market: ActiveSupportedMarket) => (
							<MarketListItemCollateral
								market={market}
								accountBalances={accountBalances}
								accountMarkets={accountMarkets}
								supplyBalances={supplyBalances}
								borrowBalances={borrowBalances}
								exchangeRates={exchangeRates}
								key={market.marketAddress}
							/>
						))}
					</Col>
					<Col lg={12} xl={6}>
						<HrText content="Synthetics" />
						{account ? (
							<MarketListHeader headers={['Asset', 'APR', 'Wallet']} />
						) : (
							<OfflineListHeader headers={['Asset', 'APR', 'Liquidity']} />
						)}
						{synthMarkets.map((market: ActiveSupportedMarket) => (
							<MarketListItemSynth
								market={market}
								accountLiquidity={accountLiquidity}
								accountBalances={accountBalances}
								borrowBalances={borrowBalances}
								exchangeRates={exchangeRates}
								key={market.marketAddress}
							/>
						))}
					</Col>
				</Row>
			) : (
				<SpinnerLoader block />
			)}
		</>
	)
}

const MarketListHeader: React.FC<MarketListHeaderProps> = ({
	headers,
}: MarketListHeaderProps) => {
	return (
		<Container fluid>
			<Row style={{ padding: '0.5rem 12px' }}>
				{headers.map((header: string) => (
					<MarketListHeaderCol style={{ paddingBottom: '0px' }} key={header}>
						<b>{header}</b>
					</MarketListHeaderCol>
				))}
			</Row>
		</Container>
	)
}

const OfflineListHeader: React.FC<MarketListHeaderProps> = ({
	headers,
}: MarketListHeaderProps) => {
	return (
		<Container fluid>
			<Row style={{ padding: '0.5rem 12px' }}>
				{headers.map((header: string) => (
					<OfflineListHeaderCol style={{ paddingBottom: '0px' }} key={header}>
						<b>{header}</b>
					</OfflineListHeaderCol>
				))}
			</Row>
		</Container>
	)
}

const MarketListItemCollateral: React.FC<MarketListItemProps> = ({
	market,
	accountBalances,
	accountMarkets,
	supplyBalances,
	borrowBalances,
	exchangeRates,
}: MarketListItemProps) => {
	const [showSupplyModal, setShowSupplyModal] = useState(false)
	const { handleTx } = useTransactionHandler()
	const bao = useBao()
	const { account } = useWeb3React()

	const suppliedUnderlying = useMemo(
		() =>
			supplyBalances.find((balance) => balance.address === market.marketAddress)
				.balance * decimate(exchangeRates[market.marketAddress]).toNumber(),
		[supplyBalances, exchangeRates],
	)

	const borrowed = useMemo(
		() =>
			borrowBalances.find((balance) => balance.address === market.marketAddress)
				.balance,
		[borrowBalances, exchangeRates],
	)

	const isInMarket = useMemo(
		() =>
			accountMarkets &&
			accountMarkets.find(
				(_market) => _market.marketAddress === market.marketAddress,
			),
		[accountMarkets],
	)

	return (
		<>
			{account ? (
				<Accordion>
					<StyledAccordionItem eventKey="0" style={{ padding: '12px' }}>
						<StyledAccordionHeader>
							<Row style={{ width: '100%' }}>
								<Col>
									<img src={market.icon} /> <b>{market.underlyingSymbol}</b>
								</Col>
								<Col>
									{account
										? accountBalances
												.find(
													(balance) =>
														balance.address === market.underlyingAddress,
												)
												.balance.toFixed(4)
										: '-'}
								</Col>
								<Col>
									{`$${getDisplayBalance(
										market.supplied * market.price -
											market.totalBorrows * market.price,
										0,
										0,
									)}`}
								</Col>
							</Row>
						</StyledAccordionHeader>
						<StyledAccordionBody>
							<StatBlock
								label="Supply Details"
								stats={[
									{
										label: 'Total Supplied',
										value: `${market.supplied.toFixed(4)} ${
											market.underlyingSymbol
										} | $${getDisplayBalance(
											market.supplied * market.price,
											0,
										)}`,
									},
									{
										label: 'Your Supply',
										value: `${suppliedUnderlying.toFixed(4)} ${
											market.underlyingSymbol
										} | $${getDisplayBalance(
											suppliedUnderlying * market.price,
											0,
										)}`,
									},
									{
										label: 'Collateral',
										value: (
											<Tooltipped
												content={
													<>
														{isInMarket ? 'Exit' : 'Enter'} Market w/ Supplied
														Collateral.
														<br />
														<br />
														<Badge bg="warning">WARNING</Badge>
														<br />
														Any supplied assets that are flagged as collateral
														can be seized if you are liquidated.
													</>
												}
											>
												<FormCheck
													type="switch"
													id="custom-switch"
													checked={!!isInMarket}
													disabled={
														(isInMarket && borrowed > 0) ||
														supplyBalances.find(
															(balance) =>
																balance.address === market.marketAddress,
														).balance === 0
													}
													onClick={(event) => {
														event.stopPropagation()
														const contract = getComptrollerContract(bao)
														if (isInMarket) {
															handleTx(
																contract.methods
																	.exitMarket(market.marketAddress)
																	.send({ from: account }),
																`Exit Market (${market.underlyingSymbol})`,
															)
														} else {
															handleTx(
																contract.methods
																	.enterMarkets(
																		[market.marketAddress],
																		Config.addressMap.DEAD,
																	)
																	.send({ from: account }), // Use dead as a placeholder param for `address borrower`, it will be unused
																`Enter Market (${market.underlyingSymbol})`,
															)
														}
													}}
												/>
											</Tooltipped>
										),
									},
									{
										label: 'Wallet Balance',
										value: `${accountBalances
											.find(
												(balance) =>
													balance.address === market.underlyingAddress,
											)
											.balance.toFixed(4)} ${market.underlyingSymbol}`,
									},
								]}
							/>
							<MarketDetails asset={market} title="Market Details" />
							<br />
							<Row>
								<Col>
									<SubmitButton onClick={() => setShowSupplyModal(true)}>
										Supply / Withdraw
									</SubmitButton>
								</Col>
								<Col>
									<Button to={`/markets/${market.mid}`} text="Details" />
								</Col>
							</Row>
							<MarketSupplyModal
								asset={market}
								show={showSupplyModal}
								onHide={() => setShowSupplyModal(false)}
							/>
						</StyledAccordionBody>
					</StyledAccordionItem>
				</Accordion>
			) : (
				<OfflineAccordionItem style={{ padding: '12px' }}>
					<OfflineAccordionHeader>
						<Row style={{ width: '100%' }}>
							<Col>
								<img src={market.icon} /> <b>{market.underlyingSymbol}</b>
							</Col>
							<Col>
								{`$${getDisplayBalance(
									market.supplied * market.price -
										market.totalBorrows * market.price,
									0,
									0,
								)}`}
							</Col>
						</Row>
					</OfflineAccordionHeader>
				</OfflineAccordionItem>
			)}
		</>
	)
}

const MarketListItemSynth: React.FC<MarketListItemProps> = ({
	market,
	accountLiquidity,
	accountBalances,
	borrowBalances,
	exchangeRates,
}: MarketListItemProps) => {
	const { account } = useWeb3React()
	const [showBorrowModal, setShowBorrowModal] = useState(false)

	const borrowed = useMemo(
		() =>
			borrowBalances.find((balance) => balance.address === market.marketAddress)
				.balance,
		[borrowBalances, exchangeRates],
	)

	return (
		<>
			{account ? (
				<Accordion>
					<StyledAccordionItem eventKey="0" style={{ padding: '12px' }}>
						<StyledAccordionHeader>
							<Row style={{ width: '100%' }}>
								<Col>
									<img src={market.icon} /> <b>{market.underlyingSymbol}</b>
								</Col>
								<Col>{market.borrowApy.toFixed(2)}%</Col>
								<Col>
									{accountBalances
										.find(
											(balance) => balance.address === market.underlyingAddress,
										)
										.balance.toFixed(4)}
								</Col>
							</Row>
						</StyledAccordionHeader>
						<StyledAccordionBody>
							<StatBlock
								label="Debt Information"
								stats={[
									{
										label: 'Total Debt',
										value: `$${getDisplayBalance(
											market.totalBorrows * market.price,
											0,
										)}`,
									},
									{
										label: 'Your Debt',
										value: `${borrowed.toFixed(4)} ${
											market.underlyingSymbol
										} | $${getDisplayBalance(borrowed * market.price, 0)}`,
									},
									{
										label: 'Debt Limit Remaining',
										value: `$${getDisplayBalance(
											accountLiquidity.usdBorrowable,
											0,
										)}`,
									},
									{
										label: '% of Your Debt',
										value: `${Math.floor(
											accountLiquidity.usdBorrow > 0
												? ((borrowed * market.price) /
														accountLiquidity.usdBorrow) *
														100
												: 0,
										)}%`,
									},
								]}
							/>
							<MarketDetails asset={market} title="Market Details" />
							<br />
							<Row>
								<Col>
									<SubmitButton onClick={() => setShowBorrowModal(true)}>
										Mint / Repay
									</SubmitButton>
								</Col>
								<Col>
									<Button to={`/markets/${market.mid}`} text="Details" />
								</Col>
							</Row>
							<MarketBorrowModal
								asset={market}
								show={showBorrowModal}
								onHide={() => setShowBorrowModal(false)}
							/>
						</StyledAccordionBody>
					</StyledAccordionItem>
				</Accordion>
			) : (
				<OfflineAccordionItem style={{ padding: '12px' }}>
					<OfflineAccordionHeader>
						<Row style={{ width: '100%' }}>
							<Col>
								<img src={market.icon} /> <b>{market.underlyingSymbol}</b>
							</Col>
							<Col>{market.borrowApy.toFixed(2)}%</Col>
							<Col>
								{`$${getDisplayBalance(
									market.supplied * market.price -
										market.totalBorrows * market.price,
									0,
									0,
								)}`}
							</Col>
						</Row>
					</OfflineAccordionHeader>
				</OfflineAccordionItem>
			)}
		</>
	)
}

type MarketListProps = {
	markets: ActiveSupportedMarket[]
}

type MarketListHeaderProps = {
	headers: string[]
}

type MarketListItemProps = {
	market: ActiveSupportedMarket
	accountBalances?: Balance[]
	accountMarkets?: ActiveSupportedMarket[]
	accountLiquidity?: AccountLiquidity
	supplyBalances?: Balance[]
	borrowBalances?: Balance[]
	exchangeRates?: { [key: string]: BigNumber }
}

const StyledAccordionHeader = styled(Accordion.Header)`
	&:active {
		border-radius: 8px 8px 0px 0px;
	}

	img {
		height: 32px;
		margin-right: 0.75rem;
		vertical-align: middle;
	}

	> button {
		background-color: ${(props) => props.theme.color.primary[100]};
		color: ${(props) => props.theme.color.text[100]};
		padding: 1.25rem;
		border: ${(props) => props.theme.border.default};
		border-radius: 8px;

		&:hover,
		&:focus,
		&:active,
		&:not(.collapsed) {
			background-color: ${(props) => props.theme.color.primary[200]};
			color: ${(props) => props.theme.color.text[100]};
			border: ${(props) => props.theme.border.default};
			box-shadow: none;
			border-radius: 8px 8px 0px 0px;
		}

		&:not(.collapsed) {
			transition: none;

			::after {
				background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='${(
					props,
				) =>
					props.theme.color.text[100].replace(
						'#',
						'%23',
					)}'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
			}
		}

		::after {
			// don't turn arrow blue
			background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='${(
				props,
			) =>
				props.theme.color.text[100].replace(
					'#',
					'%23',
				)}'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
		}

		.row > .col {
			margin: auto 0;
			text-align: right;

			&:first-child {
				text-align: left;
			}

			&:last-child {
				margin-right: 25px;
			}
		}
	}
`

const StyledAccordionItem = styled(Accordion.Item)`
	background-color: transparent;
	border-color: transparent;
`

const StyledAccordionBody = styled(Accordion.Body)`
	background-color: ${(props) => props.theme.color.primary[100]};
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	border: ${(props) => props.theme.border.default};
	border-top: none;
`

const MarketListHeaderCol = styled(Col)`
	text-align: right;

	&:first-child {
		text-align: left;
	}

	&:last-child {
		margin-right: 46px;
	}
`

const OfflineListHeaderCol = styled(Col)`
	text-align: right;

	&:first-child {
		text-align: left;
	}

	&:last-child {
		margin-right: 20px;
	}
`

const OfflineAccordionItem = styled.div`
	background-color: transparent;
	border-color: transparent;
	width: 100%;
`

const OfflineAccordionHeader = styled.div`
		background: ${(props) => props.theme.color.transparent[100]};
		color: ${(props) => props.theme.color.text[100]};
		padding: 1.25rem;
		border: ${(props) => props.theme.border.default};
		border-radius: 8px;

		&:hover,
		&:focus,
		&:active {
			background: ${(props) => props.theme.color.transparent[200]};
			color: ${(props) => props.theme.color.text[100]};
			box-shadow: none;
		}
		
		.row > .col {
			margin: auto 0;
			text-align: right;

			&:first-child {
				text-align: left;
			}

			&:last-child {
			}
		}
			
		img {
			height: 32px;
			margin-right: 0.75rem;
			vertical-align: middle;
		}
	}
`
