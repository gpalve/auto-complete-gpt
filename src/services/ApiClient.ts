import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cat-fact.herokuapp.com/",
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getSampleData = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };
}

export default APIClient;
