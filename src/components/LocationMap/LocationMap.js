import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Map from "../GoogleMap/Map"

import styles from "./LocationMap.module.scss"

export const fragment = graphql`
  fragment LocationMapSection on WPGraphQL_Page_Sectionfields_Sections_Locationsmap {
    title
  }
`

const LocationMap = ({ title }) => {
  const data = useStaticQuery(graphql`
    query locQuery {
      wpgraphql {
        page(id: "headerfooterinfo", idType: URI) {
          headerFooterInfo {
            locations {
              ... on WPGraphQL_Page_Headerfooterinfo_locations {
                info
              }
            }
            marker {
              sourceUrl
            }
            markeractive {
              sourceUrl
            }
          }
        }
      }
    }
  `)

  const locations = data.wpgraphql.page.headerFooterInfo.locations
  const marker = data.wpgraphql.page.headerFooterInfo.marker
  const markeractive = data.wpgraphql.page.headerFooterInfo.markeractive

  return (
    <section className={styles.Section}>
      {/* <div className={`container-fluid ${styles.Container}`}> */}
        {/* <div className={`row ${styles.Row}`}> */}
          {/* <div className="col-md-12"> */}
            <h2>{title}</h2>

            <Map markeractive={markeractive} marker={marker} locations={locations} />
          {/* </div>
        </div>
      </div> */}
    </section>
  )
}

export default LocationMap
