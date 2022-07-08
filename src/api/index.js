import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const http = axios.create({
  baseURL: '/n',
  timeout: 5000,
  headers: {
    PlatformType: 'h5'
  }
})
const getJson = axios.create({
  baseURL: '/z',
  timeout: 5000
})
http.interceptors.request.use(
  (config) => {
    nprogress.start()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
http.interceptors.response.use(
  (response) => {
    nprogress.done()
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)
export { http, getJson }
