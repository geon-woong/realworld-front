import axios from 'axios'
import { config } from 'localforage';

// config 가 적용이 안된다 ..
// const config = async({method,url,body,signal}: fetchConfig)=>{
//     const jwtToken = localStorage.getItem('jwtToken');
//     const config = {
//         baseUrl: 'https://api.realworld.io/api',
//         headers : {
//             Authorization: !!jwtToken ? `Token ${jwtToken}` : '',
//         },
//     signal: signal,

//     }
    
//     try {
//         const { data } = 
//             (method === 'get' && ( await axios.get(url,config))) ||
//             (method === 'post' && ( await axios.post(url,body,config))) ||
//             (method === 'put' && ( await axios.put(url,body,config))) ||
//             (method === 'delete' && ( await axios.delete(url,config))) ||
//             {};
//         console.log(data);
//         return data;
//     } catch (error) {
//         throw(error)
//     }
// }
const jwtToken =localStorage.getItem('jwtToken');

const instance = axios.create({
    baseURL: 'https://api.realworld.io/api/',
    headers: {
        Authorization: !!jwtToken ? `Token ${jwtToken}` : 'No Token',
    }
})

const GET = (url: string, config? : {})=>instance.get(url,config)

const POST = (url: string, body? : {}, config? : {})=>instance.post(url,body,config)

const PUT = (url: string,body? : {}, config? : {})=> instance.put(url,body,config)

const DELETE = (url: string, config? :{})=> instance.delete(url,config)

export { 
    GET,
    POST,
    PUT,
    DELETE
}
