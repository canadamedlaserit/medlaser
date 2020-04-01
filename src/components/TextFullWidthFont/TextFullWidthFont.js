import React from "react"
import { graphql } from "gatsby"

import styles from "./TextFullWidthFont.module.scss"

export const fragment = graphql`
  fragment TextFullWidthFontSection on WPGraphQL_Page_Sectionfields_Sections_Textfullwidthfont {
    title
    content
    fontsizedesktop
  }
`

const TextFullWidthFont = ({ title, content, fontsizedesktop }) => {
  return (
    <section
      className={styles.Section}
    >
      <div className={`container `}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 ${styles.TextSide} ${styles.Col}`}>
            <div className={styles.TextSideWrapper}>
              {title ? (
                <h3
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h3>
              ) : (
                ""
              )}

              {content ? (
                <div
                  style={{ fontSize: fontsizedesktop }}
                  className={`content text ${styles.Content}`}
                  dangerouslySetInnerHTML={{ __html: content }}
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

export default TextFullWidthFont
