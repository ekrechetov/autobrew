import React from 'react'
import './reset.scss'
import './app.scss'
import MainPanel from './Containers/MainPanel/MainPanel'

const App = () => {
  return (
    <div className="app"> 
      <MainPanel />
    </div>
  );
}

export default App