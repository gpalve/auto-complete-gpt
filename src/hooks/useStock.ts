import { useQuery } from "@tanstack/react-query";
import Stock from "../entities/Stock";
import ApiClient from "../services/ApiClient";

const apiClient = new ApiClient<Stock>("stocks");

const useStock = () => console.log("comming");

export default useStock;
