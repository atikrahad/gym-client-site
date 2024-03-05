import axios from "axios";

const axiosPublic = axios.create({
    baseURL:`${import.meta.env.VITE_url}`
})

export default axiosPublic;