import React from "react"
import { graphql } from "gatsby"

import styles from "./FourColumnsBlock.module.scss"

export const fragment = graphql`
  fragment FourColumnsBlockSection on WPGraphQL_Page_Sectionfields_Sections_Fourcolumnsblock {
    title
    columns {
      ... on WPGraphQL_Page_Sectionfields_Sections_Fourcolumnsblock_columns {
        title
        text
        image {
          sourceUrl
        }
      }
    }
  }
`

const FourColumnsBlock = ({ title, columns }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className="col-md-12">
            <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
          </div>
        </div>

        <div className={`row ${styles.Row}`}>
          {columns.map((column, index) => (
            <div key={index} className={`col-md-3 ${styles.Col}`}>
              <div
                style={{
                  backgroundImage: `url(${
                    column.image ? column.image.sourceUrl : null
                  })`,
                }}
                className={styles.Icon}
              ></div>
              <h5>{column.title}</h5>
              <div dangerouslySetInnerHTML={{ __html: column.text }}></div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.BottomLine}></div>
    </section>
  )
}

export default FourColumnsBlock
