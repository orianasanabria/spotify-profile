import React from "react"
import Sidebar from "../../components/Sidebar"
import "../../styles/scss/layout/Container.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "../../layouts/Profile"
import RecentlyPlayed from "../../layouts/RecentlyPlayed"
import TopArtists from "../../layouts/TopArtists"
import TopTracks from "../../layouts/TopTracks"
import Playlists from "../../layouts/Playlists"

const Container = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="container__wrapper">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Profile />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/recent" element={<RecentlyPlayed />}></Route>
            <Route path="/artists" element={<TopArtists />}></Route>
            <Route path="/tracks" element={<TopTracks />}></Route>
            <Route path="/playlists" element={<Playlists />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Container
