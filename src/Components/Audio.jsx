import { useState } from "react";

export default function Audio({ className = "", buttonTitle = false, srcAudio, onPlaySrcImage, onPauseSrcImage, id, ...props }) {
	const [isPlaying, setIsPlaying] = useState(false);

	const playAudio = () => {
		const audio = document.getElementById(id);
		audio.play();
		setIsPlaying(true);
	};

	const pauseAudio = () => {
		const audio = document.getElementById(id);
		audio.pause();
		setIsPlaying(false);
	};

	const handleAudioEnd = () => {
		setIsPlaying(false);
	};

	return (
		<div
			{...props}
			className={`${className}`}>
			<audio
				id={id}
				src={srcAudio}
				onEnded={handleAudioEnd}
				className="hidden"
			/>

			<div
				onClick={() => (isPlaying ? pauseAudio() : playAudio())}
				className="group flex w-fit cursor-pointer items-center gap-2">
				<span className={buttonTitle ? "text-sm font-medium transition-all duration-300 group-hover:text-primary_app md:text-base" : "hidden"}>{isPlaying ? "Jeda Audio" : "Putar Audio"}</span>
				<img
					src={isPlaying ? onPlaySrcImage : onPauseSrcImage}
					alt="Audio"
					className="h-[20px] w-[20px] md:h-[25px] md:w-[25px]"
				/>
			</div>
		</div>
	);
}
