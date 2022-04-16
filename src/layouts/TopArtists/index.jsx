import React from "react"
import "../../styles/scss/layout/Layout.scss"
import { useDataLayerValue } from "../../context/DataLayer"
import ArtistCard from "../../components/ArtistCard"
import ToggleBtn from "../../components/ToggleBtn"

const TopArtists = () => {
  const [{ topArtistsLongTerm, topArtistsMediumTerm, topArtistsShortTerm }] =
    useDataLayerValue()
  const [term, set_term] = React.useState("long_term")

  return (
    <div className="layout">
      <div className="layout__header layout__header-topArtists">
        <div className="layout__header-info">
          <h1>Top Artists</h1>
          <div className="layout__header-controls">
            <ToggleBtn term={term} set_term={set_term} />
          </div>
        </div>
        {term === "long_term" ? (
          <img
            className="layout__header-img"
            src={topArtistsLongTerm?.items[0].images[0].url}
            alt={topArtistsLongTerm?.items[0].name}
          />
        ) : term === "medium_term" ? (
          <img
            className="layout__header-img"
            src={topArtistsMediumTerm?.items[0].images[0].url}
            alt={topArtistsMediumTerm?.items[0].name}
          />
        ) : term === "short_term" ? (
          <img
            className="layout__header-img"
            src={topArtistsShortTerm?.items[0].images[0].url}
            alt={topArtistsShortTerm?.items[0].name}
          />
        ) : null}
      </div>
      <div className="layout__songs layout__topArtists">
        {term === "long_term"
          ? topArtistsLongTerm?.items.map((artist) => {
              return <ArtistCard artist={artist} key={artist.id} />
            })
          : term === "medium_term"
          ? topArtistsMediumTerm?.items.map((artist) => {
              return <ArtistCard artist={artist} key={artist.id} />
            })
          : term === "short_term"
          ? topArtistsShortTerm?.items.map((artist) => {
              return <ArtistCard artist={artist} key={artist.id} />
            })
          : null}
      </div>
    </div>
  )
}

export default TopArtists
