import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/normalize.css"

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#dede" }}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
