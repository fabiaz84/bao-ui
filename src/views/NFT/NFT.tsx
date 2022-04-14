import { useWeb3React } from '@web3-react/core'
import baoElder from 'assets/img/nft/baoelder.png'
import baoSwap from 'assets/img/nft/baoswap.png'
import { Button } from 'components/Button'
import Label from 'components/Label'
import Page from 'components/Page'
import PageHeader from 'components/PageHeader'
import Spacer from 'components/Spacer'
import {
	useBaoSwapClaimedCheck,
	useBaoSwapMint,
	useElderClaimedCheck,
	useElderMint,
} from 'hooks/nft/useMint'
import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { addresses as elderAddresses } from './components/baoElderWL.json'
import { addresses as baoSwapAddresses } from './components/baoSwapWL.json'
import { StyledInfo, StyledWrapper } from './components/styles'

const NFT: React.FC = () => {
	const { account } = useWeb3React()
	const { onMintBaoSwap } = useBaoSwapMint()
	const { onMintElder } = useElderMint()
	const isElderClaimed = useElderClaimedCheck()
	const isBaoSwapClaimed = useBaoSwapClaimedCheck()

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
							{!account ? (
								<Button text="Claim" disabled={true} onClick={onMintElder} />
							) : typeof account === 'string' ? (
								elderAddresses.includes(account.toLowerCase()) ? (
									!isElderClaimed ? (
										<Button text="Claim" onClick={onMintElder} />
									) : (
										<Button
											text="Already Claimed"
											onClick={onMintElder}
											disabled={true}
										/>
									)
								) : (
									<Button
										text="Not Eligible"
										onClick={onMintElder}
										disabled={true}
									/>
								)
							) : (
								<Button
									text="Checking Eligibility..."
									onClick={onMintElder}
									disabled={true}
								/>
							)}
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
							{!account ? (
								<Button text="Claim" disabled={true} onClick={onMintBaoSwap} />
							) : typeof account === 'string' ? (
								baoSwapAddresses.includes(account.toLowerCase()) ? (
									!isBaoSwapClaimed ? (
										<Button text="Claim" onClick={onMintBaoSwap} />
									) : (
										<Button
											text="Already Claimed"
											onClick={onMintBaoSwap}
											disabled={true}
										/>
									)
								) : (
									<Button
										text="Not Eligible"
										onClick={onMintBaoSwap}
										disabled={true}
									/>
								)
							) : (
								<Button
									text="Checking Eligibility..."
									onClick={onMintBaoSwap}
									disabled={true}
								/>
							)}
						</Card.Footer>
					</Card>
				</StyledWrapper>
			</Container>
		</Page>
	)
}

export default NFT
