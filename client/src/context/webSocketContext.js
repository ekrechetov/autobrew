import React, { createContext, useState, useEffect } from 'react'
import { config } from '../config'
import io from 'socket.io-client'

const socket = io(config.API_URL)

const webSocketContext = createContext()

const WebSocketProvider = (props) => {

  const [temperature, setTemperature] = useState(null)

  useEffect(() => {
    socket.on('newTemperature', (temperature) => {
      setTemperature(temperature)
    })
    console.log('new t from server: ', temperature)
  }, [temperature])

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