import React from 'react'
import { WebSocketProvider } from './context/webSocketContext'
import './reset.scss'
import './app.scss'
import MainPanel from './containers/MainPanel/MainPanel'

const App = () => {
  return (
    <div className="app">
      <WebSocketProvider>
        <MainPanel />
      </WebSocketProvider>
    </div>
  )
}

export default App