import { api } from "./api";

const getAnswer = async (question: string, dataset: string) => {
  // Call the API to get the answer
  const response = await api.post("http://localhost:8000/answer/", {
    query: question,
    store_name: dataset,
  });
  return response.data;
};

export { getAnswer };
