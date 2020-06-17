import React from "react"
import InquiryWithSubscriptionForm from "./InquiryWithSubscriptionForm"
import { graphql } from "gatsby"

import styles from "./ContactSection.module.scss"

export const fragment = graphql`
  fragment InquiryWithSubscriptionSection on WPGraphQL_Page_Sectionfields_Sections_Inquiry2 {
    fieldGroupName
  }
`

const InquiryWithSubscription = () => {


  return (
    <section id="book" className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className={`row`}>
          <div className={`col-md-12 ${styles.Col}`}>
            <div className={styles.Inner}>
              <h2>Make An Enquiry</h2>
              <InquiryWithSubscriptionForm btntext='Enquire Now' />
            </div>

            <div className={` ${styles.Overlay}`}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InquiryWithSubscription
