import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const fetchQuestions = () => API.get("/quiz/questions");
export const submitAnswers = (data) => API.post("/quiz/submit", data);
