import axios from "axios";

const hugginInstance = axios.create({
  baseURL:
    "https://api-inference.huggingface.co/models/OpenAssistant/oasst-sft-1-pythia-12b",
  headers: {
    Authorization: "Bearer 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",
    "Content-Type": "application/json",
  },
});

class HuggingClient {
  postData = (data: string) => {
    return hugginInstance
      .post("/", data)
      .then((res) => res.data)
      .catch((err) => console.error(err));
  };
}

export default HuggingClient;

// async function query(data: any) {
//   try {
//     const response = await axiosInstance.post("/", data);
//     const result = response.data;
//     return result;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// query({ inputs: "Can you please let us know more details about your " })
//   .then((response) => {
//     console.log(JSON.stringify(response));
//   })
//   .catch((error) => {
//     console.error(error);
//   });
