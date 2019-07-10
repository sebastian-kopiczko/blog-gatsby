import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/normalize.css"

const Layout = props => {
  return (
    <div style={{ backgroundColor: "#dede" }}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
