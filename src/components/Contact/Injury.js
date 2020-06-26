import React from "react"
import InjuryForm from "./InjuryForm"
import { graphql } from "gatsby"

import styles from "./ContactSection.module.scss"

export const fragment = graphql`
  fragment InjurySection on WPGraphQL_Page_Sectionfields_Sections_Injury {
    fieldGroupName
  }
`

const Injury = () => {


  return (
    <section id="contact" className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className={`row`}>
          <div className={`col-md-12 ${styles.Col}`}>
            <div className={styles.Inner}>
              <h2>Make An Enquiry</h2>
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
