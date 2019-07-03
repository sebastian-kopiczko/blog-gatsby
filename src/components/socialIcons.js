import React, { Fragment } from "react"
import Icon from "./icon"

const SocialIcons = () => {
  const socialMedia = ["Twitter", "Facebook", "Instagram", "Youtube", "Vimeo"]

  return (
    <Fragment>
      {socialMedia.map((item, index) => (
        <Icon style={{ marginRight: "10px" }} key={index} title={item} />
      ))}
    </Fragment>
  )
}
export default SocialIcons
