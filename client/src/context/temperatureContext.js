import React, { createContext, useState } from 'react'

const TemperatureContext = createContext()

const TemperatureProvider = (props) => {

  const [currentTemperature, setTemperature] = useState(22)


  // const [error, setError] = useState(null)

  const context = {
    //error: error,
    //setError: setError,
    currentTemperature: currentTemperature,
    setTemperature: setTemperature,

    //getTemperature: _getTemperature,
  }

  return <TemperatureContext.Provider value={{ ...context }}>{props.children}</TemperatureContext.Provider>
}

export { TemperatureContext, TemperatureProvider }