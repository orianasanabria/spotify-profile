import React from "react"
import { useDataLayerValue } from "../../context/DataLayer"
import "../../styles/scss/layout/Layout.scss"
import "../../styles/scss/layout/Profile.scss"

const Profile = () => {
  const [{ user, playlists }] = useDataLayerValue()

  return (
    <div className="profile">
      <div className="profile__info">
        <img
          className="profile__info__image"
          src={user.images[0].url}
          alt={user?.display_name}
        />
        <h1 className="profile__info__name">{user?.display_name}</h1>
        <div className="profile__info__specs">
          <div className="profile__info__specs-data">
            <h3>{user?.followers.total}</h3>
            <p>Followers</p>
          </div>
          <div className="profile__info__specs-data">
            <h3>{playlists?.total}</h3>
            <p>Playlists</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
