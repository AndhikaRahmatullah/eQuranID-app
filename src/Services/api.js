import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const allDataAPI = async () => {
	try {
		const res = await axios.get(`${apiUrl}/surat`)
		return res.data
	} catch (err) {
		return err.message
	}
}

export const detailDataAPI = async (id) => {
	try {
		const res = await axios.get(`${apiUrl}/surat/${id}`)
		return res.data
	} catch (err) {
		return err.message
	}
}

export const detailTafsirAPI = async (id) => {
	try {
		const res = await axios.get(`${apiUrl}/tafsir/${id}`)
		return res.data
	} catch (err) {
		return err.message
	}
}