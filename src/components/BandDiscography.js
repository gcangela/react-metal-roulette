import React from 'react'

const BandDiscography = ({ discography }) => {
    const discographyRender = discography.map((album) => {
    return <li key={album.id}>{album.title} <em>{album.year}</em></li>
  })
  if(discography.length > 0) {
    return (
      <div className="col">
       <h4><strong>Discography</strong></h4>
        <ul>
          {discographyRender}
        </ul>
  
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
  
}
export default BandDiscography