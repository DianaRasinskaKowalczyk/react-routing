import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	const categories = [
		{ text: "All flowers", url: "/" },
		{ text: "Home flowers", url: "/category/garden" },
		{ text: "Garden flowers", url: "/category/home" },
	];

	const activeClass = "active--category";

	const nav = categories.map(item => {
		return (
			<li key={item.text} className='nav__item'>
				<NavLink
					exact
					className='nav__item__link'
					activeClassName={activeClass}
					to={item.url}>
					{item.text}
				</NavLink>
			</li>
		);
	});

	return (
		<nav>
			<ul className='header__nav__list'>{nav}</ul>
		</nav>
	);
};

export default Nav;
