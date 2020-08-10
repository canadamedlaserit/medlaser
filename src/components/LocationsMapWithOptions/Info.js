import React from "react"
import { Link } from "gatsby"

import styles from "./LocationsMapWithOptions.module.scss"

const Info = ({ info }) => {
  console.log(info)
  return (
    <div className={`container ${styles.ContainerInfo}`}>
      <div className={`row ${styles.Row}`}>
        {info.map((single, index) => (
          <div key={index} className={`col-xl-4 col-lg-4 col-12 ${styles.Col}`}>
            <div className={styles.InfoBox} dangerouslySetInnerHTML={{ __html: single.info }}></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Info
