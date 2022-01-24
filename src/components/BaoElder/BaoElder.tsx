import baoElder from 'assets/img/baoelder.png'
import React from 'react'

interface BaoElderProps {
	size?: number
	v1?: boolean
	v2?: boolean
	v3?: boolean
}

const BaoElder: React.FC<BaoElderProps> = ({ size = 36, v1, v2, v3 }) => (
	<span
		role="img"
		style={{
			fontSize: size,
			filter: v1 ? 'saturate(0.5)' : undefined,
		}}
	>
		<img src={baoElder} width={320} height={300} alt="" />
	</span>
)

export default BaoElder
