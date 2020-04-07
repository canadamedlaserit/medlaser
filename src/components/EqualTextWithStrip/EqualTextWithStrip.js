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
    bgcolorleft
    bgcolorright
    textcolorleft
    textcolorright
    mobileAligment
  }
`

const EqualTextWithStrip = ({
  title1,
  content1,
  title2,
  content2,
  type,
  bgcolorleft,
  bgcolorright,
  textcolorleft,
  textcolorright,
  mobileAligment,
}) => {
  return (
    <section
      style={{
        background: `linear-gradient(90deg, ${bgcolorleft} 50%, ${bgcolorright} 50%)`,
      }}
      className={styles.Section}
    >
      <div className={`container-fluid ${styles.Container}`}>
        {type === "strip" ? <div className={styles.Hatch}></div> : ""}

        <div
          className={`row ${styles.Row} ${
            mobileAligment === "center" ? styles.MobileCenter : ""
          }`}
        >
          <div
            style={{
              backgroundColor: bgcolorleft,
              color: textcolorleft,
            }}
            className={`col-md-6 ${styles.Col} ${styles.LeftSide}`}
          >
            <div className={styles.TextWrapper}>
              <h3>{title1}</h3>
              <div dangerouslySetInnerHTML={{ __html: content1 }}></div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: bgcolorright,
              color: textcolorright,
            }}
            className={`col-md-6 ${styles.Col} ${styles.RightSide}`}
          >
            <div className={styles.TextWrapper}>
              <h3>{title2}</h3>
              <div dangerouslySetInnerHTML={{ __html: content2 }}></div>
            </div>

            {type === "strip" ? (
              <div className={`${styles.Hatch} ${styles.Hatch2}`}></div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EqualTextWithStrip
