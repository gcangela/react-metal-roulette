import React from 'react'
import BandDetails from './BandDetails';
import BandRandomizer from './BandRandomizer'
const randomBand = `https://em.wemakesites.net/band/random?api_key=e35f39ea-9d1f-4747-9e6d-2b08a6564dda`
class RandomBand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      randomBand: {
        bandName: "",
        bandDetails: "",
        discography: [],
        logo: "",
        isLoading: false
      }
    }
  }

  randomBandRequest = () => {
    this.setState(state => ({
      ...state,
      randomBand: {
        ...randomBand,
        bandName: "",
        bandDetails: "",
        discography: [],
        logo: "",
        isLoading: true
      }
    }))
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
  
    const { bandName, bandDetails, logo, discography, isLoading} = this.state.randomBand
      return (
        <div className="randomizer-body">
          <BandRandomizer randomBandRequest={this.randomBandRequest}/>
          <BandDetails 
          bandName={bandName}
          bandDetails={bandDetails}
          bandLogo={logo}
          discography={discography}
          isLoading={isLoading}
          />
        </div>
      )
    }
}
export default RandomBand