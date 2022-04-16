import React from "react"
import "../styles/scss/components/Sidebar.scss"
import SidebarLink from "./SidebarLink"
import PersonIcon from "@mui/icons-material/Person"
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore"
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn"
import AudiotrackIcon from "@mui/icons-material/Audiotrack"
import QueueMusicOutlinedIcon from "@mui/icons-material/QueueMusicOutlined"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img className="sidebar__logo" src="/logo.svg" />
      <div className="sidebar__actions">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "sidebar__link sidebar__link-active" : "sidebar__link"
          }
        >
          <SidebarLink Icon={PersonIcon} title="Account" />
        </NavLink>
        <NavLink
          to="/recent"
          className={({ isActive }) =>
            isActive ? "sidebar__link sidebar__link-active" : "sidebar__link"
          }
        >
          <SidebarLink
            Icon={SettingsBackupRestoreIcon}
            title="Recent"
          />
        </NavLink>
        <NavLink
          to="/artists"
          className={({ isActive }) =>
            isActive ? "sidebar__link sidebar__link-active" : "sidebar__link"
          }
        >
          <SidebarLink Icon={MicExternalOnIcon} title="Top Artists" />
        </NavLink>
        <NavLink
          to="/tracks"
          className={({ isActive }) =>
            isActive ? "sidebar__link sidebar__link-active" : "sidebar__link"
          }
        >
          <SidebarLink Icon={AudiotrackIcon} title="Top Tracks" />
        </NavLink>
        <NavLink
          to="/playlists"
          className={({ isActive }) =>
            isActive ? "sidebar__link sidebar__link-active" : "sidebar__link"
          }
        >
          <SidebarLink Icon={QueueMusicOutlinedIcon} title="Playlists" />
        </NavLink>
      </div>
      <img className="sidebar__logo" src="/github.svg" />
    </aside>
  )
}

export default Sidebar
