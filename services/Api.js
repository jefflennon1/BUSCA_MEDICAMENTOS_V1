import axios from 'axios';

const Api = axios.create({
    baseURL: "https://webserviceabcfarma.org.br/webservice/"
})

export default Api;