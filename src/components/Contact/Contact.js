import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ConactForm from "./ContactForm"
import ContactFormPricing from "./ContactFormPricing"

import styles from "./ContactSection.module.scss"

export const fragment = graphql`
  fragment ContactSection on WPGraphQL_Page_Sectionfields_Sections_Contact {
    fieldGroupName
    title
    buttonText
    backgroundColor
    formSettings
  }
`

const Contact = ({ backgroundColor, title, buttonText, formSettings }) => {
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
  console.log(formSettings)
  return (
    <section
      id="contact"
      className={styles.Section}
      style={{ backgroundColor: backgroundColor ? backgroundColor : "#161616" }}
    >
      <div className={`container ${styles.Container}`}>
        <div className={`row`}>
          <div className={`col-md-12 ${styles.Col}`}>
            <div className={styles.Inner}>
              {title ? (
                <div
                  className={styles.Title}
                  dangerouslySetInnerHTML={{ __html: title }}
                ></div>
              ) : (
                <div className={styles.Title}>
                  <h2>{titleDef}</h2>
                </div>
              )}
              {formSettings === "pricing" ? (
                <ContactFormPricing btntext={buttonText ? buttonText : btntextDef} />
              ) : (
                <ConactForm btntext={buttonText ? buttonText : btntextDef} />
              )}
            </div>

            <div className={` ${styles.Overlay}`}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
