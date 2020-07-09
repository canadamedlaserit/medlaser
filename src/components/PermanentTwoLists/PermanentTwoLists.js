import React from "react"
import { graphql } from "gatsby"

import styles from "./PermanentTwoLists.module.scss"

export const fragment = graphql`
  fragment PermanentTwoListsSection on WPGraphQL_Page_Sectionfields_Sections_Permanenttwolists {
    title1
    title2
    content
    listcontent1
    listcontent2
  }
`

const PermanentTwoLists = ({
  title1,
  title2,
  content,
  listcontent1,
  listcontent2,
}) => {
  return (
    <section className={styles.Section}>
      <div className={`container ${styles.Container} `}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12  ${styles.Col}`}>
            <div className={styles.TextSideWrapper}>
              <div
                className={`content text ${styles.Content1}`}
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </div>
          <div className={`col-md-6  ${styles.Col}`}>
            <div className={styles.TextSideWrapper}>
              <div className={styles.Title} dangerouslySetInnerHTML={{__html: title1}}></div>
              <div
                className={`content text ${styles.Content}`}
                dangerouslySetInnerHTML={{ __html: listcontent1 }}
              ></div>
            </div>
          </div>

          <div className={`col-md-6  ${styles.Col}`}>
            <div className={styles.TextSideWrapper}>
              <div className={styles.Title} dangerouslySetInnerHTML={{__html: title2}}></div>

              <div
                className={`content text ${styles.Content}`}
                dangerouslySetInnerHTML={{ __html: listcontent2 }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PermanentTwoLists
