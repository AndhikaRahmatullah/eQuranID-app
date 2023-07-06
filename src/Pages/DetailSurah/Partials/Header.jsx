import Modal from "../../../Components/Modal";
import Audio from "../../../Components/Audio";

const Header = ({ className = "", namaLatin, arti, nama, tempatTurun, jumlahAyat, audioFull, deskripsi, ...props }) => {
	const description = deskripsi;

	const createMarkup = () => {
		return { __html: description };
	};

	return (
		<div
			{...props}
			className="">
			<div className="flex justify-between gap-5 rounded-xl bg-primary_app p-5 text-white shadow-lg shadow-dark_app/60">
				<div className="flex flex-col items-center">
					<p className="text-center text-sm font-bold md:text-base">{namaLatin}</p>
					<p className="text-center text-sm font-medium md:text-base">
						( <span className="italic">{arti}</span> )
					</p>
				</div>

				<div className="">
					<p className="font-arabic text-3xl font-medium md:text-4xl xl:text-5xl">{nama}</p>
				</div>

				<div className="flex flex-col items-center">
					<p className="text-center text-sm font-bold md:text-base">{tempatTurun}</p>
					<p className="text-center text-sm font-medium md:text-base">{jumlahAyat} Ayat</p>
				</div>
			</div>

			<div className="mt-10 flex flex-col items-end gap-3">
				{/* info */}
				<Modal
					title={"Info Surah"}
					subTitle={`${namaLatin}`}
					description={description}
					imageButton={"/public/assets/info.png"}
					titleButton={"Info Surah"}
				/>

				{/* audio */}
				<Audio
					srcAudio={audioFull["05"] ? audioFull["05"] : audioFull["01"]}
					onPlaySrcImage={"/public/assets/pause_primary.png"}
					onPauseSrcImage={"/public/assets/audio_primary.png"}
					id={"surahAudioFull"}
					buttonTitle={true}
				/>
			</div>
		</div>
	);
};

export default Header;
