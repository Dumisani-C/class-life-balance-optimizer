import axios from "axios";

export const getGeneratedPlan = async () => {
  const response = await axios.post("http://127.0.0.1:8000/api/generate-plan/", {});
  return response.data;
};
