import React from "react"
import "../../styles/scss/layout/Layout.scss"
import "../../styles/scss/layout/Profile.scss"

const Profile = () => {
  return (

    <div className="profile">
      <div className="profile__info">
        <img
          className="profile__info__image"
          src="https://i.scdn.co/image/ab6775700000ee856328693abdd449c8f8a5f3fd"
          alt=""
        />
        <h1 className="profile__info__name">Oriana</h1>
        <div className="profile__info__specs">
          <div className="profile__info__specs-data">
            <h3>8</h3>
            <p>Followers</p>
          </div>
          <div className="profile__info__specs-data">
            <h3>20</h3>
            <p>Following</p>
          </div>
          <div className="profile__info__specs-data">
            <h3>93</h3>
            <p>Playlists</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
