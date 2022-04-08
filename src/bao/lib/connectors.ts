import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'

const RPC_URLS: { [chainId: number]: string } = {
  3: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
}

export const injected = new InjectedConnector({ supportedChainIds: [3] })

export const network = new NetworkConnector({
  urls: { 3: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161' },
  defaultChainId: 3
})

export const walletConnect = new WalletConnectConnector({ rpc: { 3: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161' } })

export const coinbaseWallet = new WalletLinkConnector({ url: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161', appName: 'bao-ui', supportedChainIds: [3], })

