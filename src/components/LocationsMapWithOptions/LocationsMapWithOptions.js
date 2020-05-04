import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LocationsBlock from "../LocationsBlock/LocationsBlock"
import Map from "../GoogleMap/Map"
import MapL from "../GoogleMap/MapL"

import styles from "./LocationsMapWithOptions.module.scss"

export const fragment = graphql`
  fragment LocationsMapWithOptionsSection on WPGraphQL_Page_Sectionfields_Sections_Locationsmapwithoptions {
    title
    content
    showlocationboxesabove
    specificlocation
    location
  }
`

const LocationsMapWithOptions = ({
  title,
  showlocationboxesabove,
  content,
  specificlocation,
  location,
}) => {
  const data = useStaticQuery(graphql`
    query locQuery2 {
      wpgraphql {
        page(id: "headerfooterinfo", idType: URI) {
          headerFooterInfo {
            locations {
              ... on WPGraphQL_Page_Headerfooterinfo_locations {
                info
                hours {
                  ... on WPGraphQL_Page_Headerfooterinfo_locations_hours {
                    day
                    time
                  }
                }
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
      {title ? <h2>{title}</h2> : ""}

      {content ? (
        <div
          className={styles.Content}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      ) : (
        ""
      )}

      {showlocationboxesabove === "yes" ? (
        <div className={styles.BoxesWrapper}>
          <LocationsBlock />
        </div>
      ) : (
        ""
      )}
      {specificlocation === "no" ? (
        <Map
          markeractive={markeractive}
          marker={marker}
          locations={locations}
        />
      ) : (
        <MapL
          markeractive={markeractive}
          marker={marker}
          locations={locations}
          location={location}
        />
      )}
    </section>
  )
}

export default LocationsMapWithOptions
