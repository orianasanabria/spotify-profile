import React from "react"
import MadeWithLove from "react-made-with-love"
import { loginUrl } from "../../configs/spotify"
import "../../styles/scss/layout/Login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="login__logo">
        <div className="login__img">
          <img src="/logo.png" />
        </div>
        <h1 className="login__title">Profile</h1>
      </div>
      <a className="login__btn" href={loginUrl}>
        Login With Spotify
      </a>
      <MadeWithLove
        by="Oriana"
        emoji={{
          using: "🤍",
        }}
        link="https://github.com/orianasanabria"
      />
    </div>
  )
}

export default Login
