import axios from 'axios'

const Api = axios.create({
    baseURL: `https://localhost:44347`,
});

export default Api;