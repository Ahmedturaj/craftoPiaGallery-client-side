import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://b9a10-server-side.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;