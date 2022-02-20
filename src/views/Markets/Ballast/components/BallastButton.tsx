import React, { useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import Config from '../../../../bao/lib/config'
import useAllowancev2 from '../../../../hooks/useAllowancev2'
import useBao from '../../../../hooks/useBao'
import useTransactionProvider from '../../../../hooks/useTransactionProvider'
import { useWallet } from 'use-wallet'
import { decimate, exponentiate } from '../../../../utils/numberFormat'
import { approvev2 } from '../../../../bao/utils'
import { SpinnerLoader } from '../../../../components/Loader'
import { SubmitButton } from '../../components/MarketButton'
import { TransactionReceipt } from 'web3-core'

const BallastButton: React.FC<BallastButtonProps> = ({
	swapDirection,
	inputVal,
	maxValues,
	supplyCap,
	reserves,
	fees,
}: BallastButtonProps) => {
	const [pendingTx, setPendingTx] = useState(false)
	const bao = useBao()
	const { account } = useWallet()
	const { onAddTransaction, onTxReceipt } = useTransactionProvider()

	const inputAApproval = useAllowancev2(
		'0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108', // TestDAI
		Config.contracts.stabilizer[Config.networkId].address,
		pendingTx,
	)
	const inputBApproval = useAllowancev2(
		Config.addressMap.baoUSD,
		Config.contracts.stabilizer[Config.networkId].address,
		pendingTx,
	)

	const handleClick = async () => {
		if (!bao) return

		const ballastContract = bao.getContract('stabilizer')
		if (swapDirection) {
			// baoUSD->DAI
			if (!inputBApproval.gt(0)) {
				const tokenContract = bao.getNewContract(
					'erc20.json',
					Config.addressMap.baoUSD,
				)
				return handleTx(
					approvev2(tokenContract, ballastContract, account),
					'Ballast: Approve baoUSD',
				)
			}

			handleTx(
				ballastContract.methods
					.sell(exponentiate(inputVal).toString())
					.send({ from: account }),
				'Ballast: Swap baoUSD to DAI',
			)
		} else {
			// DAI->baoUSD
			if (!inputAApproval.gt(0)) {
				const tokenContract = bao.getNewContract(
					'erc20.json',
					'0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108', // TestDAI
				)
				return handleTx(
					approvev2(tokenContract, ballastContract, account),
					'Ballast: Approve DAI',
				)
			}

			handleTx(
				ballastContract.methods
					.buy(
						exponentiate(inputVal)
							.toString(),
					)
					.send({ from: account }),
				'Ballast: Swap DAI to baoUSD',
			)
		}
	}

	const handleTx = (tx: any, description: string) => {
		setPendingTx(true)
		tx.on('transactionHash', (txHash: string) =>
			onAddTransaction({
				hash: txHash,
				description,
			}),
		)
			.on('receipt', (receipt: TransactionReceipt) => {
				onTxReceipt(receipt)
				setPendingTx(false)
			})
			.on('error', () => setPendingTx(false))
	}

	const buttonText = () => {
		if (!(inputAApproval && inputBApproval)) return <SpinnerLoader />

		if (pendingTx) {
			return 'Pending Transaction'
		} else {
			if (swapDirection) {
				return inputBApproval.gt(0) ? 'Swap baoUSD for DAI' : 'Approve baoUSD'
			} else {
				return inputAApproval.gt(0) ? 'Swap DAI for baoUSD' : 'Approve DAI'
			}
		}
	}

	const isDisabled = useMemo(
		() =>
			pendingTx ||
			new BigNumber(inputVal).isNaN() ||
			new BigNumber(inputVal)
				.gt(maxValues[swapDirection ? 'sell' : 'buy']) ||
			(swapDirection && new BigNumber(inputVal).gt(decimate(reserves))) ||
			(!swapDirection && new BigNumber(inputVal).gt(decimate(supplyCap))),
		[pendingTx, inputVal, swapDirection, reserves, supplyCap],
	)

	return (
		<SubmitButton onClick={handleClick} disabled={isDisabled}>
			{buttonText()}
		</SubmitButton>
	)
}

type BallastButtonProps = {
	swapDirection: boolean
	inputVal: string
	maxValues: { [key: string]: BigNumber }
	supplyCap: BigNumber
	reserves: BigNumber
	fees: { [key: string]: BigNumber }
}

export default BallastButton
