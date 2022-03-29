import { useCallback } from 'react'
import { useWallet } from 'use-wallet'
import { getBaoSwapNFTContract, mint} from '../../bao/utils'
import useBao from './useBao'

const useBaoSwapMint = () => {
    const { account } = useWallet()
    const bao = useBao()
    const nftContract = getBaoSwapNFTContract(bao)

    const handleMint = useCallback(
        async () => {
            const txHash = await mint(
                nftContract,
                account,
            )
            console.log(txHash)
        },
        [account, bao],
    )

    return { onMintBaoSwap: handleMint }
}

export default useBaoSwapMint
