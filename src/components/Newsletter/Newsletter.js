import React from "react"
import { graphql } from "gatsby"
import NewsletterForm from "../Contact/NewsletterForm"
import styles from "./Newsletter.module.scss"

export const fragment = graphql`
  fragment NewsletterSection on WPGraphQL_Page_Sectionfields_Sections_Newsletter {
    fieldGroupName
  }
`

const Newsletter = () => {
  return (
    <section className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className={`row `}>
          <div className={`col-md-12 ${styles.FormCol}`}>
            <div className={styles.FormWrapper}>
              <NewsletterForm btntext="Subscribe" column={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
