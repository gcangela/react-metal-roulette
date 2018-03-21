import React from 'react'
import Header from './Header'
import RandomBand from './RandomBand'
import '../config.json'

import "normalize.css/normalize.css";
import "../styles/styles.scss";
import 'bootstrap/dist/css/bootstrap.css';

class MetalRoulette extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      upcomingAlbums: ""
    }
  }

  render() {
    return (
      <div className="container app-container">
      <Header />
      <RandomBand />
      </div>
    );
  }
}

export default MetalRoulette;
