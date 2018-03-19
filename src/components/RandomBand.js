import React from 'react'
import BandDetails from './BandDetails';
import BandDiscography from './BandDiscography'

const randomBand = `http://em.wemakesites.net/band/random?api_key=e35f39ea-9d1f-4747-9e6d-2b08a6564dda`
class RandomBand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      randomBand: {
        bandName: "",
        bandDetails: "",
        discography: [],
        logo: ""
      }
    }
  }

  randomBandRequest = () => {
    fetch(randomBand).then((response) => response.json()).then((band) => {
      this.setState(state => ({
        ...state,
        randomBand: {
          bandName: band.data.band_name,
          bandDetails: band.data.details,
          discography: band.data.discography,
          logo: band.data.logo
        }
      }))
    }).catch((e) => {
      console.log(e)
    })
  }

  render() {
    const { bandName, bandDetails, logo, discography} = this.state.randomBand
    return (
      <div>
        <BandDetails 
        bandName={bandName}
        bandDetails={bandDetails}
        bandLogo={logo}
        randomBandRequest={this.randomBandRequest}
        />
        <BandDiscography discography={discography}/>
      </div>
    )
  }
}
export default RandomBand