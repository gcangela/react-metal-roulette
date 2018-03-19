import React from 'react'
import Header from './Header'
import BandSearch from './BandSearch'
import BandList from './BandList'
import '../config.json'
import RandomBand from './RandomBand'
import "normalize.css/normalize.css";
import "../styles/styles.scss";
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom";


const url = "http://em.wemakesites.net/search/band_name/slayer?api_key=e35f39ea-9d1f-4747-9e6d-2b08a6564dda"
const upcomingAlbums = "http://em.wemakesites.net/albums/upcoming?api_key=e35f39ea-9d1f-4747-9e6d-2b08a6564dda"



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bandSearch: {
        genre: "",
        name: ""
      },
      upcomingAlbums:""
    }
  }

  handleSearchChange = () => {

  }
  componentWillMount = () => {
    fetch(upcomingAlbums).then((response) => response.json()).then((bands) => {
     
    }).catch((e) => {
      console.log(e)
    })
    
  }
  render() {
    return (
      <div className="container">
      <Header />
      <RandomBand />
      </div>
    );
  }
}

export default App;
