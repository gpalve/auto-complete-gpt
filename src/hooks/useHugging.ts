import { useQuery } from "@tanstack/react-query";
import HuggingFaceClient from "../services/HuggingFaceClient";

const hugging = new HuggingFaceClient( );

const useHugging = (question: string) => {
  const payload = {
    inputs: question,
  };

  const shouldFetchData = question !== ""; // Check if question is not empty

  return useQuery({
    queryKey: ["answers", question],
    queryFn: () => {
      if (shouldFetchData) {
        return hugging.postData(JSON.stringify(payload));
      } else {
        // Return an initial data object without making the request
        return { data: [], isLoading: false, isSuccess: true };
      }
    },
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useHugging;
