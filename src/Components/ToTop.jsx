import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ToTop() {
	const [onTop, setOnTop] = useState(true);

	window.onscroll = function () {
		window.pageYOffset > 0 ? setOnTop(false) : setOnTop(true);
	};

	const variants = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	return (
		<motion.a
			href="#top"
			initial="hidden"
			animate={onTop ? "hidden" : "visible"}
			variants={variants}
			className={onTop ? "fixed bottom-5 right-5 cursor-default transition-opacity duration-300" : "fixed bottom-5 right-5 transition-opacity duration-300"}>
			<motion.img
				src="../assets/back_to_top.png"
				alt="ToTop"
				className="h-[45px] w-[45px] rounded-full shadow-lg shadow-dark_app/30 transition-all duration-300 hover:animate-pulse lg:h-[50px] lg:w-[50px]"
			/>
		</motion.a>
	);
}
