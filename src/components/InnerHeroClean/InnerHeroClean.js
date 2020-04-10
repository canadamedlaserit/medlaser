import React, { Component } from "react"
import { graphql } from "gatsby"

import styles from "./InnerHeroClean.module.scss"

export const fragment = graphql`
  fragment InnerHeroCleanSection on WPGraphQL_Page_Sectionfields_Sections_Innerheroclean {
    title
    type
  }
`

class InnerHeroClean extends Component {
  render() {
    const { title, type } = this.props

    return (
      <section
        className={`${styles.Section} ${
          type === "smaller" ? `${styles.SectionOther}` : ""
        }`}
      >
        <div className={`container-fluid ${styles.Container}`}>
          {type === "big" ? <div className={styles.Hatch}></div> : ""}

          <div className={`row ${styles.Row}`}>
            <div className={`col-md-12 ${styles.Text}`}>
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default InnerHeroClean
