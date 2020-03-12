import React, { Component } from "react"
import { graphql } from "gatsby"

import styles from "./LocationMap.module.scss"

export const fragment = graphql`
  fragment LocationMapSection on WPGraphQL_Page_Sectionfields_Sections_Locationsmap {
    title
  }
`

export class LocationMap extends Component {
  render() {
    const { title } = this.props
    return (
      <section className={styles.Section}>
        <div className={`container-fluid ${styles.Container}`}>
          <div className={`row ${styles.Row}`}>
            <div className="col-md-12">
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default LocationMap
