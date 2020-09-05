import React, { createContext, useState, useEffect } from 'react'
import { API } from '../api/api'

const webSocketContext = createContext()

const WebSocketProvider = (props) => {

  const [temperature, setTemperature] = useState(null)

  useEffect(() => {
    API.subscribeThermosensor( (t) => {
      return setTemperature(t);
    } )
  }, [])

  const context = {
    temperature: temperature,
    setTemperature: setTemperature,

    //getTemperature: _getTemperature,
  }

  return <webSocketContext.Provider value={{ ...context }}>{props.children}</webSocketContext.Provider>
}

export { webSocketContext, WebSocketProvider }