import React from "react"
import { graphql } from "gatsby"

import styles from "./EqualTextWithStrip.module.scss"

export const fragment = graphql`
  fragment EqualTextWithStripSection on WPGraphQL_Page_Sectionfields_Sections_Equaltextwithstrip {
    title1
    content1
    title2
    content2
    type
  }
`

const EqualTextWithStrip = ({ title1, content1, title2, content2, type }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        {type === "strip" ? <div className={styles.Hatch}></div> : ""}

        <div className={`row ${styles.Row}`}>
          <div className={`col-md-6 ${styles.Col} ${styles.BlackSide}`}>
            <div className={styles.TextWrapper}>
              <h3>{title1}</h3>
              <div dangerouslySetInnerHTML={{ __html: content1 }}></div>
            </div>
          </div>

          <div className={`col-md-6 ${styles.Col} ${styles.GreySide}`}>
            <div className={styles.TextWrapper}>
              <h3>{title2}</h3>
              <div dangerouslySetInnerHTML={{ __html: content2 }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EqualTextWithStrip
