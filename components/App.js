import React from 'react';
import Header from './Header'
import '../config.json'


const url = "http://em.wemakesites.net/search/band_name/slayer?api_key=e35f39ea-9d1f-4747-9e6d-2b08a6564dda"
const upcomingAlbums = "http://em.wemakesites.net/albums/upcoming?api_key=e35f39ea-9d1f-4747-9e6d-2b08a6564dda"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchBand: "",
      randomBand: "",
      bandSearch: {
        genre: "",
        name: ""
      }
    }
  }

  componentWillMount = () => {
    fetch(upcomingAlbums).then((response) => response.json()).then((bands) => {
      console.log(bands.data.upcoming_albums)
    }).catch((e) => {
      console.log(e)
    })
    
  }

  render() {
    return (
      <div>
      <Header />
      
      </div>
    );
  }
}

export default App;
