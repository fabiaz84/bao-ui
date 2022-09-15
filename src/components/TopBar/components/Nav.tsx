import React from 'react'
import NavItem from './NavItem'
import { StyledNav } from '../topBarCss'

interface NavItemsProps {
	navItems: any
}

const Nav: React.FC<NavItemsProps> = ({ navItems }) => {
	return (
		<StyledNav>
			{navItems.map((navItem: any, index: number) => {
				return <NavItem key={index.toString()} navItem={navItem} />
			})}
		</StyledNav>
	)
}

export default Nav
