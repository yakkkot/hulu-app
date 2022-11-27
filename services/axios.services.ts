import axios, {AxiosRequestConfig} from "axios";
import {baseURL} from "../configs/urls";

const axiosServices = axios.create({baseURL});

axiosServices.interceptors.request.use((config:AxiosRequestConfig) => {
    config.headers!.Authorization = `Bearer ${process.env.NEXT_PUBLIC_ACCESS}`;
    return config;
});

export {
    axiosServices
}