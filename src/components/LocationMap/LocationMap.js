import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import VisibilitySensor from "react-visibility-sensor"
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

  const [isItemVisible, setIsItemVisible] = React.useState(false)

  const onChange = isVisible => {
    if (isVisible) {
      setIsItemVisible(true)
    }
  }

  const locations = data.wpgraphql.page.headerFooterInfo.locations
  console.log(locations)
  const marker = data.wpgraphql.page.headerFooterInfo.marker
  const markeractive = data.wpgraphql.page.headerFooterInfo.markeractive

  return (
    <VisibilitySensor
      delayedCall={true}
      scrollCheck={true}
      partialVisibility={"bottom"}
      offset={{
        bottom: -700,
      }}
      onChange={onChange}
    >
      <section className={styles.Section}>
        <h2>{title}</h2>

        <div>
          {isItemVisible ? (
            <Map
              markeractive={markeractive}
              marker={marker}
              locations={locations}
            />
          ) : (
            ""
          )}
        </div>
      </section>
    </VisibilitySensor>
  )
}

export default LocationMap
