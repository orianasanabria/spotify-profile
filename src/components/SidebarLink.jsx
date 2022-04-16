const SidebarLink = ({ title, Icon }) => {
  return (
    <>
      {Icon && <Icon className="sidebarLink__icon" />}
      <p>{title}</p>
    </>
  )
}

export default SidebarLink
