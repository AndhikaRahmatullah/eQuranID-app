import { useEffect, useState } from "react";
import { allDataAPI, detailDataAPI, detailTafsirAPI } from "../Services/api";
import { useSurah } from "../Context/Surah";

export const useFetchData = () => {
	const [allData, setAllData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const { surahState, SetSurahID } = useSurah();
	const idSurah = localStorage.getItem("idSurah");

	const fetchAllData = async () => {
		try {
			const data = await allDataAPI();
			setAllData(data);
			setIsLoading(false);
		} catch (error) {
			return error.message;
		}
	};

	const fetchDetailData = async () => {
		try {
			const data = await detailDataAPI(idSurah);
			const tafsir = await detailTafsirAPI(idSurah);
			SetSurahID({ ...surahState, idSurah: idSurah, detailSurah: data, detailTafsir: tafsir });
			setIsLoading(false);
		} catch (error) {
			return error.message;
		}
	};

	useEffect(() => {
		fetchAllData();
		fetchDetailData();
	}, [isLoading]);

	return { allData, isLoading };
};
