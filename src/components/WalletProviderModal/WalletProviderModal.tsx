import metamaskLogo from 'assets/img/metamask-fox.svg'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Button from '../Button'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'
import Spacer from '../Spacer'
import WalletCard from './components/WalletCard'
import Config from '../../bao/lib/config'

const WalletProviderModal: React.FC<ModalProps> = ({ onDismiss }) => {
	const { account, ethereum, connect }: any = useWallet()

	useEffect(() => {
		if (account && ethereum.chainId === Config.defaultRpc.chainId) {
			onDismiss()
		}
	}, [account, onDismiss])

	return (
		<Modal>
			<ModalTitle text="Select a wallet provider." />

			<ModalContent>
				<StyledWalletsWrapper>
					<StyledWalletCard>
						<WalletCard
							icon={<img src={metamaskLogo} style={{ height: 32 }} />}
							onConnect={() => connect('injected')}
							title="Metamask"
						/>
					</StyledWalletCard>
					<Spacer size="sm" />
				</StyledWalletsWrapper>
			</ModalContent>

			<ModalActions>
				<Button text="Cancel" variant="secondary" onClick={onDismiss} />
			</ModalActions>
		</Modal>
	)
}

const StyledWalletsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
		height: 100vh;
		overflow-y: scroll;
	}
	@media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
		flex-direction: column;
		flex-wrap: none;
	}
`

const StyledWalletCard = styled.div`
	flex-basis: calc(50% - ${(props) => props.theme.spacing[2]}px);
`

export default WalletProviderModal
