import React from "react"
import { graphql } from "gatsby"

import styles from "./MoreTreatments.module.scss"

export const fragment = graphql`
  fragment MoreTreatmentsSection on WPGraphQL_Page_Sectionfields_Sections_Moretreatments {
    treatments {
      content
    }
  }
`

const MoreTreatments = ({ treatments }) => {
  console.log(treatments)
  return (
    <section className={styles.Section}>
      <div className={`container`}>
        <div className={`row ${styles.Row}`}>
          {treatments
            ? treatments.map((item, index) => (
                <div key={index} className={`col-md-4 ${styles.Wrapper} `}>
                  <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  )
}

export default MoreTreatments
