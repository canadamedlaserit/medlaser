import React from "react"
import { graphql } from "gatsby"
import ConactForm from "./ContactForm"

import styles from "./ContactLocation.module.scss"
// import styles2 from "./Contact.module.scss"



export const fragment = graphql`
  fragment ContactLocationSection on WPGraphQL_Page_Sectionfields_Sections_Contactlocation {
    title
    btntext
    localspecific
  }
`

const ContactLocation = ({title, btntext, localspecific}) => {
  return (
    <section id="book" className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className={`row`}>
          <div className={`col-md-12 ${styles.Col}`}>
            <div className={styles.Inner}>
              <h5>{localspecific}</h5>

              <h2>{title}</h2>

              <ConactForm btntext={btntext} />
            </div>

            <div className={` ${styles.Overlay}`}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactLocation
