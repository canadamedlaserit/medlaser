import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./BiggerLeftWithButtonsStyle2.module.scss"

export const fragment = graphql`
  fragment BiggerLeftWithButtonsStyle2Section on WPGraphQL_Page_Sectionfields_Sections_Biggerleftwithbuttonsstyle2 {
    title
    content
    btntext
    btnlink
    image {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

const BiggerLeftWithButtonsStyle2 = ({
  title,
  content,
  btntext,
  btnlink,
  image,
}) => {
  const fluidImage = image ? image.imageFile.childImageSharp.fluid : null

  return (
    <section className={styles.Section}>
      <div className={`container-fluid `}>
        <div className={`row ${styles.Row}`}>
          <div
            className={`col-md-7 biggerSide2 ${styles.TextSide} ${styles.Col}`}
          >
            <div className={styles.TextSideWrapper}>
              {title ? (
                <div
                  className={styles.Title}
                  dangerouslySetInnerHTML={{ __html: title }}
                ></div>
              ) : (
                ""
              )}

              <div
                className="content text"
                dangerouslySetInnerHTML={{ __html: content }}
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

          <div
            className={`col-md-5 smallerSide2 ${styles.ImageSide} ${styles.Col}`}
          >
            {image ? (
              <Img
                alt={image.altText}
                className="gatsby-image-background"
                fluid={fluidImage}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BiggerLeftWithButtonsStyle2
