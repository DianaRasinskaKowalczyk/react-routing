import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BackButton = () => {
	return (
		<Link className='button__link' to='/'>
			<button className='button'>back to main page</button>
		</Link>
	);
};

export default BackButton;
