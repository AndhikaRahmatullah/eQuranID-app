import React from "react";

const Title = ({ name }) => {
	return (
		<div className="mb-7 mt-10 flex justify-center">
			<p className="w-fit border-b-4 border-light_app px-2 text-xl font-bold lg:text-2xl">{name}</p>
		</div>
	);
};

export default Title;
