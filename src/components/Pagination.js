import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PaginationRoute from "./PaginationRoute";

const Pagination = props => {
	const { children, limit = 3, path } = props;

	return (
		<Switch>
			<Route path={`${path}/:page`}>
				<PaginationRoute limit={limit} path={path}>
					{children}
				</PaginationRoute>
			</Route>

			<Redirect to={`${path}/1`} />
		</Switch>
	);
};
export default Pagination;
