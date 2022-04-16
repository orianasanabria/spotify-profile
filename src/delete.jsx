
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:${id}`,
      })
      .then(() => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          setTimeout(() => {
            dispatch({
              type: "SET_ITEM",
              item: r.item,
            })
          }, 2000)
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          })
        })
      })
  }

  const getPlaylist = (id) => {
    spotify.getPlaylist(id).then((r) => {
      dispatch({
        type: "SET_PLAYLIST",
        playlist: r,
      })
    })
  }