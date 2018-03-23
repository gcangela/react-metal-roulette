import React from 'react'

const BandDetails = ( { bandDetails, bandName, bandLogo, randomBandRequest, discography, isLoading }) => {
  const detailsList = Object.keys(bandDetails).map((detail) => {
    return <li key={detail.length}><strong>{detail.charAt(0).toUpperCase() + detail.slice(1)}:</strong>  <span className="band-info"><em>{bandDetails[detail]}</em></span></li>
  })
  const discographyRender = discography.map((album) => {
    return <li key={album.id}>{album.title} <em>{album.year}</em></li>
  })
  if(isLoading) {
    return (
      <div className="container text-center">
        <img className="headbang" src="https://i.imgur.com/jSagKZ3.gif"/>
        <h3 className="randomizerText">Randomizing...</h3>
      </div>
    )
  } 
  else if (bandDetails) {
      return (
        <div className="container">
          <div className="row">
            <div className="col text-center bandDetails-top">
                <h3 className="band-name">{bandName}</h3>
                <img src={bandLogo} alt="The logo of this band is unknown"/>
            </div>
         </div>
         <div className="row bandDetails-bottom">
            <div className="col">
              <h4><strong>Details:</strong></h4>
              <ul className="detailsList">
                {detailsList}
              </ul>
          </div>
          <div className="col">
              <h4><strong>Discography</strong></h4>
              <ul className="detailsList">
                {discographyRender}
              </ul>
          </div>
         </div>
        </div>
      )
    } 
  else{
      return (
        <div></div>
      )
    }
  }
export default BandDetails