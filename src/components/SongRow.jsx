import React from "react"
import "../styles/scss/components/SongRow.scss"
import { convertMs } from "../helpers/convertMs";

const SongRow = ({ track, playSong }) => {
  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
      <img
        src={track.album.images[0].url}
        alt=""
        className="songRow__cover"
        width="50px"
      />
      <div className="songRow__trackInfo">
        <h2 className="songRow__name">{track.name}</h2>
        <p className="songRow__artists">
          {track.artists.map((artist) => artist.name).join(", ")}
        </p>
      </div>
      <p className="songRow__album">{track.album.name}</p>
      <p className="songRow__duration">{convertMs(track.duration_ms)}</p>
    </div>
  )
}

export default SongRow
