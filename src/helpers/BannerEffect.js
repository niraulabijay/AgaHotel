import Axios from "axios";
import axios from "axios";
import axiosInstance from "./axios";

const BannerEffect = (props) => {
    console.log(props)
    try{
        const response =  axiosInstance.get(`/${props.params}`,{
            cancelToken: props.token
        });
        console.log(response)
    }catch(error){
        if(!Axios.isCancel(error)){
            throw error
        }
    }
}

export default BannerEffect