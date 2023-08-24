import React from "react";
import { NavLink, useParams } from "react-router-dom";

const PaginationRoute = props => {
	const { children, limit = 3, path } = props;
	const { page } = useParams();

	const length = children.length;

	const begin = limit * (page - 1);
	const end = page * limit;
	const pages = Math.ceil(length / limit);

	const activeClass = "active--link";

	const links = new Array(pages).fill(0).map((item, index) => (
		<li key={index}>
			<NavLink
				className='nav__pagination--link'
				activeClassName={activeClass}
				to={`${path}/${index + 1}`}>
				{index + 1}
			</NavLink>
		</li>
	));

	return (
		<>
			{children.slice(begin, end)}
			<nav className='nav__pagination'>{links}</nav>
		</>
	);
};
export default PaginationRoute;
