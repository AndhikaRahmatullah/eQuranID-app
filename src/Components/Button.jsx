import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, className = "", ...props }) {
	return (
		<Link
			{...props}
			className={`${className} px-2 py-1 text-base font-medium transition-all duration-300`}>
			{children}
		</Link>
	);
}
