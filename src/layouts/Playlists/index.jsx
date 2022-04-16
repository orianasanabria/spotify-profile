import React from "react"
import "../../styles/scss/layout/Layout.scss"
import { useDataLayerValue } from "../../context/DataLayer"
import PlaylistCard from "../../components/PlaylistCard"

const Playlists = () => {
  const [{ playlists }] = useDataLayerValue()

  return (
    <div className="layout">
      <div className="layout__header layout__header-playlists">
        <div className="layout__header-info">
          <h1>Your Playlists</h1>
        </div>
        <img
          className="layout__header-img"
          src={playlists?.items[0].images[0].url}
          alt={playlists?.items[0].name}
        />
      </div>
      <div className="layout__songs layout__playlists">
        {playlists?.items.map((playlist, index) => {
          return <PlaylistCard key={index} playlist={playlist} />
        })}
      </div>
    </div>
  )
}

export default Playlists
