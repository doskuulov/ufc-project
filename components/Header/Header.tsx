import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import styles from '../Header/Header.module.scss'
import { useRouter } from 'next/router'

const navigation = [
	{ id: 1, title: 'Home', path: '/' },
	{ id: 2, title: 'Rankings', path: '/rankings' },
]

const Header = () => {
	const { pathname } = useRouter()
	const [nav, setNav] = useState<boolean>()
	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<div className={styles.header_logo}>
						<a href='/'>Hype Fighting</a>
					</div>
					<nav
						className={
							nav ? [styles.menu, styles.active].join(' ') : [styles.menu]
						}
					>
						{navigation.map(({ id, title, path }) => (
							<Link key={id} href={path}>
								<p className={pathname === path ? styles.active : null}>
									{title}
								</p>
							</Link>
						))}
						<Link href='/Tournamed'>ТУРНИРЫ</Link>
						<Link href='/Fighters'>БОЙЦЫ</Link>
						<Link href='/News'>НОВОСТИ</Link>
					</nav>
					<div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
						{nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
