import React from "react"
import PropTypes from "prop-types"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      wpgraphql {
        menus {
          edges {
            node {
              id
              name
              menuItems {
                edges {
                  node {
                    id
                    label
                    url
                    childItems {
                      edges {
                        node {
                          id
                          label
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        page(id: "headerfooterinfo", idType: URI) {
          headerFooterInfo {
            phone
            phoneurl
            btntext
            btnlink
            cartlink
            logo {
              sourceUrl
              altText
              imageFile {
                childImageSharp {
                  fluid(maxWidth: 143) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            floatingmenu {
              ... on WPGraphQL_Page_Headerfooterinfo_floatingmenu {
                btntext
                btnlink
              }
            }
            locationstitle
            disclaimer
            privacypolicy
            socialstitle
            privacypolicylink
            locations {
              ... on WPGraphQL_Page_Headerfooterinfo_locations {
                info
              }
            }
            socials {
              ... on WPGraphQL_Page_Headerfooterinfo_socials {
                link
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Header location={location} data={data} />
      <main>{children}</main>
      <Footer data={data} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
