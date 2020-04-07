import React from "react"
import { graphql } from "gatsby"

import styles from "./ThreeColumns.module.scss"

export const fragment = graphql`
  fragment ThreeColumnsSection on WPGraphQL_Page_Sectionfields_Sections_Threecolumns {
    columns {
      ... on WPGraphQL_Page_Sectionfields_Sections_Threecolumns_columns {
        content
      }
    }
  }
`

const ThreeColumns = ({ columns }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          {columns.map((column, index) => (
            <div key={index} className={`col-lg-4 ${styles.Col}`}>
              <div className={styles.TextWrapper}>
                <div dangerouslySetInnerHTML={{ __html: column.content }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThreeColumns
