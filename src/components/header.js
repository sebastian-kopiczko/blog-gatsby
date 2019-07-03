import React from "react"
import Navigation from "./navigation"
import SocialIcons from "./socialIcons"
import SearchBar from "./searchbar"

const Header = () => {
  return (
    <header>
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
