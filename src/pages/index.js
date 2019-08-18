import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
// import SearchBar from "../components/Searchbar"
// import Tags from "../components/Tags"
// import Categories from "../components/Categories"
// import Author from "../components/Author"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {data.allWordpressPost.edges.map(({ node: post }) => (
        <div>
          <Link to={post.slug}>
            <p>{post.title}</p>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </div>
      ))}
      {/* <div>
        <h3>Latest Posts</h3>
          <div>* * * pagination</div>
      </div>
      <div>
        <SearchBar />
      </div>
      <Author />
      <div>
        <h4>popular posts</h4>
      </div> */}
      {/* <Categories />
      <Tags /> */}
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
