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

// category + tag + PAGES
module.exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  // redirects start
  createRedirect({
    fromPath: "https://canadamedlaser.ca/hair-transplant-toronto/",
    toPath: "https://canadamedlaser.ca/2018/09/20/hair-transplant-toronto/",
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: "https://canadamedlaser.ca/stretch-marks/",
    toPath: "https://canadamedlaser.ca/2017/04/18/stretch-marks-removal/",
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: "https://canadamedlaser.ca/botox-dysport/",
    toPath: "https://canadamedlaser.ca/botox/",
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: "https://canadamedlaser.ca/microneedling-vs-home-dermaroller/",
    toPath:
      "https://canadamedlaser.ca/2017/05/15/microneedling-vs-home-dermaroller/",
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath:
      "https://canadamedlaser.ca/2019/01/13/botox-injection-prices-in-canada/",
    toPath:
      "https://canadamedlaser.ca/2019/01/13/botox-injection-prices-in-toronto/",
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath:
      "https://canadamedlaser.ca/2018/11/28/coolsculpting-prices-in-canada/",
    toPath:
      "https://canadamedlaser.ca/2018/11/28/coolsculpting-prices-in-toronto/",
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath:
      "https://canadamedlaser.ca/2019/04/11/skin-pigmentation：cost-procedure-benefits-and-potential-risks/",
    toPath:
      "https://canadamedlaser.ca/2019/04/11/skin-pigmentation-cost-procedure-benefits-and-potential-risks/",
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath:
      "https://canadamedlaser.ca/2018/09/26/microdermabrasion-for-acne-and-scarring/",
    toPath:
      "https://canadamedlaser.ca/2019/06/05/what-are-the-treatments-for-acne-scars/",
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath:
      "https://canadamedlaser.ca/locations/vancouver/cosmetic-injections/",
    toPath:
      "https://canadamedlaser.ca/location/mississauga/cosmetic-injections/",
    isPermanent: true,
    force: true,
  })

  // redirects end

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
                    imageFile {
                      childImageSharp {
                        fluid(
                          maxHeight: 500
                          maxWidth: 800
                          quality: 90
                          cropFocus: CENTER
                        ) {
                          tracedSVG
                          aspectRatio
                          src
                          srcSet
                          sizes
                        }
                      }
                    }
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
                    imageFile {
                      childImageSharp {
                        fluid(
                          maxHeight: 500
                          maxWidth: 800
                          quality: 90
                          cropFocus: CENTER
                        ) {
                          tracedSVG
                          aspectRatio
                          src
                          srcSet
                          sizes
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)



  //categories
  query.data.wpgraphql.categories.edges.forEach(edge => {
    const slug = edge.node.slug
    const name = edge.node.name
    const cat = edge.node

    let blogPostsCount = edge.node.posts.nodes.length
    let blogPostsPerPaginatedPage = 10
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

  

  // pages
  query.data.wpgraphql.pages.edges.forEach(edge => {
    // console.log(edge.node.uri)
    if (
      edge.node.uri === "contact-global/" ||
      edge.node.uri === "globalsections/" ||
      edge.node.uri === "headerfooterinfo/" ||
      edge.node.uri === "link-slider-global/" ||
      edge.node.uri === "knowledge-base/" ||
      edge.node.uri === "/"
    ) {
      console.log("skip: " + edge.node.uri)
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
  //     // edge.node.uri === "/" ||
  //     // edge.node.uri === "laser-hair-removal/" ||
  //     // edge.node.uri === "laser-hair-removal-woman/" ||
  //     // edge.node.uri === "laser-hair-removal-men/" ||
  //     // edge.node.uri === "coolsculpting-toronto/" ||
  //     // edge.node.uri === "coolsculpting-body/" ||
  //     // edge.node.uri === "double-chin/" ||
  //     // edge.node.uri === "cosmetic-injections/" ||
  //     // edge.node.uri === "botox/" ||
  //     // edge.node.uri === "dysport/" ||
  //     // edge.node.uri === "wrinkle-reduction/" ||
  //     // edge.node.uri === "dermal-fillers/" ||
  //     // edge.node.uri === "lip-injections-toronto/" ||
  //     // edge.node.uri === "dark-circles/" ||
  //     // edge.node.uri === "face-sculpting/" ||
  //     // edge.node.uri === "more-treatments/" ||
  //     // edge.node.uri === "hair-growth/" ||
  //     // edge.node.uri === "nail-fungus-treatment/" ||
  //     // edge.node.uri === "anti-aging/" ||
  //     // edge.node.uri === "microblading/" ||
  //     // edge.node.uri === "permanent-makeup/" ||
  //     // edge.node.uri === "skin-procedures/" ||
  //     // edge.node.uri === "skin-concerns/" ||
  //     // edge.node.uri === "skin-treatments/" ||
  //     // edge.node.uri === "acne-treatment/" ||
  //     // edge.node.uri === "acne-scar-removal/" ||
  //     // edge.node.uri === "enlarged-pores/" ||
  //     // edge.node.uri === "fine-lines-and-wrinkles/" ||
  //     // edge.node.uri === "cellulite-treatment-toronto/" ||
  //     // edge.node.uri === "laser-vein-removal/" ||
  //     // edge.node.uri === "melasma/" ||
  //     // edge.node.uri === "pigmentation/" ||
  //     // edge.node.uri === "redness-and-rosacea/" ||
  //     // edge.node.uri === "dry-skin/" ||
  //     // edge.node.uri === "microneedling/" ||
  //     // edge.node.uri === "chemical-peel-treatment/" ||
  //     // edge.node.uri === "laser-skin-tightening/" ||
  //     // edge.node.uri === "skin-rejuvenation/" ||
  //     // edge.node.uri === "prp-face-lift/" ||
  //     // edge.node.uri === "aquapure-facial/" ||
  //     // edge.node.uri === "microdermabrasion-toronto/" ||
  //     // edge.node.uri === "laser-skin-treatments/" ||
  //     // edge.node.uri === "about-cml/" ||
  //     // edge.node.uri === "our-team/" ||
  //     // edge.node.uri === "community/" ||
  //     // edge.node.uri === "before-after/" ||
  //     // edge.node.uri === "franchise/" ||
  //     // edge.node.uri === "contact-us/" ||
  //     // edge.node.uri === "location/" ||
  //     // edge.node.uri === "specials/" ||
  //     // edge.node.uri === "location/vaughan/" ||
  //     // edge.node.uri === "location/mississauga/" ||
  //     // edge.node.uri === "location/toronto/" ||
  //     // edge.node.uri === "location/newmarket/" ||
  //     // edge.node.uri === "location/thornhill/" ||
  //     // edge.node.uri === "location/maple/" ||
  //     edge.node.uri === "pricing/"
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
