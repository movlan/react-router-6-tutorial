import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar">
			<NavLink to="/" className='link'>
				Home
			</NavLink>
			<NavLink to="/about" className='link'>
				About
			</NavLink>
			<NavLink to="/products" className='link'>
				Products
			</NavLink>
			<NavLink to="/login" className='link'>
				Login
			</NavLink>
		</nav>
	)
}
export default Navbar
