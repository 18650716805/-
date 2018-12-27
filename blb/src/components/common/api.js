//登录接口
import axios from 'axios'
import './config'
export  const Login=(data)=>{
    return axios.get('/login',{
        params:data
    })
}
//注册接口
export const Register=(data)=>{
    return axios.get('/register',{params:data})
}
//获取商品分类
export const cats=()=>{
    return axios.get('/cat',{params:{_token:localStorage.token}})
}
//商品列表
export const catslist=(cid)=>{
    return axios.get(`/cat/${cid}`,{params:{_token:localStorage.token}})
}
//指定商品信息
export const catsinfo=(id)=>{
    return axios.get(`/goods/${id}`,{params:{_token:localStorage.token}})
}