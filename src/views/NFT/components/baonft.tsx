import Card from 'components/Card'
import { Button } from 'components/Button'
import CardContent from 'components/CardContent'
import Label from 'components/Label'
import BaoElder from 'components/BaoElder'
import BaoSwap from 'components/BaoSwap'
import Spacer from 'components/Spacer'
import useMint from 'hooks/useMint'
import React, { Fragment } from 'react'
import {
	Footnote,
	StyledWrapper,
} from './styles'

const BaoNFT: React.FC = () => {

	const { onMint } = useMint()

	return (
		<Fragment>
			<StyledWrapper>
				<Card>
					<CardContent>
					<Label text="BaoElder NFT" />
								<BaoElder />
					</CardContent>
					<Footnote>
					<Button
							text="Claim"
							onClick={onMint}
						/>
					</Footnote>
				</Card>
				<Spacer />

				<Card>
					<CardContent>
					<Label text="BaoSwap NFT" />
								<BaoSwap />
					</CardContent>
					<Footnote>
					<Button
							text="Claim"
							onClick={onMint}
						/>
					</Footnote>
				</Card>
			</StyledWrapper>
			<Spacer />
		</Fragment>
	)
}

export default BaoNFT