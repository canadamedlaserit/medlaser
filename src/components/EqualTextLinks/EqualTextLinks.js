import React from "react"
import { graphql, Link } from "gatsby"

import styles from "./EqualTextLinks.module.scss"

export const fragment = graphql`
  fragment EqualTextLinksSection on WPGraphQL_Page_Sectionfields_Sections_Equaltextlinks {
    title1
    link1
    title2
    link2
  }
`

const EqualTextLinks = ({ title1, link1, title2, link2 }) => {
  return (
    <section className={styles.Section}>
      <div className={`${styles.Hatch2} ${styles.Hatch}`}></div>

      <div className={`container-fluid ${styles.Container}`}>

        <div className={`row ${styles.Row}`}>
          <div className={`col-md-6 ${styles.Col}`}>
            <Link to={link1}>
              <h3>{title1}</h3>
            </Link>
          </div>
          <div className={`col-md-6 ${styles.Col}`}>
            <Link to={link2}>
              <h3>{title2}</h3>
            </Link>


          </div>
        </div>
      </div>
    </section>
  )
}

export default EqualTextLinks
