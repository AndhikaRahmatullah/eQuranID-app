import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-dark_app">
			<p className="text-base text-light_app md:text-xl">Halaman yang Anda inginkan tidak ditemui</p>
			<Link
				to={"/"}
				className="btn">
				Kembali
			</Link>
		</div>
	);
};

export default NotFound;
