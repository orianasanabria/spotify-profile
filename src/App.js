import Login from "./views/Login"
import React, { useEffect } from "react"
import { getTokenFromUrl } from "./configs/spotify"
import SpotifyWebApi from "spotify-web-api-js"
import Container from "./views/Container"
import { useDataLayerValue } from "./context/DataLayer"

const s = new SpotifyWebApi()

const App = () => {
  const [{ token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token

    if (_token) {
      s.setAccessToken(_token)

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        })
      })

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        })
      })
      
      s.getMyRecentlyPlayedTracks().then((recentlyPlayed) => {
        dispatch({
          type: "SET_RECENTLYPLAYED",
          recentlyPlayed
        })
      })

      s.getMyTopArtists({
        'time_range': 'long_term'
      }).then((res) => {
        dispatch({
          type: "SET_TOPARTISTS_LONG_TERM",
          topArtistsLongTerm: res
        })
      })
      s.getMyTopArtists({
        'time_range': 'medium_term'
      }).then((res) => {
        dispatch({
          type: "SET_TOPARTISTS_MEDIUM_TERM",
          topArtistsMediumTerm: res
        })
      })
      s.getMyTopArtists({
        'time_range': 'short_term'
      }).then((res) => {
        dispatch({
          type: "SET_TOPARTISTS_SHORT_TERM",
          topArtistsShortTerm: res
        })
      })

      s.getMyTopTracks({
        'time_range': 'long_term'
      }).then((res) => {
        dispatch({
          type: "SET_TOPTRACKS_LONG_TERM",
          topTracksLongTerm: res
        })
      })
      s.getMyTopTracks({
        'time_range': 'medium_term'
      }).then((res) => {
        dispatch({
          type: "SET_TOPTRACKS_MEDIUM_TERM",
          topTracksMediumTerm: res
        })
      })
      s.getMyTopTracks({
        'time_range': 'short_term'
      }).then((res) => {
        dispatch({
          type: "SET_TOPTRACKS_SHORT_TERM",
          topTracksShortTerm: res
        })
      })
    }
  }, [])

  return (
    <div className="App">
      {token ? <Container /> : <Login />}
    </div>
  )
}

export default App
