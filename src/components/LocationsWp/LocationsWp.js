import React, { Component } from "react"

import styles from "./LocationsWp.module.scss"
import LocationsBlock from "../LocationsBlock/LocationsBlock"

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
