import React from "react"
const Categories = props => {
  const categories = ["Food", "Travel", "Lifestyle", "Business", "Adventure"]
  return (
    <div>
      <h4>Categories</h4>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  )
}
export default Categories
