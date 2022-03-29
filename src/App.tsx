// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import fetcher from 'bao/lib/fetcher'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyle from 'GlobalStyle'
import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'
import { UseWalletProvider } from 'use-wallet'
import Market from 'views/Markets/Market'
import MobileMenu from './components/MobileMenu'
import TopBar from './components/TopBar'
import BaoProvider from './contexts/BaoProvider'
import MarketsProvider from './contexts/Markets'
import ModalsProvider from './contexts/Modals'
import TransactionProvider from './contexts/Transactions'
import theme from './theme'
import Ballast from './views/Ballast'
import NFT from './views/NFT'
import Markets from './views/Markets'

library.add(fas, fab)

const url = new URL(window.location.toString())
if (url.searchParams.has('ref')) {
	document.querySelectorAll('a[href]').forEach((el) => {
		const attrUrl = new URL(el.getAttribute('href'))
		attrUrl.searchParams.set('ref', url.searchParams.get('ref'))
	})
}

const App: React.FC = () => {
	const [mobileMenu, setMobileMenu] = useState(false)
	const [isDarkMode, setIsDarkMode] = useState(false)

	const handleDismissMobileMenu = useCallback(() => {
		setMobileMenu(false)
	}, [setMobileMenu])

	const handlePresentMobileMenu = useCallback(() => {
		setMobileMenu(true)
	}, [setMobileMenu])

	const toggleTheme = useCallback(() => {
		localStorage.setItem('darkMode', isDarkMode ? 'false' : 'true')
		setIsDarkMode(!isDarkMode)
	}, [isDarkMode])

	// Remember darkmode prefs
	useEffect(() => {
		if (localStorage.getItem('darkMode') === null)
			localStorage.setItem('darkMode', 'false')
		const isDarkMode = localStorage.getItem('darkMode') === 'true'
		setIsDarkMode(isDarkMode)
	}, [])

	return (
		<Providers isDarkMode={isDarkMode}>
			<Router>
				<TopBar
					isDarkMode={isDarkMode}
					toggleTheme={toggleTheme}
					onPresentMobileMenu={handlePresentMobileMenu}
				/>
				<MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
				<Switch>
					<Route path="/" exact>
						<Markets />
					</Route>
					<Route path="/market/:id" exact>
						<Market />
					</Route>
					{/* < Route path="/ballast">
						<Ballast />
					</Route> */}
					{/* <Route path="/Baskets">
						<Baskets />
					</Route> */}
					{/* <Route path="/Farms">
						<Farms />
					</Route> */}
					<Route path="/NFT">
						<NFT />
					</Route>
				</Switch>
			</Router>
		</Providers>
	)
}

const Providers: React.FC<ProvidersProps> = ({
	children,
	isDarkMode,
}: ProvidersProps) => {
	return (
		<ThemeProvider theme={theme(isDarkMode)}>
			<GlobalStyle />
			<UseWalletProvider
				chainId={3}
				connectors={{
					walletconnect: {
						rpcUrl:
							'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
					},
				}}
			>
				<BaoProvider>
					{/* <BasketsProvider> */}
					<MarketsProvider>
						{/* <TransactionProvider> */}
							{/* <FarmsProvider> */}
							<SWRConfig
								value={{
									fetcher,
									refreshInterval: 300000,
								}}
							>
								<ModalsProvider>{children}</ModalsProvider>
							</SWRConfig>
							{/* </FarmsProvider> */}
							{/*</TransactionProvider> */}
						</MarketsProvider>
					{/* </BasketsProvider> */}
				</BaoProvider>
			</UseWalletProvider>
		</ThemeProvider>
	)
}

type ProvidersProps = {
	children: any
	isDarkMode: boolean
}

export default App