import React from "react"
import { graphql } from "gatsby"

import styles from "./EqualWithBlackHeader.module.scss"

export const fragment = graphql`
  fragment EqualWithBlackHeaderSection on WPGraphQL_Page_Sectionfields_Sections_Equalwithblackheader {
    title
    leftcontent
    rightcontent
  }
`

const EqualWithBlackHeader = ({ title, leftcontent, rightcontent }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row} `}>
          <div className={`col-md-12 ${styles.Col} ${styles.Header}`}>
            <div className={styles.TextWrapper}>
              <h3>{title}</h3>
            </div>
          </div>

          <div className={`col-md-6 ${styles.Col} ${styles.LeftSide}`}>
            <div className={styles.TextWrapper}>
              <div dangerouslySetInnerHTML={{ __html: leftcontent }}></div>
            </div>
          </div>

          <div className={`col-md-6 ${styles.Col} ${styles.RightSide}`}>
            <div className={styles.TextWrapper}>
              <div dangerouslySetInnerHTML={{ __html: rightcontent }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EqualWithBlackHeader
