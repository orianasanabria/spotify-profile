import React from "react"
import "../styles/scss/components/PlaylistCard.scss"

const PlaylistCard = ({ playlist }) => {
  return (
    <div className="playlistCard">
      <img
        className="playlistCard__image"
        src={playlist?.images[0].url}
        alt={playlist?.name}
      />
      <p className="playlistCard__name" href="">
        {playlist?.name}
      </p>
      <p className="playlistCard__tracks" href="">
        {playlist?.tracks.total} tracks
      </p>
    </div>
  )
}

export default PlaylistCard
