import React from "react"
import { graphql } from "gatsby"

import ImgLeft from "./ImgLeft"
import ImgRight from "./ImgRight"
import styles from "./LeftRightMultiple.module.scss"

export const fragment = graphql`
  fragment LeftRightMultipleSection on WPGraphQL_Page_Sectionfields_Sections_Leftrightmultiple {
    title
    backgroundcolor
    textcolor
    innersections {
      ... on WPGraphQL_Page_Sectionfields_Sections_Leftrightmultiple_innersections {
        title
        content
        btntext
        btnlink
        image {
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`

const LeftRightMultiple = ({
  title,
  innersections,
  backgroundcolor,
  textcolor,
}) => {
  return (
    <section
      style={{ backgroundColor: backgroundcolor, color: textcolor }}
      className={styles.Section}
    >
      <div className={`container-fluid ${styles.Container}`}>
        {title ? (
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-12 ${styles.Col}`}>
              <div className={styles.TextWrapper}>
                <h3>{title}</h3>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className={styles.RowsWrapper}>
          {innersections.map((section, index) => {
            if (index % 2 === 0) {
              return <ImgLeft key={index} data={section} />
            } else {
              return <ImgRight key={index} data={section} />
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default LeftRightMultiple
