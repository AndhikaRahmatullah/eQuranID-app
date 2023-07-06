import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../../Hooks/useFetchData.jsx";
import CardSurah from "./Partials/CardSurah.jsx";
import Banner from "./Partials/Banner.jsx";
import Title from "./Partials/Title.jsx";
import OnLoading from "../../Components/OnLoading.jsx";
import ToTop from "../../Components/ToTop.jsx";

const Home = () => {
	const { allData, isLoading } = useFetchData();
	const redirect = useNavigate();

	useEffect(() => {
		localStorage.removeItem("idSurah");
		document.title = "QuranKu";
	}, []);

	const onSubmit = (idSurah) => {
		localStorage.setItem("idSurah", idSurah);
		return redirect(`/${idSurah}`);
	};

	return (
		<div className="min-h-screen">
			{isLoading ? (
				<OnLoading />
			) : (
				<>
					<Banner
						data={allData.data}
						isLoading={isLoading}
					/>

					<div className="mx-5 my-10 lg:mx-32 lg:my-20">
						<Title name={"Surah"} />

						<div className="flex flex-wrap justify-center gap-4 md:gap-5">
							{allData.data &&
								allData.data.length > 0 &&
								allData.data.map((data, i) => {
									return (
										<CardSurah
											onClick={() => onSubmit(data.nomor)}
											key={i}
											nomor={data.nomor}
											namaLatin={data.namaLatin}
											arti={data.arti}
											nama={data.nama}
											jumlahAyat={data.jumlahAyat}
										/>
									);
								})}
						</div>
					</div>
				</>
			)}

			<ToTop />
		</div>
	);
};

export default Home;
