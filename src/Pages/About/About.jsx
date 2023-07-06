import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="card w-96 max-w-[300px] bg-primary_app text-primary-content md:max-w-full">
				<div className="card-body">
					<h2 className="card-title">Assalamualaikum..</h2>
					<p>Tunggu next update ya mas/mba</p>
					<div className="card-actions mt-10 flex flex-col items-center justify-between md:flex-row">
						<p className="italic">Andhika Rahmatullah</p>
						<Link
							to={"/"}
							className="btn text-primary_app">
							Beranda
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
