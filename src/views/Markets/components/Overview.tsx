import { useAccountLiquidity } from 'hooks/hard-synths/useAccountLiquidity'
import React from 'react'
import {
	buildStyles,
	CircularProgressbarWithChildren,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { getDisplayBalance } from '../../../utils/numberFormat'
import {
	BorrowLimit,
	BorrowLimitWrapper,
	StatWrapper,
	UserStat,
	UserStatsContainer,
	UserStatsWrapper,
} from './styles'

export const Overview = () => {
	const accountLiquidity = useAccountLiquidity()

	const borrowLimit = accountLiquidity
		? Math.floor(
				(accountLiquidity.usdBorrow /
					(accountLiquidity.usdBorrowable + accountLiquidity.usdBorrow)) *
					100,
		  )
		: 0

	const liquidationRisk = (_borrowLimit: any) => {
		const r = 255 * _borrowLimit/100;
		const g = 255 - (255 * _borrowLimit/100);
		return 'rgb('+r+','+g+',0)';
	}

	return accountLiquidity ? (
		<>
			<UserStatsContainer>
				<UserStatsWrapper>
					<StatWrapper>
						<UserStat>
							<h1>Net APY</h1>
							<p>
								{`${accountLiquidity ? accountLiquidity.netApy.toFixed(2) : 0}`}
								%
							</p>
						</UserStat>
					</StatWrapper>
					<StatWrapper>
						<UserStat>
							<h1>Total Supplied</h1>
							<p>
								$
								{`${
									accountLiquidity
										? getDisplayBalance(accountLiquidity.usdSupply, 0, 2)
										: 0
								}`}
							</p>
						</UserStat>
					</StatWrapper>
					<div
						style={{
							width: 150,
							height: 150,
							marginRight: '75px',
							marginLeft: '75px',
						}}
					>
						<CircularProgressbarWithChildren
							value={borrowLimit}
							strokeWidth={10}
							styles={buildStyles({
								strokeLinecap: 'butt',
								pathColor: '#ce6509',
							})}
						>
							<div
								style={{
									flexBasis: '16.6666666667%',
									maxWidth: '16.6666666667%',
								}}
							>
								<BorrowLimitWrapper>
									<BorrowLimit style={{ marginTop: '15px' }}>
										<h1>Borrow Limit</h1>
										<p>
											{`${
												accountLiquidity.usdBorrowable > 0
													? Math.floor(
															(accountLiquidity.usdBorrow /
																(accountLiquidity.usdBorrowable +
																	accountLiquidity.usdBorrow)) *
																100,
													  )
													: 0
											}`}
											%
										</p>
									</BorrowLimit>
								</BorrowLimitWrapper>
							</div>
						</CircularProgressbarWithChildren>
					</div>
					<StatWrapper>
						<UserStat>
							<h1>Total Borrowed</h1>
							<p>
								$
								{`${
									accountLiquidity
										? getDisplayBalance(accountLiquidity.usdBorrow, 0, 2)
										: 0
								}`}
							</p>
						</UserStat>
					</StatWrapper>
					<StatWrapper>
						<UserStat>
							<h1>Liquidation Risk</h1>
							<p style={{ color: `${liquidationRisk}` }}>Low</p>
						</UserStat>
					</StatWrapper>
				</UserStatsWrapper>
			</UserStatsContainer>
		</>
	) : (
		<></>
	)
}
