import { api } from "./api";

const getAnswer = async (question: string) => {
  // Call the API to get the answer
  const response = await api.post("http://localhost:8000/chat/", {
    query: question,
  });
  return response.data;
};

export { getAnswer };
