import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

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

const BiggerRightWithButtons = ({
  title,
  content,
  backgroundcolor,
  textcolor,
  btntext1,
  btnlink1,
  image,
}) => {
  const fluidImage = image ? image.imageFile.childImageSharp.fluid : null

  return (
    <section
      style={{ backgroundColor: backgroundcolor }}
      className={styles.Section}
    >
      <div className={`container-fluid `}>
        <div className={`row ${styles.Row}`}>
          <div
            className={`col-md-5 smallerSide2 ${styles.ImageSide} ${styles.Col}`}
          >
            {fluidImage ? (
              <Img
                alt={image.altText}
                className="gatsby-image-background"
                fluid={fluidImage}
              />
            ) : (
              ""
            )}
          </div>

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
                  <AnchorLink to={btnlink1} className="btn btn-mid btn-red">
                    {btntext1}
                  </AnchorLink>
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
