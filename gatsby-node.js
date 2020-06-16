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



// category pages for each category multiple pages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogCategoryFilter = path.resolve("src/templates/post/category.js")
  const blogTagFilter = path.resolve("src/templates/post/tag.js")
  const pageFilter = path.resolve("src/templates/post/pageTemplate.js")
  
  const query = await graphql(`
    {
      wpgraphql {
        pages(last: 500) {
          edges {
            node {
              id
              uri
            }
          }
        }
        tags(first: 500) {
          edges {
            node {
              id
              uri
              name
              slug
              seo {
                title
                metaDesc
              }
              posts(first: 500) {
                nodes {
                  uri
                  title
                  excerpt
                  termNames
                  termSlugs
                  categories {
                    nodes {
                      name
                      slug
                      id
                    }
                  }
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
        categories(first: 500) {
          edges {
            node {
              id
              seo {
                title
                metaDesc
              }
              name
              slug
              posts(first: 500) {
                nodes {
                  uri
                  title
                  excerpt
                  termNames
                  termSlugs
                  categories {
                    nodes {
                      name
                      slug
                      id
                    }
                  }
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

  query.data.wpgraphql.categories.edges.forEach(edge => {
    const slug = edge.node.slug
    const name = edge.node.name
    const cat = edge.node

    let blogPostsCount = edge.node.posts.nodes.length
    let blogPostsPerPaginatedPage = 5
    let paginatedPagesCount = Math.ceil(
      blogPostsCount / blogPostsPerPaginatedPage
    )

    for (let i = 0; i < paginatedPagesCount; i++) {
      createPage({
        component: blogCategoryFilter,
        path: i === 0 ? `/category/${slug}` : `/category/${slug}/page/${i + 1}`,
        context: {
          cat: cat,
          slug: slug,
          posts: edge.node.posts.nodes.slice(
            i * blogPostsPerPaginatedPage,
            i * blogPostsPerPaginatedPage + blogPostsPerPaginatedPage
          ),
          limit: blogPostsPerPaginatedPage,
          skip: i * blogPostsPerPaginatedPage,
          paginatedPagesCount,
          pageNumber: i + 1,
          numPages: paginatedPagesCount,
          hasNextPage: paginatedPagesCount === i + 1 ? false : true,
          pageName: name,
        },
      })
    }
  })


  query.data.wpgraphql.tags.edges.forEach(edge => {
    const uri = edge.node.uri
    const slug = edge.node.slug
    const name = edge.node.name
    const cat = edge.node

    createPage({
      component: blogTagFilter,
      path: uri,
      context: {
        cat: cat,
        slug: slug,
        posts: edge.node.posts.nodes,
        pageName: name,
      },
    })
  })


  // query.data.wpgraphql.pages.edges.forEach(edge => {
  //   const uri = edge.node.uri
  //   const id = edge.node.id

  //   createPage({
  //     component: pageFilter,
  //     path: uri,
  //     context: {
  //      id: id
  //     },
  //   })
  // })
}

// // tag pages
// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogTagFilter = path.resolve("src/templates/post/tag.js")
//   const tags = await graphql(`
//     {
//       wpgraphql {
//         tags(first: 500) {
//           edges {
//             node {
//               id
//               uri
//               name
//               slug
//               seo {
//                 title
//                 metaDesc
//               }
//               posts(first: 500) {
//                 nodes {
//                   uri
//                   title
//                   excerpt
//                   termNames
//                   termSlugs
//                   categories {
//                     nodes {
//                       name
//                       slug
//                       id
//                     }
//                   }
//                   author {
//                     name
//                     slug
//                   }
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

//   tags.data.wpgraphql.tags.edges.forEach(edge => {
//     const uri = edge.node.uri
//     const slug = edge.node.slug
//     const name = edge.node.name
//     const cat = edge.node

//     createPage({
//       component: blogTagFilter,
//       path: uri,
//       context: {
//         cat: cat,
//         slug: slug,
//         posts: edge.node.posts.nodes,
//         pageName: name,
//       },
//     })
//   })
// }
