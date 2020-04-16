import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import styles from "./LocationsBlock.module.scss"

const LocationsBlock = () => {
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
              <Link className={styles.Overlay} to={single.link}></Link>

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
