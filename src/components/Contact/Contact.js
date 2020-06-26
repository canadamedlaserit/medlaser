import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ConactForm from "./ContactForm"

import styles from "./ContactSection.module.scss"

export const fragment = graphql`
  fragment ContactSection on WPGraphQL_Page_Sectionfields_Sections_Contact {
    fieldGroupName
    title
    buttonText
    backgroundColor
  }
`

const Contact = ({ backgroundColor, title, buttonText }) => {
  const data = useStaticQuery(graphql`
    query PageQuery {
      wpgraphql {
        page(id: "contact-global", idType: URI) {
          id
          contactFields {
            title
            btntext
          }
        }
      }
    }
  `)

  const titleDef = data.wpgraphql.page.contactFields.title
  const btntextDef = data.wpgraphql.page.contactFields.btntext
  return (
    <section
      id="contact"
      className={styles.Section}
      style={{ backgroundColor: backgroundColor ? backgroundColor : "#000000" }}
    >
      <div className={`container ${styles.Container}`}>
        <div className={`row`}>
          <div className={`col-md-12 ${styles.Col}`}>
            <div className={styles.Inner}>
              <h2>{title ? title : titleDef}</h2>
              <ConactForm btntext={buttonText ? buttonText : btntextDef} />
            </div>

            <div className={` ${styles.Overlay}`}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
