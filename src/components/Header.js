import React from "react";
import flower from "./../flower.png";
import Nav from "./Nav";

const Header = () => {
	return (
		<header className='header'>
			<div className='header__img-box'>
				<img src={flower} className='header__img' alt='flower' />
			</div>
			<h1 className='header__title'>All about flowers</h1>
			<Nav />
		</header>
	);
};

export default Header;
