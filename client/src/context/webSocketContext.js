import React, { createContext, useState, useEffect } from 'react'
import { socketAPI } from '../api/socketApi'

const webSocketContext = createContext()

const WebSocketProvider = (props) => {

  const [temperature1, setTemperature1] = useState(null)
  const [temperature2, setTemperature2] = useState(null)

  useEffect(() => {
    socketAPI.subscribeThermosensor(
      (t) => setTemperature1(t)
     )
  }, [])

  const _getTemperature2 = () => {
    socketAPI.getTemperature2(
      (t) => setTemperature2(t)
     )
  }

  const context = {
    temperature1: temperature1,
    temperature2: temperature2,
    // setTemperature1: setTemperature1,

    getTemperature2: _getTemperature2,
  }

  return <webSocketContext.Provider value={{ ...context }}>{props.children}</webSocketContext.Provider>
}

export { webSocketContext, WebSocketProvider }