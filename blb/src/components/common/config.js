import axios from 'axios'
import {loginsuccess} from './until';
const HOST='https://api.uec.app/api/v1'
axios.defaults.baseURL=HOST
// axios.interceptors.response.use( 
//     r => {
//         if(r.data.code == 100){
//             loginsuccess(r.data.msg, () => {
//                 localStorage.clear()
//                 // window.location.href = '/'
//             })
//         }
//         return r.data
//     }, 
//     e => Promise.reject(e)
// )

