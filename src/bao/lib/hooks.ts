import { SafeAppConnector, useSafeAppConnection } from '@gnosis.pm/safe-apps-web3-react'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { getNetworkConnector, injected } from './connectors'

declare global {
	interface Window {
		ethereum?: any
	}
}

export function useEagerConnect() {
	const { activate, active } = useWeb3React()

	const [tried, setTried] = useState(false)

	const safeMultisigConnector = new SafeAppConnector()
	const triedToConnectToSafe = useSafeAppConnection(safeMultisigConnector)

	// try connecting to an injected connector first, then the default read-only one
	useEffect(() => {
		if (triedToConnectToSafe) {
			injected.isAuthorized().then(isAuthorized => {
				if (isAuthorized) {
					activate(injected, undefined, true).catch(() => {
						setTried(true)
					})
				} else if (isMobile && window.ethereum) {
					activate(injected, undefined, true).catch(() => {
						setTried(true)
					})
				} else {
					activate(getNetworkConnector(), undefined, true).catch(() => {
						setTried(true)
					})
				}
			})
		}
	}, [triedToConnectToSafe, activate])

	// wait until we get confirmation of a connection to flip the flag
	useEffect(() => {
		if (!tried && active) {
			setTried(true)
		}
	}, [active, tried])

	return tried
}

export function useInactiveListener(suppress = false) {
	const { active, error, activate } = useWeb3React()

	useEffect((): any => {
		const { ethereum } = window as any
		if (ethereum && ethereum.on && !active && !error && !suppress) {
			const handleConnect = () => {
				console.log("Handling 'connect' event")
				activate(injected)
			}
			const handleChainChanged = (chainId: string | number) => {
				console.log("Handling 'chainChanged' event with payload", chainId)
				activate(injected)
			}
			const handleAccountsChanged = (accounts: string[]) => {
				console.log("Handling 'accountsChanged' event with payload", accounts)
				if (accounts.length > 0) {
					activate(injected)
				}
			}

			ethereum.on('connect', handleConnect)
			ethereum.on('chainChanged', handleChainChanged)
			ethereum.on('accountsChanged', handleAccountsChanged)

			return () => {
				if (ethereum.removeListener) {
					ethereum.removeListener('connect', handleConnect)
					ethereum.removeListener('chainChanged', handleChainChanged)
					ethereum.removeListener('accountsChanged', handleAccountsChanged)
				}
			}
		}
	}, [active, error, suppress, activate])
}
