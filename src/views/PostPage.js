import React from "react";
import { posts } from "../data/posts";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import BackButton from "../components/BackButton";
import PostPresentation from "../components/PostPresentation";

const PostPage = () => {
	const { title, id } = useParams();

	return (
		<>
			<BackButton />
			<PostPresentation postsList={posts} id={id} title={title} />
		</>
	);
};

export default PostPage;


   