import React from "react"

const Post = props => {
  return (
    <div>
      {props.featuredImage && <img alt={props.title} src={props.imageSource} />}
      <h4>post category</h4>
      <div>
        <span>John Doe</span>
        <span>02-06-2015</span>
      </div>
      <div>
        <h2>post title</h2>
        <p>post excerpt</p>
      </div>
    </div>
  )
}
export default Post
