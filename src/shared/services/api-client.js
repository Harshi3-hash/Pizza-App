import axios from "axios";

export const getApiCall=async()=>{
   const response=await axios.get(URL);
   return response.data;
}
