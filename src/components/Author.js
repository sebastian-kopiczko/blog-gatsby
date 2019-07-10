import React from "react"
import SocialIcons from "./SocialIcons"
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
