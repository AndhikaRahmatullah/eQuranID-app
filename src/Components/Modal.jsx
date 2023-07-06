import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ title, subTitle = "", description, titleButton = null, imageButton }) {
	const [isOpen, setIsOpen] = useState(false);

	const createMarkup = () => {
		return { __html: description };
	};

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	return (
		<div className="">
			<button onClick={handleOpenModal}>
				<div className="flex gap-2">
					<span className={titleButton ? "text-sm font-medium transition-all duration-300 group-hover:text-primary_app md:text-base" : "hidden"}>{titleButton && titleButton}</span>
					<img
						src={imageButton}
						alt="Info"
						className="h-[20px] w-[20px] md:h-[25px] md:w-[25px]"
					/>
				</div>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
						transition={{ duration: 0.5 }}
						className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-opacity-10">
						<div className="relative z-50 flex h-full max-h-[90%] w-full max-w-[300px] flex-col overflow-hidden rounded-xl border-4 border-light_app bg-primary_app p-6 shadow-lg md:h-[300px] md:max-w-xl lg:max-w-2xl">
							<div className="mb-4 flex items-center justify-between border-b-4 px-3 pb-4">
								<div className="flex flex-col items-center gap-2 text-white md:flex-row">
									<p className="text-base font-bold tracking-wide md:text-xl">{title}</p>
									<p className="text-base font-normal md:text-xl">{subTitle}</p>
								</div>

								<button
									onClick={handleCloseModal}
									className="rounded-md bg-white p-2 text-sm font-semibold tracking-wide text-primary_app transition-all duration-300 hover:bg-light_app focus:outline-none md:text-base">
									Tutup
								</button>
							</div>

							<div className="cursor-ns-resize overflow-y-scroll px-3">
								<p
									className="text-justify leading-relaxed text-white"
									dangerouslySetInnerHTML={createMarkup()}
								/>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
