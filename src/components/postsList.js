import React from "react"
import Post from "./post"

const PostsList = props => {
  const posts = [{}]
  return (
    <div>
      {posts.map((post, index) => (
        <Post
          key={index}
          title="image title"
          backgroundImage={true}
          imageSource="https://via.placeholder.com/330x220"
        />
      ))}
    </div>
  )
}
export default PostsList
