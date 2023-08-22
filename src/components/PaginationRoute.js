import React from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
const PaginationRoute = props => {
	const { children, limit = 6, path } = props;
	const length = children.length;
	const pages = Math.ceil(length / limit);
	const page = useParams();
	const begin = limit * (page - 1);
	const end = page * limit;

	const links = new Array(pages).fill(0).map((item, index) => (
		<li key={index}>
			<Link to={`${path}/${index + 1}`}>{index + 1}</Link>
		</li>
	));

	return (
		<>
			{children.slice(begin, end)}
			<nav>
				<ul>{links}</ul>
			</nav>
		</>
	);
};
export default PaginationRoute;
