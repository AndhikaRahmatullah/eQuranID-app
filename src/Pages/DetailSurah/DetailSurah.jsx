import { useEffect, useState } from "react";
import { useFetchData } from "../../Hooks/useFetchData.jsx";
import { useSurah } from "../../Context/Surah.jsx";
import OnLoading from "../../Components/OnLoading.jsx";
import ToTop from "../../Components/ToTop.jsx";
import Header from "./Partials/Header.jsx";
import Menu from "./Partials/Menu.jsx";
import Ayat from "./Partials/Ayat.jsx";
import Pagination from "./Partials/Pagination.jsx";

const DetailSurah = () => {
	const [childData, setChildData] = useState({});

	// IsLoading untuk tregger rerender
	const { isLoading } = useFetchData();
	const { surahState } = useSurah();

	const data = surahState.detailSurah.data;
	const tafsir = surahState.detailTafsir.data;

	const handleIsPlaying = (isPlaying, ayatOnPlaying) => {
		setChildData({ isPlaying, ayatOnPlaying });
	};

	useEffect(() => {
		if (surahState.idSurah) {
			document.title = `${data.namaLatin} | QuranKu`;
		}
	}, [surahState.idSurah]);

	return (
		<div className="mx-5 my-10 min-h-screen lg:mx-32 lg:my-20">
			{surahState.idSurah && !isLoading ? (
				<div className="flex flex-col gap-10">
					{/* header */}
					<Header
						namaLatin={data.namaLatin}
						arti={data.arti}
						nama={data.nama}
						tempatTurun={data.tempatTurun}
						jumlahAyat={data.jumlahAyat}
						audioFull={data.audioFull}
						deskripsi={data.deskripsi}
					/>

					{/* body */}
					<div className="flex flex-col">
						{data.ayat.map((ayat, i) => {
							return (
								<div
									key={i}
									className={childData.isPlaying && ayat.nomorAyat === childData.ayatOnPlaying ? "group flex gap-5 border-b-4 border-light_app bg-primary_app/10 pb-10 pt-10 transition-all duration-300 hover:border-primary_app md:px-5" : "group flex gap-5 border-b-4 border-light_app pb-10 pt-10 transition-all duration-300 hover:border-primary_app hover:bg-primary_app/10 md:px-5"}>
									{/* left */}
									<Menu
										onIsPlaying={handleIsPlaying}
										nomor={data.nomor}
										nomorAyat={ayat.nomorAyat}
										audio={ayat.audio}
										namaSurah={data.namaLatin}
										tafsir={tafsir.tafsir}
									/>

									{/* right */}
									<Ayat
										teksArab={ayat.teksArab}
										teksLatin={ayat.teksLatin}
										teksIndonesia={ayat.teksIndonesia}
									/>
								</div>
							);
						})}
					</div>

					<Pagination
						prev={data.suratSebelumnya}
						next={data.suratSelanjutnya}
					/>
				</div>
			) : (
				<OnLoading />
			)}

			<ToTop />
		</div>
	);
};

export default DetailSurah;
