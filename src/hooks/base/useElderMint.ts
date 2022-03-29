import { useCallback } from 'react'
import { useWallet } from 'use-wallet'
import { getElderContract, mint} from '../../bao/utils'
import useBao from './useBao'

const useElderMint = () => {
    const { account } = useWallet()
    const bao = useBao()
    const nftContract = getElderContract(bao)

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

    return { onMintElder: handleMint }
}

export default useElderMint
