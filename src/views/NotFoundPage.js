import React from "react";
import flower from "./../flower.png";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<section className='notFound'>
			<div className='notFound__img-box'>
				<img src={flower} className='notFound__img' alt='flower' />
			</div>
			<p className='notFound__text'>
				Ups...this page does not exist. Go to{" "}
				<Link className='notFound__link' to='/'>
					home page
				</Link>{" "}
			</p>
		</section>
	);
};
export default NotFoundPage;
