import React from "react"
import { graphql } from "gatsby"

import logo1 from "../../../images/daily-hive.png"
import logo2 from "../../../images/forbes.png"
import logo3 from "../../../images/narcity.png"
import logo4 from "../../../images/z105.png"
import styles from "./AsSeen.module.scss"
export const fragment = graphql`
  fragment AsSeenSection on WPGraphQL_Page_Sectionfields_Sections_Asseen {
    fieldGroupName
  }
`
const imageData = [
  {
    src: logo1,
  },
  {
    src: logo2,
  },
  {
    src: logo3,
  },
  {
    src: logo4,
  },
]
const AsSeen = () => {
  return (
    <section className={styles.Section}>
      <div className={`container ${styles.Container}}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 ${styles.TextSide} ${styles.Col}`}>
            <div
              className={styles.TextSideWrapper}
              style={{ textAlign: "center" }}
            >
              {imageData.map(data => (
                <img
                  src={data.src}
                  className="px-4"
                  height="40"
                  alt="as-seen-logo"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AsSeen
