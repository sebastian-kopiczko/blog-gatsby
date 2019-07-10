import React from "react"
import Layout from "../components/Layout"
import SearchBar from "../components/Searchbar"
import Tags from "../components/Tags"
import Categories from "../components/Categories"
import PostsList from "../components/PostsList"
import Author from "../components/Author"

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
