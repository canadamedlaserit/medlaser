import React from "react"
import { graphql } from "gatsby"

import styles from "./LocationText.module.scss"

export const fragment = graphql`
  fragment LocationTextSection on WPGraphQL_Page_Sectionfields_Sections_Locationtext {
    content
  }
`

const LocationText = ({ content }) => {
  return (
    <section className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 ${styles.TextSide} ${styles.Col}`}>
            <div className={styles.TextSideWrapper}>
              <div
                className={`content text ${styles.Content}`}
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationText
