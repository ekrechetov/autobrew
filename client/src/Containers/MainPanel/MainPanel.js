import React, { useState, useContext } from 'react'
import { API } from '../../api/api'
import { webSocketContext } from '../../context/webSocketContext'
import Button from '../../components/Button/Button'
import DataDisplay from '../../components/DataDisplay/DataDisplay'
import './mainPanel.scss'

const MainPanel = () => {

  const socketContext = useContext(webSocketContext)
  const currentTemperature1 = socketContext.temperature1
  const currentTemperature2 = socketContext.temperature2
  

  const [isEnabledLamp1, setModeLamp1] = useState(false)
  const [isEnabledLamp2, setModeLamp2] = useState(false)
  const [isEnabledLamp3, setModeLamp3] = useState(false)

  const [isTherm2Active, setIsTherm2Active] = useState(false)


  const toggleLamp1 = async () => {
    setModeLamp1(!isEnabledLamp1);
    const result = await API.put({ url: '/lamps/1', data: {lamp1: !isEnabledLamp1}});
    if(result) {
      console.log('status: ', result.status);
      console.log('statusText: ', result.statusText);
      console.log('data: ', !isEnabledLamp1);
    } else {
      console.log('Error request')
    }   
  }

  const toggleLamp2 = async () => {
    setModeLamp2(!isEnabledLamp2);
    const result = await API.put({ url: '/lamps/2', data: {lamp2: !isEnabledLamp2}});
    if(result) {
      console.log('status: ', result.status);
      console.log('statusText: ', result.statusText);
      console.log('data: ', !isEnabledLamp2);
    } else {
      console.log('Error request')
    }
  }

  const toggleLamp3 = async () => {
    setModeLamp3(!isEnabledLamp3);
    const result = await API.put({ url: '/lamps/3', data: {lamp3: !isEnabledLamp3}});
    if(result) {
      console.log('status: ', result.status);
      console.log('statusText: ', result.statusText);
      console.log('data: ', !isEnabledLamp3);
    } else {
      console.log('Error request')
    }
  }

  const getTemperature2 =  () => {
    socketContext.getTemperature2()
    setIsTherm2Active(!isTherm2Active)
  }

  return (
    <main className="main">
      <h1 className="main-title">Control panel</h1>
      <section className="main-content">
        <div className="main-content-param">
          <h2 className="main-content-param-title">Lamps</h2>
          <ul className="main-content-param-list">
            <li className="main-content-param-list-item"><Button text="# 1" onClick={toggleLamp1} isActive={isEnabledLamp1} /></li>
            <li className="main-content-param-list-item"><Button text="# 2" onClick={toggleLamp2} isActive={isEnabledLamp2}/></li>
            <li className="main-content-param-list-item"><Button text="# 3" onClick={toggleLamp3} isActive={isEnabledLamp3}/></li>
          </ul>
        </div>
        
        <div className="main-content-param">
          <h2 className="main-content-param-title">Thermo-sensor # 1</h2>
          <ul className="main-content-param-list">
            <li className="main-content-param-list-item">
              <p className="main-content-param-list-title">on-line monitoring:</p>
            </li>
            <li className="main-content-param-list-item">
              <DataDisplay temperature={currentTemperature1}/>
            </li>       
          </ul>          
        </div>
        
        <div className="main-content-param">
          <h2 className="main-content-param-title">Thermo-sensor # 2</h2>

          <ul className="main-content-param-list">
            <li className="main-content-param-list-item">
              <Button text="Check" onClick={getTemperature2} isActive={isTherm2Active}/>
            </li>            
            <li className="main-content-param-list-item">
              { isTherm2Active
                ? <DataDisplay temperature={currentTemperature2} />
                : null
              }
              </li>
          </ul>
        </div>

      </section>
    </main>
  )
}

export default MainPanel