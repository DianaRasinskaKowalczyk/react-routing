import React from "react";
import { useParams } from "react-router-dom";
import Posts from "./Posts";

const PostsByCategory = ({ postsList }) => {
	const { category } = useParams();

	const filteredPosts = postsList.filter(item => {
		return item.category === category;
	});

	return <Posts postsList={filteredPosts} />;
};



export default PostsByCategory;
