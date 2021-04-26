import axios from "axios";

const instance = axios.create({
    baseURL:"/api",
    headers:{
        authorization:window.localStorage.getItem("token")
    }
})

export function login(params:{loginId:string,loginPassword:string}){
    return axios.post("/api/login",params)
}

export function getStudent(params:any){
    return instance.get("/student",{params});
}