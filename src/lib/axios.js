import axios from "axios";
// http://13.50.85.46:8000/api/v1
export const axiosInstance = axios.create({
	baseURL:
		import.meta.env.MODE === "development"
			? "http://localhost:8000/api/v1"
			: "http://13.50.85.46:8000/api/v1",
	withCredentials: true,
});
