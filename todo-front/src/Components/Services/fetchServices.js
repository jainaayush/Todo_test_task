import axios from 'axios';
const BaseUrl="http://localhost:3080"


const postdata = async (body,url) => {
    let data = body
    const response = await axios.post(`${BaseUrl}/${url}`, data);
    const result = response.data.response
    return result
};


const getdata = async (url) => {
    const response = await axios.get(`${BaseUrl}/api/all`);
    const result = response.data.response
    return result
}


export { postdata, getdata }