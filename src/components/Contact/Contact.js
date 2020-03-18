import React from "react"
import { graphql } from "gatsby"
import ConactForm from './ContactForm'

import styles from "./Contact.module.scss"

export const fragment = graphql`
  fragment ContactSection on WPGraphQL_Page_Sectionfields_Sections_Contact {
    title
    btntext
  }
`

const Contact = ({ title, btntext }) => {
  return (
    <section id="book" className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className={`row`}>
          <div className={`col-md-12 ${styles.Col}`}>
            <div className={styles.Inner}>
              <h2>{title}</h2>
              <ConactForm  btntext={btntext}/>
             
            </div>

            <div className={` ${styles.Overlay}`}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
