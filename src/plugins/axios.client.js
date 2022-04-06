import axios from "axios";
export default axios.create({
  baseURL: "https://api.luxarymodels.com/api/",
  headers: {
    "Content-type": "application/json"
  }
});