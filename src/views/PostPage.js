import React from "react";
import { posts } from "../data/posts";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import BackButton from "../components/BackButton";
import PostPresentation from "../components/PostPresentation";

const PostPage = () => {
	const { title, category } = useParams();

	return (
		<>
			<BackButton />
			<PostPresentation postsList={posts} category={category} title={title} />
		</>
	);
};

export default PostPage;


   