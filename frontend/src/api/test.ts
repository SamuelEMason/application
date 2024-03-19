import axios from "axios";

export const getHello = async () => {
	try {
		const response = await axios.get('http://localhost:8000/hello');
		if (response.status === 200) {
			return response.data;
		} else {
			console.error(`HTTP error! Status: ${response.status}`);
		}
	} catch (err) {
		console.log('error');
	}
}
