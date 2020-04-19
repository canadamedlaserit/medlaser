import React from "react"
import InjuryForm from "./InjuryForm"

import styles from "./ContactSection.module.scss"



const Injury = () => {


  return (
    <section id="book" className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className={`row`}>
          <div className={`col-md-12 ${styles.Col}`}>
            <div className={styles.Inner}>
              <h2>Make An Injury</h2>
              <InjuryForm btntext='book now' />
            </div>

            <div className={` ${styles.Overlay}`}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Injury
