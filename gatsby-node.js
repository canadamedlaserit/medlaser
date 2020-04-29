const path = require(`path`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const { excludeCategory } = require("./globals")

exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}

const createPosts = require("./create/createPosts")

exports.createPagesStatefully = async (
  { graphql, actions, reporter },
  options
) => {
  await createPosts({ actions, graphql, reporter }, options)
}

// // create category Pages
// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions
//   const categoryTemplate = path.resolve("src/templates/post/category.js")
//   const result = await graphql(`
//     {
//       wpgraphql {
//         categories {
//           edges {
//             node {
//               id
//               name
//               slug
//               posts {
//                 pageInfo {
//                   hasNextPage
//                   endCursor
//                 }
//                 nodes {
//                   title
//                   excerpt
//                   uri
//                   termNames
//                   termSlugs
//                   date
//                   featuredImage {
//                     sourceUrl
//                     altText
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   // handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   // Extract category data from query
//   let categories = result.data.wpgraphql.categories.edges

//   // Make category pages
//   categories.forEach(category => {
//     // console.log(category.node.name)

//     if (!excludeCategory.includes(category.node.slug)) {
//       createPage({
//         path: `/category/${category.node.slug}/`,
//         component: categoryTemplate,
//         context: {
//           category: category.node.name,
//           posts: category.node.posts,
//         },
//       })
//     }
//   })
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogCategoryFilter = path.resolve("src/templates/post/category.js")

  // const blogList = await graphql(`
  //   query {
  //     allWordpressPost {
  //       edges {
  //         node {
  //           slug
  //           date(formatString: "YYYY-MM")
  //         }
  //       }
  //     }
  //   }
  // `)

  const categories = await graphql(`
    {
      wpgraphql {
        categories {
          edges {
            node {
              id
              name
              slug
              posts (first: 500) {
                nodes {
                  uri
                  title
                  excerpt
                  termNames
                  termSlugs
                  author {
                    name
                    slug
                  }
                  date
                  featuredImage {
                    sourceUrl
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  // const posts = blogList.data.allWordpressPost.edges

  categories.data.wpgraphql.categories.edges.forEach(edge => {
    const slug = edge.node.slug
    // console.log("slug + " + slug)
    let blogPostsCount = edge.node.posts.nodes.length
    // console.log("blogPostsCount + " + blogPostsCount)

    let blogPostsPerPaginatedPage = 5
    let paginatedPagesCount = Math.ceil(
      blogPostsCount / blogPostsPerPaginatedPage
    )

    // console.log("paginatedPagesCount + " + paginatedPagesCount)

    for (let i = 0; i < paginatedPagesCount; i++) {
      createPage({
        component: blogCategoryFilter,
        path:
          i === 0
            ? `/category/${slug}`
            : `/category/${slug}/page/${i + 1}`,
        context: {
          slug: slug,
          posts: edge.node.posts.nodes.slice(i * blogPostsPerPaginatedPage, i * blogPostsPerPaginatedPage + blogPostsPerPaginatedPage),
          limit: blogPostsPerPaginatedPage,
          skip: i * blogPostsPerPaginatedPage,
          paginatedPagesCount,
          pageNumber: i + 1,
          numPages: paginatedPagesCount,
          hasNextPage:  paginatedPagesCount === i + 1 ? false : true
        },
      })
    }
  })
}
