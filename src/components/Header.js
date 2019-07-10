import React from "react"
import Navigation from "./Navigation"
import SocialIcons from "./SocialIcons"
import SearchBar from "./Searchbar"
import headerStyles from "../styles/header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div>
        <div>
          <SocialIcons />
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      <h1>Surfify</h1>
      <Navigation />
    </header>
  )
}
export default Header
