import axios from 'axios';

const entriesApi = axios.create({
    baseURL : '/api'
},15000)

export default entriesApi;