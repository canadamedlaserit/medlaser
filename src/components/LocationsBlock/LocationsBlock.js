import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"

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
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  // const { title, btntext } = data.wpgraphql.page.contactFields
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 ${styles.Text}`}>LocationsBlock</div>
        </div>
      </div>
    </section>
  )
}

export default LocationsBlock
