import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	const activeClass = "active--link";

	return (
		<div className='nav'>
			<NavLink
				exact
				className='nav__item__link'
				activeClassName={activeClass}
				to='/'>
				Home
			</NavLink>
			<NavLink
				className='nav__item__link'
				activeClassName={activeClass}
				to='/flowers'>
				Flowers
			</NavLink>
		</div>
	);
};

export default Nav;
