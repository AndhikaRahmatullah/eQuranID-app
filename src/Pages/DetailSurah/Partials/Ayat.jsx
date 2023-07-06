import React from "react";

const Ayat = ({ className = "", teksArab, teksLatin, teksIndonesia, ...props }) => {
	return (
		<div
			{...props}
			className={`${className} flex flex-1 flex-col gap-6 md:gap-8 lg:gap-10`}>
			<div className="flex flex-col items-end gap-4">
				<p className="text-right font-arabic text-2xl font-medium !leading-loose transition-all duration-300 group-hover:text-primary_app md:text-3xl lg:text-4xl">{teksArab}</p>
				<p className="text-base font-medium italic tracking-wide md:text-lg lg:text-xl">{teksLatin}</p>
			</div>

			<div className="">
				<p className="text-base font-medium md:text-lg lg:text-xl">{teksIndonesia}</p>
			</div>
		</div>
	);
};

export default Ayat;
