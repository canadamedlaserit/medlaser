import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import styles from "./DarkSectionButton.module.scss"

export const fragment = graphql`
  fragment DarkSectionButton on WPGraphQL_Page_Sectionfields_Sections_DarkSectionButton {
    text
    button {
      label
      url
    }
  }
`

const DarkSectionButton = ({ text, button }) => {
  return (
    <section className={styles.Section}>
      <div className={`container ${styles.Container}}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 ${styles.TextSide} ${styles.Col}`}>
            <div className={styles.TextSideWrapper}>
              {text ? (
                <div
                  className={styles.Text}
                  dangerouslySetInnerHTML={{ __html: text }}
                ></div>
              ) : (
                ""
              )}
              <div className={styles.Buttons}>
                <Link to={button.url} className="btn btn-red">
                  {button.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DarkSectionButton
