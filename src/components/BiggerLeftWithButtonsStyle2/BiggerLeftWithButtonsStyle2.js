import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./BiggerLeftWithButtonsStyle2.module.scss"

export const fragment = graphql`
  fragment BiggerLeftWithButtonsStyle2Section on WPGraphQL_Page_Sectionfields_Sections_Biggerleftwithbuttonsstyle2 {
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
`

const BiggerLeftWithButtonsStyle2 = ({
  title,
  content,
  btntext,
  btnlink,
  image,
}) => {
  const fluidImage = image.imageFile.childImageSharp.fluid

  return (
    <section className={styles.Section}>
      <div className={`container-fluid `}>
        <div className={`row ${styles.Row}`}>
          <div
            className={`col-md-7 biggerSide2 ${styles.TextSide} ${styles.Col}`}
          >
            <div className={styles.TextSideWrapper}>
              {title ? <h3>{title}</h3> : ""}

              <div
                className="content text"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>

              <div className={styles.buttonsWrapper}>
                {btntext ? (
                  <a href={btnlink} className="btn btn-mid btn-red">
                    {btntext}
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <BackgroundImage
            className={`col-md-5 smallerSide2 ${styles.ImageSide} ${styles.Col}`}
            fluid={fluidImage}
          ></BackgroundImage>
        </div>
      </div>
    </section>
  )
}

export default BiggerLeftWithButtonsStyle2