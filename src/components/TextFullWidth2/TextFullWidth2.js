import React from "react"
import { graphql } from "gatsby"

import styles from "./TextFullWidth2.module.scss"

export const fragment = graphql`
  fragment TextFullWidth2 on WPGraphQL_Page_Sectionfields_Sections_TextFullWidth2 {
    text
  }
`

const TextFullWidth2 = ({ text }) => {
  return (
    <section className={styles.Section}>
      <div className={`container ${styles.Container}}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 ${styles.TextSide} ${styles.Col}`}>
            <div className={styles.TextSideWrapper}>
              {text ? (
                <div
                  className={styles.Text}
                  dangerouslySetInnerHTML={{ __html: text }}
                ></div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextFullWidth2
