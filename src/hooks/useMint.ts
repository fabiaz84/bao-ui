import { useCallback } from 'react'
import { useWallet } from 'use-wallet'
import { getNftContract, mint} from '../bao/utils'
import useBao from './useBao'

const useMint = () => {
    const { account } = useWallet()
    const bao = useBao()
    const nftContract = getNftContract(bao)

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

    return { onMint: handleMint }
}

export default useMint
