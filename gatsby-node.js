const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            content
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPost.edges.forEach(({ node: post }) => {
      createPage({
        path: post.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: post.slug,
        },
      })
    })
  })
}
