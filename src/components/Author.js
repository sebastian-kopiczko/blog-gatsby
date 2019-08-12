import React from "react"
import SocialIcons from "./SocialIcons"
const Author = ({ imageSource, imageAlt }) => {
  return (
    <div>
      <img src={imageSource} alt={imageAlt} />
      <h3>Author name</h3>
      <p>author desc</p>
      <button>Read my bio</button>
      <SocialIcons />
    </div>
  )
}
export default Author
