import React, { Component } from "react"
import { graphql } from "gatsby"

import styles from "./InnerHeroClean.module.scss"

export const fragment = graphql`
  fragment InnerHeroCleanSection on WPGraphQL_Page_Sectionfields_Sections_Innerheroclean {
    title
    type
    backgroundcolor
    textcolor
  }
`

class InnerHeroClean extends Component {
  render() {
    const { title, type, backgroundcolor, textcolor } = this.props

    return (
      <section
        className={`${styles.Section} ${
          type === "smaller" ? `${styles.SectionOther}` : ""
        }`}
        style={{ backgroundColor: backgroundcolor }}
      >
        <div className={`container-fluid ${styles.Container}`}>
          {type === "big" ? <div className={styles.Hatch}></div> : ""}

          <div className={`row ${styles.Row}`}>
            <div className={`col-md-12 ${styles.Text}`}>
              <div style={{ color: textcolor}} className={styles.Title} dangerouslySetInnerHTML={{__html: title}}></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default InnerHeroClean
