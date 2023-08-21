import React from "react";

const Post = ({ postsList }) => {
	const posts = postsList.map(item => {
		return (
			<>
				<li className='posts__item' key={item.id}>
					<h3 className='post__item--title'>{item.title}</h3>
					{/* <p>{item.date}</p> */}
					<p>{item.intro}</p>
					{/* <p>{item.text}</p> */}
					{/* <img src={img} alt={item.title} /> */}
					{/* <p>{item.category}</p> */}
					<p>Read more...</p>
				</li>
			</>
		);
	});

	return <>{posts}</>;
};

export default Post;
