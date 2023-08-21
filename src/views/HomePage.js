import React from "react";
import Header from "../components/Header";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Posts from "../components/Posts";
import { posts } from "../data/posts";
import PostsByCategory from "../components/PostsByCategory";
import Footer from "../components/Footer";

const HomePage = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Posts postsList={posts} />
				</Route>
				<Route exact path='/category'>
					<Posts postsList={posts} />
				</Route>
				<Route path='/category/:category'>
					<PostsByCategory postsList={posts} />
				</Route>
			</Switch>
			<Footer />
		</>
	);
};

export default HomePage;
