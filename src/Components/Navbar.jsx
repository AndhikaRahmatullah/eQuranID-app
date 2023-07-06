import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useFetchData } from "../Hooks/useFetchData";
import Button from "./Button";

export default function Navbar() {
	const [optionData, setOptionData] = useState([]);
	const { allData, isLoading } = useFetchData();
	const path = useLocation().pathname;
	const redirect = useNavigate();

	const handleOptionData = () => {
		const data = allData.data;
		if (!isLoading) {
			const newData = data.map((d) => ({
				value: d.nomor,
				label: `${d.nomor}. ${d.namaLatin}`,
			}));
			setOptionData(newData);
		}
	};

	useEffect(() => {
		handleOptionData();
	}, [isLoading]);

	const handleSelect = (selectedOption) => {
		localStorage.setItem("idSurah", selectedOption.value);
		redirect(`/${selectedOption.value}`);
	};

	const customStyles = {
		control: (provided, state) => ({
			...provided,
			width: "200px",
			border: "2px solid #e2e8f0",
			background: "transparent",
			fontFamily: "Quicksand",
			fontWeight: "500",
			color: "#e2e8f0",
			transition: "all 300ms",
			"@media (max-width: 480px)": {
				width: "150px",
			},
			"&:hover": {
				borderColor: "#ffffff",
			},
			"&:focus": {
				background: "#ffffff",
				color: "#1a202c",
				outline: "none",
				"&::placeholder": {
					color: "#1a202c",
				},
			},
		}),
		placeholder: (provided, state) => ({
			...provided,
			color: "#e2e8f0",
		}),
		singleValue: (provided, state) => ({
			...provided,
			color: "#e2e8f0",
		}),
		input: (provided, state) => ({
			...provided,
			color: "#e2e8f0",
		}),
		option: (provided, state) => ({
			...provided,
			transition: "all 100ms",
			cursor: "pointer",
			background: state.isFocused ? "#0d9488" : "transparent",
			color: state.isFocused ? "#fff" : "#0d9488",
			"&:hover": {
				background: "#0d9488",
				color: "#fff",
			},
		}),
	};

	return (
		<nav className="navbar flex justify-between bg-primary_app px-5 py-2">
			{/* left sm*/}
			<div className="dropdown-start dropdown lg:hidden">
				<label
					tabIndex={0}
					className="flex cursor-pointer items-center gap-1">
					<div className="w-10 rounded-full">
						<img
							src="/public/assets/logo.png"
							alt="Logo"
							className="h-9 w-9 rounded-full border-2 border-light_app"
						/>
					</div>
					<p className="text-lg font-bold text-light_app md:text-xl">QuranKu</p>
				</label>
				<ul
					tabIndex={0}
					className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-white p-2 shadow">
					<li>
						<Button
							to="/"
							className={path === "/" ? " text-primary_app" : "text-light_app"}>
							Beranda
						</Button>
					</li>
					<li>
						<Button
							to="/about"
							className={path === "/about" ? " text-primary_app" : "text-light_app"}>
							Tentang Kami
						</Button>
					</li>
				</ul>
			</div>

			{/* left lg*/}
			<div className="hidden items-center gap-2 lg:flex">
				<img
					src="/public/assets/logo.png"
					alt="Logo"
					className="h-10 w-10 rounded-full border-2 border-light_app"
				/>
				<p className="text-2xl font-bold text-light_app">QuranKu</p>
			</div>

			{/* right */}
			<div className="gap-7 lg:flex">
				<div className="hidden gap-3 lg:flex">
					<Button
						to="/"
						className={path === "/" ? "border-b-[3px] border-light_app text-light_app" : "border-b-[3px] border-light_app/10 text-light_app"}>
						Beranda
					</Button>
					<Button
						to="/about"
						className={path === "/about" ? "border-b-[3px] border-light_app text-light_app" : "border-b-[3px] border-light_app/10 text-light_app"}>
						Tentang Kami
					</Button>
				</div>

				<Select
					placeholder="Cari Surah"
					styles={customStyles}
					options={optionData}
					onChange={handleSelect}
				/>
			</div>
		</nav>
	);
}
