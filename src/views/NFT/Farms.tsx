import { Button } from 'components/Button'
import Container from 'components/Container'
import Page from 'components/Page'
import PageHeader from 'components/PageHeader'
import Spacer from 'components/Spacer'
import WalletProviderModal from 'components/WalletProviderModal'
import useModal from 'hooks/useModal'
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import Config from '../../bao/lib/config'
import Balances from './components/balances'
import { StyledInfo } from './components/styles'

const Farms: React.FC = () => {
	const { path } = useRouteMatch()
	const { account, ethereum }: any = useWallet()
	const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

	return (
		<Switch>
			<Page>
				{account && ethereum.chainId === Config.defaultRpc.chainId ? (
					<>
						<Route exact path={path}>
							<PageHeader
								icon=''
								title="BaoNFT"
								subtitle="Check your eligibility and claim your BaoNFT here!"
							/>
							<Container>
								<StyledInfo>
								<div
						style={{
							alignItems: 'center',
							display: 'flex',
							flex: 1,
							justifyContent: 'center',
						}}
					>									{' '}
					Check your eligibility and claim your BaoNFT here!{' '}
					</div>
								</StyledInfo>
								<Spacer size="md" />
								<Balances />
								<Spacer size="md" />
							</Container>
						</Route>
					</>
				) : (
					<div
						style={{
							alignItems: 'center',
							display: 'flex',
							flex: 1,
							justifyContent: 'center',
						}}
					>
						<Button
							onClick={onPresentWalletProviderModal}
							text="🔓 Unlock Wallet"
						/>
					</div>
				)}
			</Page>
		</Switch>
	)
}

export default Farms
