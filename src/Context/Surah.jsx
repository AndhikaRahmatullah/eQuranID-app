import { useContext, createContext, useState } from "react";

const InitialSurahState = {
	idSurah: null,
	detailSurah: {},
	detailTafsir: {},
};

const SurahContext = createContext();

export const useSurah = () => {
	return useContext(SurahContext);
};

export const UserProvider = ({ props, children }) => {
	const [surahState, setSurahState] = useState(InitialSurahState);

	// console.log(surahState);

	const SetSurahID = (idSurah) => {
		setSurahState({ ...idSurah });
	};

	const ResetSurah = () => {
		// back to default value
		setSurahState(InitialSurahState);
	};

	const value = { surahState, SetSurahID, ResetSurah };

	return (
		<SurahContext.Provider
			value={value}
			{...props}>
			{children}
		</SurahContext.Provider>
	);
};
