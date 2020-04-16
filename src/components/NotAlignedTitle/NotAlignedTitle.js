import React from "react"
import { graphql } from "gatsby"

import styles from "./NotAlignedTitle.module.scss"

export const fragment = graphql`
  fragment NotAlignedTitleSection on WPGraphQL_Page_Sectionfields_Sections_Notalignedtitle {
    title
    content
  }
`

const NotAlignedTitle = ({ title, content }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-6 ${styles.Col}`}>
            <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
          </div>
          <div className={`col-md-6 ${styles.Col}`}>
            <div
              className={styles.Text}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotAlignedTitle
