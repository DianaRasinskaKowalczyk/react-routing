import React from "react";
import { Link } from "react-router-dom";

const Post = props => {
	const { title, id, intro } = props;

	return (
		<li className='posts__item' data-id={id}>
			<h3>
				<Link className='post__item--title' to={`/post/${id}-${title}`}>
					{title}
				</Link>
			</h3>
			<p>{intro}</p>
			<p>
				<Link className='post__item--read-more' to={`/post/${id}-${title}`}>
					Read more...
				</Link>
			</p>
		</li>
	);
};

export default Post;
