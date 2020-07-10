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
                <div
                  className={styles.Title}
                  style={{ color: textcolor }}
                  dangerouslySetInnerHTML={{ __html: title }}
                ></div>
              ) : (
                ""
              )}

              {subtitle ? (
                <div
                  className={styles.Subtitle}
                  style={{ color: textcolor }}
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                ></div>
              ) : (
                ""
              )}

              {content ? (
                <div
                  style={{
                    color: textcolor,
                    marginTop: title && subtitle ? "60px" : "0px",
                  }}
                  className={`content text ${styles.Content}`}
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextFullWidth
