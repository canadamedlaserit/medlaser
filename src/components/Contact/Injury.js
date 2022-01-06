import { graphql } from "gatsby"
import React from "react"
import styles from "./ContactSection.module.scss"
import InjuryForm from "./InjuryForm-copy"


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
              <h2 style={{marginBottom: 50}}>Contact Us</h2>
              <InjuryForm btntext='SEND YOUR MESSAGE' />
            </div>

            <div className={` ${styles.Overlay}`}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Injury
