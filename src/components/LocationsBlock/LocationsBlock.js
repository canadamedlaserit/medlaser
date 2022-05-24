import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styles from "./LocationsBlock.module.scss"


const LocationsBlock = ({ images }) => {
  const data = useStaticQuery(graphql`
    query LocationsQuery {
      wpgraphql {
        page(id: "headerfooterinfo", idType: URI) {
          id
          headerFooterInfo {
            locations {
              ... on WPGraphQL_Page_Headerfooterinfo_locations {
                info
                link
              }
            }
          }
        }
      }
    }
  `)

  const footerInfo = data.wpgraphql.page.headerFooterInfo

  return (
    <>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          {footerInfo.locations.map((single, index) => (
            <div
              key={index}
              className={`col-xl-4 col-lg-4 col-12 ${styles.Col}`}
            >
              <Link to={single.link}>
                {images ? (
                  <Img
                    alt={images[index]?.image?.altText}
                    fluid={images[index]?.image?.imageFile?.childImageSharp?.fluid}
                  />
                ) : null}
              </Link>

              <div
                className={styles.Inner}
                dangerouslySetInnerHTML={{ __html: single.info }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default LocationsBlock
