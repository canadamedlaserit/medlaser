import React, { Component } from "react"
import { graphql } from "gatsby"

import styles from "./LocationsWp.module.scss"
import LocationsBlock from '../LocationsBlock/LocationsBlock'

class LocationsWp extends Component {
  render() {
   
    return (
      <section className={styles.Section}>
        <div className={`container-fluid ${styles.Container}`}>
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-12 ${styles.Text}`}>
            <LocationsBlock />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default LocationsWp
