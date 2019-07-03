import React from "react"
import Layout from "../components/layout"
import SearchBar from "../components/searchbar"
import Tags from "../components/tags"
import Categories from "../components/categories"
import PostsList from "../components/postsList"
import Author from "../components/author"

const IndexPage = () => {
  const featuredPosts = [{}, {}]
  const latestPosts = [{}, {}, {}]
  const popularPosts = [{}, {}, {}]
  return (
    <Layout>
      <PostsList list={featuredPosts} />
      <div>
        <h3>Latest Posts</h3>
        <PostsList list={latestPosts} />
        <div>* * * pagination</div>
      </div>
      <div>
        <SearchBar />
      </div>
      <Author />
      <div>
        <h4>popular posts</h4>
        <PostsList list={popularPosts} />
      </div>
      <Categories />
      <Tags />
    </Layout>
  )
}
export default IndexPage
