import React from "react";
import { useNavigate } from "react-router-dom";

const Pagination = ({ prev, next }) => {
	const redirect = useNavigate();

	const handlePrev = () => {
		if (prev) {
			localStorage.setItem("idSurah", prev.nomor);
			redirect(`/${prev.nomor}`);
		}
	};

	const handleNext = () => {
		if (next) {
			localStorage.setItem("idSurah", next.nomor);
			redirect(`/${next.nomor}`);
		}
	};

	return (
		<div className="mt-10 flex justify-center gap-4">
			<button
				onClick={handlePrev}
				className={prev ? "rounded-xl bg-dark_app px-5 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-primary_app active:bg-primary_app lg:text-base" : "hidden"}>
				Surah Sebelumnya
			</button>
			<button
				onClick={handleNext}
				className={next ? "rounded-xl bg-dark_app px-5 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-primary_app active:bg-primary_app lg:text-base" : "hidden"}>
				Surah Selanjutnya
			</button>
		</div>
	);
};

export default Pagination;
