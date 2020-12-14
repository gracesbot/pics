import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID pl9bG01RHuzX3727BB4Ps0oSTmOGTNi3-fsUvGwg7Zc',
  }
});
