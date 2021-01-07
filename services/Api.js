import axios from 'axios';

const Api = axios.create({
    // baseURL: "https://webserviceabcfarma.org.br/webservice/"
    baseURL: "http://localhost:5555/api_medicamentos/medicamento/"
})

export default Api;