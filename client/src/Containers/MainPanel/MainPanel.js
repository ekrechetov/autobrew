import React, { useState, useContext } from 'react'
import { API } from '../../api/api'
import { webSocketContext } from '../../context/webSocketContext'
import Button from '../../components/Button/Button'
import DataDisplay from '../../components/DataDisplay/DataDisplay'
import './mainPanel.scss'

const MainPanel = () => {

  const socketContext = useContext(webSocketContext)
  const currentTemperature = socketContext.temperature

  const [isEnabledLamp1, setModeLamp1] = useState(false)
  const [isEnabledLamp2, setModeLamp2] = useState(false)
  const [isEnabledLamp3, setModeLamp3] = useState(false)

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

  const getTemperature = async () => {
    const result = await API.get({ url: '/params' });
    if(result) {
      console.log('status: ', result.status);
      console.log('statusText: ', result.statusText);
      console.log('data : ', result);
    } else {
      console.log('Error request')
    }
  }

  return (
    <main className="main">
      <h1 className="main-title">Control panel</h1>
      <section className="main-content">
        <div className="main-content-param">
          <h2 className="main-content-param-title">Lamps on/off</h2>
          <ul className="main-content-param-list">
            <li className="main-content-param-list-item"><Button text="# 1" onClick={toggleLamp1} isActive={isEnabledLamp1} /></li>
            <li className="main-content-param-list-item"><Button text="# 2" onClick={toggleLamp2} isActive={isEnabledLamp2}/></li>
            <li className="main-content-param-list-item"><Button text="# 3" onClick={toggleLamp3} isActive={isEnabledLamp3}/></li>
          </ul>
        </div>
        <div className="main-content-param">
          <h2 className="main-content-param-title">Temperature</h2>
          <ul className="main-content-param-list">
            <li className="main-content-param-list-item">
              <h3>Sensor #1 temperature on-line monitoring</h3>
              <DataDisplay temperature={currentTemperature}/>
            </li>       
            <li className="main-content-paramcd-list-item">
              <Button text="Sensor #2" onClick={getTemperature}/>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default MainPanel