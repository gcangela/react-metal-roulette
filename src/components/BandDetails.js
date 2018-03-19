import React from 'react'

const BandDetails = ( { bandDetails, bandName, bandLogo, randomBandRequest }) => {
  const detailsList = Object.keys(bandDetails).map((detail) => {
    return <li key={detail.length}>{detail} {bandDetails[detail]}</li>
  })
  if (bandDetails) {
      return (
        <div>
          <h3 className="">Metal roulette</h3>
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
        <div>
          <h3>Metal Roulette</h3>
          <button onClick={randomBandRequest} className="btn btn-primary">BOOM</button>
        </div>
      )
    }
  }
export default BandDetails