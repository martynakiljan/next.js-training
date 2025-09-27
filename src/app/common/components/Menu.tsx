import Link from 'next/link'
import style from './menu.module.scss'

const Menu = () => {
	return (
		<ul className={style.menu}>
			<li className={style['menu-item']}>
				{' '}
				<Link href='/'>Home</Link>
			</li>
			<li className={style['menu-item']}>
				{' '}
				<Link href='/contact'>Contact</Link>
			</li>
			<li className={style['menu-item']}>
				{' '}
				<Link href='/contact/team'>Team</Link>
			</li>
			<li className={style['menu-item']}>
				{' '}
				<Link href='/contact/about'>About</Link>
			</li>
			<li className={style['menu-item']}>
				{' '}
				<Link href='/posts'>Posts</Link>
			</li>
		</ul>
	)
}

export default Menu
