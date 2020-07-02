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

// const createPosts = require("./create/createPosts")
// exports.createPagesStatefully = async (
//   { graphql, actions, reporter },
//   options
// ) => {
//   await createPosts({ actions, graphql, reporter }, options)
// }

// category + tag + PAGES
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogCategoryFilter = path.resolve("src/templates/post/category.js")
  const blogTagFilter = path.resolve("src/templates/post/tag.js")
  const pageFilter = path.resolve("src/templates/post/pageTemplate.js")
  const memberFilter = path.resolve("src/templates/post/member.js")
  const sitemapFilter = path.resolve("src/templates/post/sitemap.js")

  const query = await graphql(`
    {
      wpgraphql {
        teams(first: 200) {
          edges {
            node {
              id
              uri
              slug
            }
          }
        }
        pages(first: 500) {
          edges {
            node {
              id
              uri
              title
              childPages(first: 500) {
                edges {
                  node {
                    id
                    uri
                    title
                    childPages(first: 500) {
                      edges {
                        node {
                          id
                          uri
                          title
                        }
                      }
                    }
                  }
                }
              }
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
      }
    }
  `)

  /*

  //categories
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

  //tags
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


  //members
  query.data.wpgraphql.teams.edges.forEach(edge => {
    let path = edge.node.slug + "/"

    createPage({
      component: memberFilter,
      path: path,
      context: {
        id: edge.node.id,
      },
    })
  })

  //sitemap
  createPage({
    component: sitemapFilter,
    path: "sitemap/",
    context: {
      data: query.data.wpgraphql,
    },
  })


  */
 
  // pages
  query.data.wpgraphql.pages.edges.forEach(edge => {
    // console.log(edge.node.uri)
    if (
      edge.node.uri === "contact-global/" ||
      edge.node.uri === "globalsections/" ||
      edge.node.uri === "headerfooterinfo/" ||
      edge.node.uri === "link-slider-global/" ||
      edge.node.uri === "knowledge-base/"
    ) {
      // console.log('skip: ' + edge.node.uri)
    } else {
      createPage({
        component: pageFilter,
        path: edge.node.uri,
        context: {
          id: edge.node.id,
        },
      })

      if (edge.node.childPages) {
        edge.node.childPages.edges.forEach(child => {
          createPage({
            component: pageFilter,
            path: child.node.uri,
            context: {
              id: child.node.id,
            },
          })

          if (child.node.childPages) {
            child.node.childPages.edges.forEach(child => {
              createPage({
                component: pageFilter,
                path: child.node.uri,
                context: {
                  id: child.node.id,
                },
              })
            })
          }
        })
      }
    }
  })

  // debug only home pages
  // query.data.wpgraphql.pages.edges.forEach(edge => {
  //   if (
  //     edge.node.uri === "/" ||
  //     edge.node.uri === "laser-hair-removal/" ||
  //     edge.node.uri === "laser-hair-removal-woman/" ||
  //     edge.node.uri === "coolsculpting-toronto/" ||
  //     edge.node.uri === "laser-hair-removal-men/"
  //   ) {
  //     createPage({
  //       component: pageFilter,
  //       path: edge.node.uri,
  //       context: {
  //         id: edge.node.id,
  //       },
  //     })
  //   } else {
  //   }
  // })
}
