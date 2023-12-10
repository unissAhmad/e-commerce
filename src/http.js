import axios from "axios";
const API_URL = "https://fakestoreapi.com/"
const http = axios.create({
    baseURL:API_URL,
    headers:{
        'Content-Type':'application/json',
      }
})

export default http