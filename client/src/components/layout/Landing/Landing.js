import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import Login from '../../auth/Login';

const Landing = () => {

  return (
    <div>
      <div className="landing">
        <Login />
        <div className="right-bg"></div>
      </div>
    </div>
  )
}

export default Landing;
