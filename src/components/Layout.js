import React from "react"
import PropTypes from "prop-types"
import Header from "./Header/Header"
// import Footer from "./Footer/Footer"

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
        pageBy(uri: "headerinfo") {
          headerInfo {
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
          }
        }
      }
    }
  `)

  return (
    <>
      <Header location={location} data={data} />
      <main>{children}</main>

      {/* <Footer /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
