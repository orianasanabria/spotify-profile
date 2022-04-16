import React from "react"
import "../styles/scss/components/ArtistCard.scss"

const ArtistCard = ({ artist }) => {
  return (
    <div className="artistCard">
      <img
        className="artistCard__image"
        src={artist?.images[0].url}
        alt={artist?.name}
      />
      <p className="artistCard__name" href="">
        {artist?.name}
      </p>
    </div>
  )
}

export default ArtistCard
