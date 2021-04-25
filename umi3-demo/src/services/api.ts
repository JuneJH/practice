import axios from "axios";

const instance = axios.create({
    headers:{
        authorization:window.localStorage.getItem("token")
    }
})

export function login(params:{loginId:string,loginPassword:string}){
    return axios.post("/api/login",params)
}

export function getStudent(){
    return instance.get("/student");
}