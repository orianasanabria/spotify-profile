import React from "react"
import "../../styles/scss/layout/Layout.scss"
import { useDataLayerValue } from "../../context/DataLayer"
import SongRow from "../../components/SongRow"
import ToggleBtn from "../../components/ToggleBtn"

const TopTracks = () => {
  const [{ topTracksLongTerm, topTracksMediumTerm, topTracksShortTerm }] =
    useDataLayerValue()
  const [term, set_term] = React.useState("long_term")

  return (
    <div className="layout">
      <div className="layout__header layout__header-topTracks">
        <h1>Top Tracks</h1>
        <div className="layout__header-controls">
          <ToggleBtn term={term} set_term={set_term} />
        </div>
        {term === "long_term" ? (
          <img
            className="layout__header-img"
            src={topTracksLongTerm?.items[0].album.images[0].url}
            alt={topTracksLongTerm?.items[0].name}
          />
        ) : term === "medium_term" ? (
          <img
            className="layout__header-img"
            src={topTracksMediumTerm?.items[0].album.images[0].url}
            alt={topTracksMediumTerm?.items[0].name}
          />
        ) : term === "short_term" ? (
          <img
            className="layout__header-img"
            src={topTracksShortTerm?.items[0].album.images[0].url}
            alt={topTracksShortTerm?.items[0].name}
          />
        ) : null}
      </div>
      <div className="layout__songs">
        {term === "long_term"
          ? topTracksLongTerm.items.map((track, index) => {
              return <SongRow key={index} track={track} />
            })
          : term === "medium_term"
          ? topTracksMediumTerm.items.map((track, index) => {
              return <SongRow key={index} track={track} />
            })
          : term === "short_term"
          ? topTracksShortTerm.items.map((track, index) => {
              return <SongRow key={index} track={track} />
            })
          : null}
      </div>
    </div>
  )
}

export default TopTracks
