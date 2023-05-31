import axios from 'axios'

const jwtToken =localStorage.getItem('jwtToken');


const fetchWrapper = async({ method, url, body })=>{
    const jwtToken =localStorage.getItem('jwtToken');
    const config = {
        baseURL: 'https://api.realworld.io/api/',
        headers: {
            Authorization: !!jwtToken ? `Token ${jwtToken}` : 'No Token',
        },
    }
    try {
        const { data } =
        (method === 'get' && (await axios.get(url, config))) ||
        (method === 'post' && (await axios.post(url, body, config))) ||
        (method === 'put' && (await axios.put(url, body, config))) ||
        (method === 'delete' && (await axios.delete(url, config))) ||
        {};
      return data;
    } catch (error) {
        throw error
    }
}

const GET = (url: string) => fetchWrapper({ method: 'get', url, body:{} });

const POST = (url: string, body? : {}, config? : {}) => fetchWrapper({method: 'post', url, body});

const PUT = (url: string,body? : {}, config? : {})=> fetchWrapper({method:'put', url , body})

const DELETE = (url: string, body? : {}, config? :{})=> fetchWrapper({method: 'delete', url, body})

export { 
    GET,
    POST,
    PUT,
    DELETE
}
