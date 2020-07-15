import React from "react"
import { graphql } from "gatsby"

import styles from "./ServicesLinksTwoColumns.module.scss"

export const fragment = graphql`
  fragment ServicesLinksTwoColumnsSection on WPGraphQL_Page_Sectionfields_Sections_Serviceslinkstwocolumns {
    contentleft
    contentright
    listright {
      ... on WPGraphQL_Page_Sectionfields_Sections_Serviceslinkstwocolumns_listright {
        content
      }
    }
    listleft {
      ... on WPGraphQL_Page_Sectionfields_Sections_Serviceslinkstwocolumns_listleft {
        content
      }
    }
  }
`

const ServicesLinksTwoColumns = ({
  contentleft,
  contentright,
  listleft,
  listright,
}) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row} `}>
          <div className={`col-md-6 ${styles.Col} ${styles.LeftSide}`}>
            <div className={styles.TextWrapper}>
              <div
                className={styles.Title}
                dangerouslySetInnerHTML={{ __html: contentleft }}
              ></div>
              {listleft
                ? listleft.map((item, index) => (
                    <div
                      key={index}
                      className={styles.ListContent}
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    ></div>
                  ))
                : null}
            </div>
          </div>

          <div className={`col-md-6 ${styles.Col} ${styles.RightSide}`}>
            <div className={styles.TextWrapper}>
              <div
                className={styles.Title}
                dangerouslySetInnerHTML={{ __html: contentright }}
              ></div>

              {listright
                ? listright.map((item, index) => (
                    <div
                      key={index}
                      className={styles.ListContent}
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    ></div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesLinksTwoColumns
