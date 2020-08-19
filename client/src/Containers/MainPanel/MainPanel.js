import React, { useState } from 'react'
import { API } from '../../api/api'
import Button from '../../Components/Button/Button'
import './mainPanel.scss'

const getParams = async () => {
  const result = await API.get({ url: '/params'});
  console.log('status: ', result.status);
  console.log('statusText: ', result.statusText);
}

const MainPanel = () => {

  const [isEnabledLamp1, setModeLamp1] = useState(false)
  const [isEnabledLamp2, setModeLamp2] = useState(false)
  // const [isEnabledLamp3, setModeLamp3] = useState(false)

  const toggleLamp1 = async () => {
    setModeLamp1(!isEnabledLamp1);
    const result = await API.put({ url: '/lamps', data: {lamp1: !isEnabledLamp1}});
    console.log('status: ', result.status);
    console.log('statusText: ', result.statusText);
    console.log('data: ', !isEnabledLamp1);    
  }

  const toggleLamp2 = async () => {
    setModeLamp2(!isEnabledLamp2);
    const result = await API.put({ url: '/lamps', data: {lamp2: !isEnabledLamp2}});
    console.log('status: ', result.status);
    console.log('statusText: ', result.statusText);
    console.log('data: ', !isEnabledLamp2);
  }

  return (
    <div className="main">
      <h1 className="main-title">Control panel</h1>
      <ul className="main-content">
        <li className="main-content-item"><Button text="# 1" onClick={toggleLamp1} isActive={isEnabledLamp1} /></li>
        <li className="main-content-item"><Button text="# 2" onClick={toggleLamp2} isActive={isEnabledLamp2}/></li>
        <li className="main-content-item"><Button text="# 3" onClick={getParams}/></li>
      </ul>
    </div>
  );
}

export default MainPanel