import React from 'react'

const BandRandomizer = ({randomBandRequest}) => {
  return(
    <div className="text-center">
      <h3 className="call-to-action">Click the button to discover a random band!</h3>
      <button onClick={randomBandRequest} className="btn randomizer-button">Click me!</button><br /><br />
    </div>
  )
}
export default BandRandomizer