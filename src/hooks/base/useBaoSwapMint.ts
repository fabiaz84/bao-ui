import { useCallback } from 'react'
import { useWallet } from 'use-wallet'
import { getBaoSwapNFTContract, mintBaoSwap} from '../../bao/utils'
import useBao from './useBao'

const useBaoSwapMint = () => {
    const { account } = useWallet()
    const bao = useBao()
    const nftContract = getBaoSwapNFTContract(bao)

    const handleMint = useCallback(
        async () => {
            const txHash = await mintBaoSwap(
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
