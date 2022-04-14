import BigNumber from 'bignumber.js'
import useBlock from 'hooks/base/useBlock'
import useTransactionProvider from 'hooks/base/useTransactionProvider'
import { useCallback, useEffect, useState } from 'react'
import { useAccountLiquidity } from './useAccountLiquidity'
import { useAccountMarkets } from './useMarkets'

const useHealthFactor = () => {
  const [healthFactor, setHealthFactor] = useState<BigNumber | undefined>()
  const markets = useAccountMarkets()
  const accountLiquidity = useAccountLiquidity()
  const { transactions } = useTransactionProvider()
  const block = useBlock()

  const fetchHealthFactor = useCallback(async () => {
    const { usdSupply, usdBorrow } = accountLiquidity
    const avgCollateralFactor =
      markets.reduce(
        (cfTotal, market) => cfTotal + market.collateralFactor,
        0,
      ) / markets.length
    const _healthFactor = new BigNumber(
      (usdSupply * avgCollateralFactor) / usdBorrow,
    )
    setHealthFactor(_healthFactor.isNaN() ? new BigNumber(0) : _healthFactor)
  }, [markets, accountLiquidity])

  useEffect(() => {
    if (!(markets && accountLiquidity)) return

    fetchHealthFactor()
  }, [markets, accountLiquidity, transactions, block])

  return healthFactor
}

export default useHealthFactor
