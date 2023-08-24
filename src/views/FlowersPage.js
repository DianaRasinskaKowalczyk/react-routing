import React from "react";
import { categories } from "../data/categories";
import { NavLink, Route } from "react-router-dom";
import Post from "../components/Post";
import { posts } from "../data/posts";
import Pagination from "../components/Pagination";

const FlowersPage = () => {
	const activeClass = "active--link";

	const nav = categories.map(item => (
		<li key={item.url}>
			<NavLink
				className='flowers__link'
				activeClassName={activeClass}
				to={item.url}>
				{item.text}
			</NavLink>
		</li>
	));

	const routes = categories.map(item => {
		const postCat = posts.filter(post => post.categories.includes(item.id));
		return (
			<>
				<Route key={item.url} path={item.url}>
					<Pagination path={item.url} limit={4}>
						{postCat.map(post => (
							<Post key={post.id} {...post} />
						))}
					</Pagination>
				</Route>
			</>
		);
	});

	const allFlowersPosts = posts.filter(post => post.categories.includes(1));

	return (
		<>
			<nav className='flowers__nav'>{nav}</nav>
			<ul className='posts__list'>
				<Route index>
					<Pagination limit={4} path='/flowers'>
						{allFlowersPosts.map(post => (
							<Post key={post.id} {...post} />
						))}
					</Pagination>
				</Route>
				{routes}
			</ul>
		</>
	);
};

export default FlowersPage;
