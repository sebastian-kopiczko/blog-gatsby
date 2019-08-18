import React from "react"

const Post = ({ featuredImage, imageSource, title }) => {
  return (
    <div>
      {/* {featuredImage && <img alt={title} src={imageSource} />} */}
      <h4>post category</h4>
      <div>
        <span>John Doe</span>
        <span>02-06-2015</span>
      </div>
      <div>
        <h2>{title}</h2>
        <p>post excerpt</p>
      </div>
    </div>
  )
}
export default Post
