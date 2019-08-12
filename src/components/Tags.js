import React from "react"
const Tags = () => {
  const tags = [
    "Travel",
    "Adventure",
    "Food",
    "Lifestyle",
    "Business",
    "Freelancing",
  ]
  return (
    <div>
      <h4>Tags</h4>
      <hr />
      <div>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  )
}
export default Tags
