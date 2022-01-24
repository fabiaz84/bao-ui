import baoSwap from 'assets/img/baoswap.png'
import React from 'react'

interface BaoSwapProps {
	size?: number
	v1?: boolean
	v2?: boolean
	v3?: boolean
}

const BaoSwap: React.FC<BaoSwapProps> = ({ size = 36, v1, v2, v3 }) => (
	<span
		role="img"
		style={{
			fontSize: size,
			filter: v1 ? 'saturate(0.5)' : undefined,
		}}
	>
		<img src={baoSwap} width={320} height={300} alt="" />
	</span>
)

export default BaoSwap
