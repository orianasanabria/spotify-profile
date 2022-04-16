import React from "react"
import "../../styles/scss/layout/Layout.scss"
import { useDataLayerValue } from "../../context/DataLayer"
import SongRow from "../../components/SongRow"

const RecentlyPlayed = () => {
  const [{ recentlyPlayed }] = useDataLayerValue()

  return (
    <div className="layout">
      <div className="layout__header layout__header-recentlyPlayed">
        <h1>Recently Played</h1>
        <img
          className="layout__header-img"
          src={recentlyPlayed?.items[0].track.album.images[0].url}
          alt={recentlyPlayed?.items[0].track.name}
        />
      </div>
      <div className="layout__songs">
        {recentlyPlayed?.items.map((track) => (
          <SongRow track={track.track} key={track.id} />
        ))}
      </div>
    </div>
  )
}

export default RecentlyPlayed
