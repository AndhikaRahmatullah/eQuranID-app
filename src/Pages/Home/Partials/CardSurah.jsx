import React from "react";

const CardSurah = ({ nomor, namaLatin, arti, nama, jumlahAyat, ...props }) => {
	return (
		<div
			{...props}
			className="group flex w-[400px] cursor-pointer items-center justify-between rounded-lg border-2 border-light_app px-5 py-5 transition-all duration-300 hover:border-primary_app hover:bg-primary_app/[0.05] md:w-[350px] xl:w-[400px]">
			{/* left */}
			<div className="flex">
				<div className="mr-5 flex h-10 w-10 rotate-45 items-center justify-center rounded-md bg-light_app text-dark_app transition-all duration-300 group-hover:bg-primary_app group-hover:text-light_app group-active:bg-primary_app group-active:text-light_app">
					<span className="-rotate-45 font-bold">{nomor}</span>
				</div>

				<div className="">
					<p className="text-lg font-bold">{namaLatin}</p>
					<p className="text-xs font-bold transition-all duration-300 group-hover:text-primary_app">{arti}</p>
				</div>
			</div>

			{/* right */}
			<div className="flex flex-col items-end">
				<p className="font-arabic">{nama}</p>
				<p className="text-xs font-bold transition-all duration-300 group-hover:text-primary_app">{jumlahAyat} Ayat</p>
			</div>
		</div>
	);
};

export default CardSurah;
