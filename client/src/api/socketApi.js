import io from 'socket.io-client'
import { config } from '../config'

const socket = io(config.API_URL)

const subscribeThermosensor = (callBack) => {

  socket.on('newTemperature', (temperature) => {
      callBack(temperature)
      console.log('new t from server: ', temperature)
    }
  )

  socket.emit('subscribeThermosensor', 2000);
}

const getTemperature2 = (callBack) => {

  socket.on('newTemperature2', (temperature) => {
    if(temperature) {
      callBack(temperature)
      console.log('new t2 from server: ', temperature)
    } else {
      console.log('error get temperature2')
    }
  })
  socket.emit('getTemperature2')
}

export const socketAPI = {
  subscribeThermosensor,
  getTemperature2,
}
