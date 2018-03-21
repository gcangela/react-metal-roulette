import React from 'react'

const BandDetails = ( { bandDetails, bandName, bandLogo, randomBandRequest }) => {
  const detailsList = Object.keys(bandDetails).map((detail) => {
    return <li key={detail.length}>{detail.charAt(0).toUpperCase() + detail.slice(1)}:  {bandDetails[detail]}</li>
  })
  if (bandDetails) {
      return (
        <div className="text-center">
          <h3 className="">Click the button and discover a random band!</h3>
          <button onClick={randomBandRequest} className="btn btn-primary">BOOM</button><br /><br />
          <h3 className="text-left">{bandName}</h3>
          <img src={bandLogo} alt="A metal band logo"/>
          <div className="row">
            <div className="col">
              <h4><strong>Details:</strong></h4>
              <ul>
             {detailsList}
              </ul>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="text-center">
          <h3>Click the button and discover a random band!</h3>
          <button onClick={randomBandRequest} className="btn btn-primary">BOOM</button>
        </div>
      )
    }
  }
export default BandDetails