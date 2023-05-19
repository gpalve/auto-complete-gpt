import { useQuery } from "@tanstack/react-query";
import HuggingFaceClient from "../services/HuggingFaceClient";

const hugging = new HuggingFaceClient();

const useHugging = (question: string) => {
  const payload = {
    inputs: question,
  };
  return useQuery({
    queryKey: ["answers", question],
    queryFn: () => hugging.postData(JSON.stringify(payload)),
  });
};

export default useHugging;
