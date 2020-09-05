import io from 'socket.io-client'
import { config } from '../config'
import * as api from './request'
const socket = io(config.API_URL)

const post = async ({ url, data }) => {
  return await api.request({
    method: 'POST',
    url: url,
    data: data,
  })
}

const get = async ({ url }) => {
  return await api.request({
    method: 'GET',
    url: url,
  })
}

const patch = async ({ url, data, headers = [] }) => {
  return await api.request({
    method: 'PATCH',
    resource: url,
    data: data,
    // headers: headers,
  })
}

const put = async ({ url, data }) => {
  return await api.request({
    method: 'PUT',
    url: url,
    data: data,
    // headers: headers,
  })
}

const remove = async ({ url,headers = [] }) => {
  return await api.request({
    method: 'DELETE',
    resource: url,
    // headers: headers,
  })
}

const subscribeThermosensor = (callBack) => {

  socket.on('newTemperature', (temperature) => {
      callBack(temperature)
      console.log('new t from server: ', temperature)
    }
  )

  socket.emit('subscribeThermosensor', 2000);
}

export const API = {
  post,
  patch,
  get,
  remove,
  put,
  subscribeThermosensor,
}
