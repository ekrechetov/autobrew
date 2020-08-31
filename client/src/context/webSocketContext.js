import React, { createContext, useState, useEffect, useContext } from 'react'
import { API_URL } from '../config'
import io from 'socket.io-client'

// const socket = io(API_URL)
const socket = io()

const webSocketContext = createContext()

const WebSocketProvider = (props) => {
  

  const [temperature, setTemperature] = useState(null)

  useContext(() => {
    socket.on('message', (temperature) => {
      console.log('Message from server: ', temperature)
      setTemperature(temperature)
    })
  })

  // const [error, setError] = useState(null)

  const context = {
    //error: error,
    //setError: setError,
    temperature: temperature,
    setTemperature: setTemperature,

    //getTemperature: _getTemperature,
  }

  return <webSocketContext.Provider value={{ ...context }}>{props.children}</webSocketContext.Provider>
}

export { webSocketContext, WebSocketProvider }