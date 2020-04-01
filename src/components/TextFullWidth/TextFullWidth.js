import React from "react"
import { graphql } from "gatsby"

import styles from "./TextFullWidth.module.scss"

export const fragment = graphql`
  fragment TextFullWidthSection on WPGraphQL_Page_Sectionfields_Sections_Textfullwidth {
    title
    subtitle
    content
    backgroundcolor
    textcolor
  }
`

const TextFullWidth = ({
  title,
  subtitle,
  content,
  backgroundcolor,
  textcolor,
}) => {
  return (
    <section
      style={{ backgroundColor: backgroundcolor }}
      className={styles.Section}
    >
      <div className={`container `}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 ${styles.TextSide} ${styles.Col}`}>
            <div className={styles.TextSideWrapper}>
              {title ? (
                <h3
                  style={{ color: textcolor }}
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h3>
              ) : (
                ""
              )}

              {subtitle ? (
                <h3
                  style={{ color: textcolor }}
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                  className={styles.Subtitle}
                ></h3>
              ) : (
                ""
              )}

              <div
                style={{ color: textcolor }}
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

export default TextFullWidth