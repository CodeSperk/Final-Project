import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000"
})

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logOutUser} = useAuth();
  //request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access-token");
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    return Promise.reject(error);
  })

  //Intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(function(response) {
    return response;
  }, async (error) => {
    const statusError = error.response.status;
    if(statusError === 401 || statusError === 403 ){
      await logOutUser();

      navigate("/login")
    }
    return Promise.reject(statusError);
  })

  return axiosSecure;
};

export default useAxiosSecure;