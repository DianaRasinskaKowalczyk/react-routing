import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import flower from "./..//flower.png";

const PostPresentation = props => {
	const { postsList, id, title } = props;

	const filteredPosts = postsList.filter(item => {
		return item.id === parseInt(id);
	});

	const [post = null] = filteredPosts.filter(item => {
		return item.title.toLowerCase() === title.toLowerCase();
	});

	if (post === null) {
		return <Redirect to='/404.html' />;
	}

	return (
		<section className='post'>
			<h1 className='post__title'>{post.title}</h1>
			<p className='post__intro'>{post.intro}</p>
			<div className='post__img-box'>
				<img src={flower} className='post__img' alt='flower' />
			</div>
			<p className='post__text'>{post.text}</p>
		</section>
	);
};

export default PostPresentation;
