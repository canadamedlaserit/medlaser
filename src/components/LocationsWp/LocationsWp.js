import React, { Component } from "react"
import { graphql } from "gatsby"

import styles from "./LocationsWp.module.scss"
import LocationsBlock from "../LocationsBlock/LocationsBlock"

export const fragment = graphql`
  fragment LocationsWpSection on WPGraphQL_Page_Sectionfields_Sections_Locationscards {
    fieldGroupName
  }
`

class LocationsWp extends Component {
  render() {
    return (
      <section className={styles.Section}>
        <LocationsBlock />
      </section>
    )
  }
}
export default LocationsWp
