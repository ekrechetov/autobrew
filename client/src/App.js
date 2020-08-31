import React from 'react'
import { TemperatureProvider } from './context/temperatureContext'

import './reset.scss'
import './app.scss'
import MainPanel from './containers/MainPanel/MainPanel'

const App = () => {
  return (
    <div className="app">
      <TemperatureProvider>
        <MainPanel />
      </TemperatureProvider>
    </div>
  )
}

export default App