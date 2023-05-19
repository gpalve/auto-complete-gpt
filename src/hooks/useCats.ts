import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";
import Cats from "../entities/Cats";

const apiClient = new ApiClient<Cats>("facts");

const useCats = () => {
  return useQuery({
    queryKey: ["cats"],
    queryFn: apiClient.getSampleData,
    staleTime: 10000, //ms // 10sec
  });
};

export default useCats;
