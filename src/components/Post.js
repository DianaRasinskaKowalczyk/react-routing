import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Post = ({ postsList }) => {
	const posts = postsList.map(item => {
		return (
			<li className='posts__item' key={item.id}>
				<h3>
					<Link
						className='post__item--title'
						to={`${item.category}-flower/${item.title.toLowerCase()}`}>
						{item.title}
					</Link>
				</h3>
				{/* <p>{item.date}</p> */}
				<p>{item.intro}</p>
				{/* <p>{item.text}</p> */}
				{/* <img src={img} alt={item.title} /> */}
				{/* <p>{item.category}</p> */}
				<p>
					<Link
						className='post__item--read-more'
						to={`${item.category}-flower/${item.title.toLowerCase()}`}>
						Read more...
					</Link>
				</p>
			</li>
		);
	});

	return <>{posts}</>;
};

export default Post;
