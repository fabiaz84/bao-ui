import { useWeb3React } from '@web3-react/core'
import Config from 'bao/lib/config'
import { getBaoSupply } from 'bao/utils'
import BigNumber from 'bignumber.js'
import ExternalLink from 'components/ExternalLink'
import { SpinnerLoader } from 'components/Loader'
import useBao from 'hooks/base/useBao'
import useTokenBalance from 'hooks/base/useTokenBalance'
import useAllEarnings from 'hooks/farms/useAllEarnings'
import useAllStakedValue from 'hooks/farms/useAllStakedValue'
import useFarms from 'hooks/farms/useFarms'
import useLockedEarnings from 'hooks/farms/useLockedEarnings'
import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import styled from 'styled-components'
import GraphUtil from 'utils/graph'
import { getDisplayBalance } from 'utils/numberFormat'
import { StyledInfo } from './styles'

const PendingRewards: React.FC = () => {
	const [start, setStart] = useState(0)
	const [end, setEnd] = useState(0)
	const [scale, setScale] = useState(1)

	const allEarnings = useAllEarnings()
	let sumEarning = 0
	for (const earning of allEarnings) {
		sumEarning += new BigNumber(earning)
			.div(new BigNumber(10).pow(18))
			.toNumber()
	}

	const [farms] = useFarms()
	const allStakedValue = useAllStakedValue()

	if (allStakedValue && allStakedValue.length) {
		const sumWeth = farms.reduce(
			(c, { id }, i) => c + (allStakedValue[i].totalWethValue.toNumber() || 0),
			0,
		)
	}

	useEffect(() => {
		setStart(end)
		setEnd(sumEarning)
	}, [sumEarning])

	return (
		<span
			style={{
				transform: `scale(${scale})`,
				transformOrigin: 'right bottom',
				transition: 'transform 0.5s',
				display: 'inline-block',
			}}
		>
			<CountUp
				start={start}
				end={end}
				decimals={end < 0 ? 4 : end > 1e5 ? 0 : 2}
				duration={1}
				onStart={() => {
					setScale(1.25)
					setTimeout(() => setScale(1), 600)
				}}
				separator=","
			/>
		</span>
	)
}

const Balances: React.FC = () => {
	const [totalSupply, setTotalSupply] = useState<BigNumber>()
	const bao = useBao()
	const baoBalance = useTokenBalance(
		bao && bao.getContract('bao').options.address,
	)
	const { account } = useWeb3React()
	const [baoPrice, setBaoPrice] = useState<BigNumber | undefined>()
	const locks = useLockedEarnings()

	useEffect(() => {
		async function fetchTotalSupply() {
			const supply = await getBaoSupply(bao)
			setTotalSupply(supply)
		}
		if (bao) {
			fetchTotalSupply()
		}
	}, [bao, setTotalSupply])

	useEffect(() => {
		if (!bao) return
		GraphUtil.getPrice(Config.addressMap.WETH).then(async (wethPrice) => {
			const baoPrice = await GraphUtil.getPriceFromPair(
				wethPrice,
				Config.contracts.bao[Config.networkId].address,
			)
			setBaoPrice(baoPrice)
		})
	}, [bao, setBaoPrice])

	return (
		<Fragment>
			<Container>
				<Row style={{ display: 'flex', flexWrap: 'wrap' }}>
					<StyledInfo>
						❗️{' '}
						<span
							style={{
								fontWeight: 700,
								color: '${(props) => props.theme.color.red}',
							}}
						>
							Attention:
						</span>{' '}
						Be sure to read the{' '}
						<ExternalLink href="https://docs.bao.finance/" target="_blank">
							docs
						</ExternalLink>{' '}
						before using the farms so you are familiar with protocol risks and
						fees!
					</StyledInfo>
				</Row>
				<Row style={{ display: 'flex', flexWrap: 'wrap', marginTop: '2rem' }}>
					<UserStatsContainer>
						<UserStatsWrapper>
							<StatWrapper>
								<UserStat>
									<h1>Your BAO Balance</h1>
									<p>{account ? getDisplayBalance(baoBalance) : '-'} </p>
								</UserStat>
							</StatWrapper>
							<StatWrapper>
								<UserStat>
									<h1>Your Locked BAO</h1>
									<p>{account ? getDisplayBalance(locks) : '-'} </p>
								</UserStat>
							</StatWrapper>
							<StatWrapper>
								<UserStat>
									<h1>Pending Harvest</h1>
									<p>{account ? <PendingRewards /> : '-'}</p>
								</UserStat>
							</StatWrapper>
							<StatWrapper>
								<UserStat>
									<h1>Total BAO Supply</h1>
									<p>
										{totalSupply ? (
											getDisplayBalance(totalSupply)
										) : (
											<SpinnerLoader />
										)}
									</p>
								</UserStat>
							</StatWrapper>
							<StatWrapper>
								<UserStat>
									<h1>BAO Price</h1>
									<p>
										{baoPrice ? (
											`$${getDisplayBalance(baoPrice, 0)}`
										) : (
											<SpinnerLoader />
										)}
									</p>
								</UserStat>
							</StatWrapper>
						</UserStatsWrapper>
					</UserStatsContainer>
				</Row>
			</Container>
		</Fragment>
	)
}

export default Balances

const BaoPrice = styled.div`
	margin: 0 auto;
	text-align: center;
`

export const UserStatsContainer = styled(Row)`
	margin: auto;
	justify-content: space-evenly;
`

export const UserStatsWrapper = styled(Col)`
	align-items: center;
	display: flex;
	flex-flow: row wrap;
	margin-right: -0.665rem;
	margin-left: -0.665rem;
	justify-content: space-evenly;
`

export const StatWrapper = styled(Col)`
	background-color: ${(props) => props.theme.color.primary[200]};
	margin: 0.5rem 0.5rem;
	border-radius: 8px;
	position: relative;
	flex: 1 1 0%;
	padding-inline-start: 1rem;
	padding-inline-end: 1rem;
	padding: 1.25rem 16px;
	border: none;

	@media (max-width: ${(props) => props.theme.breakpoints.lg}px) {
		padding: 1rem 12px;
		padding-inline-start: 0.75rem;
		padding-inline-end: 0.75rem;
	}

	@media (max-width: ${(props) => props.theme.breakpoints.lg}px) {
		min-width: 120px;
	}
`

export const UserStat = styled.div`
	overflow-wrap: break-word;
	text-align: center;

	p {
		font-size: 1rem;
		margin: 0px;

		@media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
			font-size: 0.875rem;
		}
	}

	h1 {
		font-size: 0.875rem;
		color: ${(props) => props.theme.color.text[200]};
		margin: 0px;

		@media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
			font-size: 0.75rem;
		}
	}
`
