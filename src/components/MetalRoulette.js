import React from 'react'
import Header from './Header'
import RandomBand from './RandomBand'
import "normalize.css/normalize.css";
import "../styles/styles.scss";
import 'bootstrap/dist/css/bootstrap.css';

const MetalRoulette = () => {
  return (
    <div className="container app-container">
    <Header />
    <RandomBand />
    </div>
  )
}

export default MetalRoulette;
