import React from "react";
import { useHistory } from "react-router-dom";

const BackButton = () => {
	let history = useHistory();

	return (
		<button onClick={() => history.goBack()} className='button'>
			back to main page
		</button>
	);
};

export default BackButton;
