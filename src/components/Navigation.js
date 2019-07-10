import React from "react"
import { Link } from "gatsby"
const Navigation = () => {
  const navItems = [
    "home",
    "business",
    "travel",
    "categories",
    "about",
    "contact",
  ]
  return (
    <nav>
      <ul>
        {navItems.map((navItem, index) => {
          let slug
          if (navItem === "home") {
            slug = "/"
          } else {
            slug = navItem
          }
          return (
            <li key={index}>
              <Link to={`/${slug}`}>{navItem}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
