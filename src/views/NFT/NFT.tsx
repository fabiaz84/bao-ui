import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useWeb3React } from '@web3-react/core'
import baoElder from 'assets/img/nft/baoelder.png'
import baoSwap from 'assets/img/nft/baoswap.png'
import Config from 'bao/lib/config'
import {
	getBaoSwapContract,
	getElderContract,
	mintBaoSwap,
	mintElder,
} from 'bao/utils'
import { SubmitButton } from 'components/Button/Button'
import Label from 'components/Label'
import Page from 'components/Page'
import PageHeader from 'components/PageHeader'
import Spacer from 'components/Spacer'
import useBao from 'hooks/base/useBao'
import useTransactionHandler from 'hooks/base/useTransactionHandler'
import { useBaoSwapClaimedCheck, useElderClaimedCheck } from 'hooks/nft/useMint'
import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { addresses as elderAddresses } from './components/baoElderWL.json'
import { addresses as baoSwapAddresses } from './components/baoSwapWL.json'
import { StyledInfo, StyledWrapper } from './components/styles'

const NFT: React.FC = () => {
	const { account } = useWeb3React()
	const bao = useBao()
	const isElderClaimed = useElderClaimedCheck()
	const isBaoSwapClaimed = useBaoSwapClaimedCheck()
	const { pendingTx, handleTx } = useTransactionHandler()
	const elderContract = getElderContract(bao)
	const baoSwapContract = getBaoSwapContract(bao)

	return (
		<Page>
			<PageHeader
				icon=""
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
					>
						Check your eligibility and claim your BaoNFT here!
					</div>
				</StyledInfo>
				<Spacer size="md" />
				<StyledWrapper>
					<Card>
						<Card.Header>
							<Label text="BaoElder NFT" />
						</Card.Header>
						<Card.Body>
							<img src={baoElder} width={320} height={300} alt="" />
						</Card.Body>
						<Card.Footer>
							<>
								{pendingTx ? (
									<SubmitButton disabled={true}>
										{typeof pendingTx === 'string' ? (
											<a
												href={`${Config.defaultRpc.blockExplorerUrls}/tx/${pendingTx}`}
												target="_blank"
											>
												Pending Transaction
												<FontAwesomeIcon icon="external-link-alt" />
											</a>
										) : (
											'Pending Transaction'
										)}
									</SubmitButton>
								) : !account ? (
									<SubmitButton disabled={true}>Claim</SubmitButton>
								) : typeof account === 'string' ? (
									elderAddresses.includes(account.toLowerCase()) ? (
										!isElderClaimed ? (
											<SubmitButton
												onClick={async () => {
													handleTx(
														mintElder(elderContract, account),
														`Claimed Bao Elder NFT`,
													)
												}}
											>
												Claim
											</SubmitButton>
										) : (
											<SubmitButton disabled={true}>
												Already Claimed
											</SubmitButton>
										)
									) : (
										<SubmitButton disabled={true}>Not Eligible</SubmitButton>
									)
								) : (
									<SubmitButton disabled={true}>
										Checking Eligibility...
									</SubmitButton>
								)}
							</>
						</Card.Footer>
					</Card>
					<Spacer />
					<Card>
						<Card.Header>
							<Label text="BaoSwap NFT" />
						</Card.Header>
						<Card.Body>
							<img src={baoSwap} width={320} height={300} alt="" />
						</Card.Body>
						<Card.Footer>
							<>
								{pendingTx ? (
									<SubmitButton disabled={true}>
										{typeof pendingTx === 'string' ? (
											<a
												href={`${Config.defaultRpc.blockExplorerUrls}/tx/${pendingTx}`}
												target="_blank"
											>
												Pending Transaction
												<FontAwesomeIcon icon="external-link-alt" />
											</a>
										) : (
											'Pending Transaction'
										)}
									</SubmitButton>
								) : !account ? (
									<SubmitButton disabled={true}>Claim</SubmitButton>
								) : typeof account === 'string' ? (
									baoSwapAddresses.includes(account.toLowerCase()) ? (
										!isBaoSwapClaimed ? (
											<SubmitButton
												onClick={async () => {
													handleTx(
														mintBaoSwap(baoSwapContract, account),
														`Claimed BaoSwap NFT`,
													)
												}}
											>
												Claim
											</SubmitButton>
										) : (
											<SubmitButton disabled={true}>
												Already Claimed
											</SubmitButton>
										)
									) : (
										<SubmitButton disabled={true}>Not Eligible</SubmitButton>
									)
								) : (
									<SubmitButton disabled={true}>
										Checking Eligibility...
									</SubmitButton>
								)}
							</>
						</Card.Footer>
					</Card>
				</StyledWrapper>
			</Container>
		</Page>
	)
}

export default NFT
