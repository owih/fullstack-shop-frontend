import axios from 'axios';

type Method = 'get' | 'post' | 'put' | 'delete';

class Api {
  base: string;
  constructor() {
    this.base = import.meta.env.VITE_BACKEND_URL;
  }

  getToken = () => {
    return localStorage.getItem('token');
  };

  getHeader = () => {
    return {
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    };
  };

  request = async (method: Method, path: string, data?: object) => {
    const url = this.base + path;
    const header = this.getHeader();

    if (method === 'get') {
      return axios[method](url, header);
    }
    return axios[method](url, data, header);
  };

  updateToken = (token: string) => {
    localStorage.setItem('token', token);
    console.log(token);
  };

  removeToken = () => {
    localStorage.removeItem('token');
  };
}

export default new Api();
