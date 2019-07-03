import React from "react"
import SocialIcons from "./socialIcons"
const Author = props => {
  return (
    <div>
      <img src={props.imageSource} alt={props.imageAlt} />
      <h3>Author name</h3>
      <p>author desc</p>
      <button>Read my bio</button>
      <SocialIcons />
    </div>
  )
}
export default Author
