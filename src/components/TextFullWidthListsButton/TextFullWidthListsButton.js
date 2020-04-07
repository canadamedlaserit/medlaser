import React from "react"
import { graphql } from "gatsby"

import styles from "./TextFullWidthListsButton.module.scss"

export const fragment = graphql`
  fragment TextFullWidthListsButtonSection on WPGraphQL_Page_Sectionfields_Sections_Textfullwidthlistsbutton {
    title
    content
    listcontent
    btntext
    btnlink
    backgroundcolor
    textcolor
  }
`

const TextFullWidthListsButton = ({
  title,
  content,
  listcontent,
  btntext,
  btnlink,
  backgroundcolor,
  textcolor,
}) => {
  return (
    <section
      className={styles.Section}
      style={{ backgroundColor: backgroundcolor, color: textcolor }}
    >
      <div className={`container ${styles.Container} `}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 ${styles.TextSide} ${styles.Col}`}>
            <div className={styles.TextSideWrapper}>
              <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>

              <div
                className={`content text ${styles.Content}`}
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
            <div className={styles.ListSideWrapper}>
              <div
                className={`content text ${styles.Content2}`}
                dangerouslySetInnerHTML={{ __html: listcontent }}
              ></div>
              {btntext ? (
                <div className={styles.buttonsWrapper}>
                  <a href={btnlink} className="btn btn-mid btn-red">
                    {btntext}
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextFullWidthListsButton
