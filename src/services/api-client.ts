import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {key: '37e6b338d3b64baaa611c1af8ce99bfd'}
})