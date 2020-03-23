import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./BiggerRightWithButtons.module.scss"

export const fragment = graphql`
  fragment BiggerRightWithButtonsSection on WPGraphQL_Page_Sectionfields_Sections_Biggerrightwithbuttons {
    title
    content
    backgroundcolor
    textcolor
    btntext1
    btnlink1
    image {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

const BiggerRightWithButtons = ({
  title,
  content,
  backgroundcolor,
  textcolor,
  btntext1,
  btnlink1,
  image,
}) => {
  const fluidImage = image.imageFile.childImageSharp.fluid

  return (
    <section
      style={{ backgroundColor: backgroundcolor }}
      className={styles.Section}
    >
      <div className={`container-fluid `}>
        <div className={`row ${styles.Row}`}>
          <BackgroundImage
            className={`col-md-5 smallerSide2 ${styles.ImageSide} ${styles.Col}`}
            fluid={fluidImage}
          ></BackgroundImage>

          <div
            className={`col-md-7 biggerSide2 ${styles.TextSide} ${styles.Col}`}
          >
            <div className={styles.TextSideWrapper}>
              <h3 style={{ color: textcolor }}>{title}</h3>

              <div
                style={{ color: textcolor }}
                className="content text"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>

              {btntext1 ? (
                <div className={styles.buttonsWrapper}>
                  <a href={btnlink1} className="btn btn-mid btn-red">
                    {btntext1}
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

export default BiggerRightWithButtons
