import { useState, useEffect } from "react";
import Modal from "../../../Components/Modal";

const Menu = ({ className = "", onIsPlaying, nomor, nomorAyat, audio, namaSurah, tafsir, ...props }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [ayatOnPlaying, setAyatOnPlay] = useState(0);

	useEffect(() => {
		onIsPlaying(isPlaying, ayatOnPlaying);
	}, [isPlaying]);

	const playAudio = (id) => {
		const audio = document.getElementById(`ayatAudio${id}`);
		audio.play();
		setIsPlaying(true);
		setAyatOnPlay(id);
	};

	const pauseAudio = (id) => {
		const audio = document.getElementById(`ayatAudio${id}`);
		audio.pause();
		setIsPlaying(false);
		setAyatOnPlay(id);
	};

	const handleAudioEnd = () => {
		setIsPlaying(false);
		setAyatOnPlay(0);
	};

	return (
		<div
			{...props}
			className={`${className} flex w-[17%] flex-col items-center justify-between gap-5 rounded-lg bg-dark_app py-5 text-white transition-all duration-300 group-hover:bg-primary_app md:w-[10%] lg:w-[5%]`}>
			<div className="">
				<p className="text-base font-bold md:text-lg">
					{nomor} : {nomorAyat}
				</p>
			</div>

			<div className="flex flex-col gap-5">
				<div>
					<img
						src={isPlaying && nomorAyat === ayatOnPlaying ? "/public/assets/pause_light.png" : "/public/assets/audio_light.png"}
						alt="Audio"
						onClick={() => (isPlaying ? pauseAudio(nomorAyat) : playAudio(nomorAyat))}
						className="h-[20px] w-[20px] cursor-pointer md:h-[25px] md:w-[25px]"
					/>
					<audio
						id={`ayatAudio${nomorAyat}`}
						src={audio["05"] ? audio["05"] : audio["01"]}
						onEnded={handleAudioEnd}
						className="hidden"
					/>
				</div>

				{/* modal */}
				<div className="">
					<Modal
						title={"Tafsir"}
						subTitle={`${namaSurah} Ayat ${nomorAyat}`}
						description={tafsir[`${nomorAyat - 1}`].teks}
						imageButton={"/public/assets/tafsir_light.png"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Menu;
