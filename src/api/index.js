import axios from 'axios'
const http = axios.create({
  baseURL: '/n',
  timeout: 5000,
  headers:{
    'PlatformType': 'h5'
  }
})
const getJson = axios.create({
  baseURL:'/z',
  timeout:5000,
})
export {http,getJson}