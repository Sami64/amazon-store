import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-store-clone-c12b6.cloudfunctions.net/api'
    //'http://localhost:5001/store-clone-c12b6/us-central1/api'
});

export default instance;