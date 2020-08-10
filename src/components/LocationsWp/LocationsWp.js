import React, { Component } from "react"
import { graphql } from "gatsby"

import styles from "./LocationsWp.module.scss"
import LocationsBlock from "../LocationsBlock/LocationsBlock"

export const fragment = graphql`
  fragment LocationsWpSection on WPGraphQL_Page_Sectionfields_Sections_Locationscards {
    fieldGroupName
    imagelist {
      image {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 320) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

class LocationsWp extends Component {
  render() {

    return (
      <section className={styles.Section}>
        <LocationsBlock images={this.props.imagelist} />
      </section>
    )
  }
}
export default LocationsWp
