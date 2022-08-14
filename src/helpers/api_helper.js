import axios from "axios"

const API_URL = "https://api.coindesk.com/v1/bpi/currentprice.json"
const axiosApi = axios.create({
  baseURL: API_URL
})

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then(response => {
      if (response.status >= 200 || response.status <= 299) return response.data
      throw response.data
    })
    .catch(err => {
      var message
      if (err.response && err.response.status) {
        if (err.response.data && err.response.data.message) {
          message = err.response.data.message
        } else {
          switch (err.response.status) {
            case 404:
              message = "Sorry! the page you are looking for could not be found"
              break
            case 500:
              message =
                "Sorry! something went wrong, please contact our support team"
              break
            case 401:
              message = "Invalid credentials"
              break
            default:
              message = err[1]
              break
          }
        }
      }
      throw message
    })
}

export async function post(url, data, config = {}) {
  return await axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => {
      if (response.status >= 200 || response.status <= 299) return response.data
      throw response.data
    })
    .catch(err => {
      var message
      if (err.response && err.response.status) {
        if (err.response.data && err.response.data.message) {
          message = err.response.data.message
        } else {
          switch (err.response.status) {
            case 404:
              message = "Sorry! the page you are looking for could not be foundddd"
              break
            case 500:
              message =
                "Sorry! something went wrong, please contact our support team"
              break
            case 401:
              message = "Invalid credentials"
              break
            default:
              message = err[1]
              break
          }
        }
      }
      throw message
    })
}

export async function put(url, data, config = {}) {
  return await axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => {
      if (response.status >= 200 || response.status <= 299) return response.data
      throw response.data
    })
    .catch(err => {
      var message
      if (err.response && err.response.status) {
        if (err.response.data && err.response.data.message) {
          message = err.response.data.message
        } else {
          switch (err.response.status) {
            case 404:
              message = "Sorry! the page you are looking for could not be found"
              break
            case 500:
              message =
                "Sorry! something went wrong, please contact our support team"
              break
            case 401:
              message = "Invalid credentials"
              break
            default:
              message = err[1]
              break
          }
        }
      }
      throw message
    })
}

export async function del(url, config = {}) {
  return axiosApi
    .delete(url, { ...config })
    .then(response => {
      if (response.status >= 200 || response.status <= 299) return response.data
      throw response.data
    })
    .catch(err => {
      var message
      if (err.response && err.response.status) {
        if (err.response.data && err.response.data.message) {
          message = err.response.data.message
        } else {
          switch (err.response.status) {
            case 404:
              message = "Sorry! the page you are looking for could not be found"
              break
            case 500:
              message =
                "Sorry! something went wrong, please contact our support team"
              break
            case 401:
              message = "Invalid credentials"
              break
            default:
              message = err[1]
              break
          }
        }
      }
      throw message
    })
}
