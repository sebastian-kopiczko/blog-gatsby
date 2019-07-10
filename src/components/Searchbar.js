import React, { Fragment } from "react"
const SearchBar = () => {
  return (
    <Fragment>
      <label htmlFor="site-search">Search the site:</label>
      <input
        type="search"
        id="site-search"
        name="search"
        aria-label="Search through site content"
      />
      <button>Search</button>
    </Fragment>
  )
}
export default SearchBar
