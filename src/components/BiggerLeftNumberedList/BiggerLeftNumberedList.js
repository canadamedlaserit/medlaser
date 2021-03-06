import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./BiggerLeftNumberedList.module.scss"

export const fragment = graphql`
  fragment BiggerLeftNumberedListSection on WPGraphQL_Page_Sectionfields_Sections_Biggerleftnumberedlist {
    title
    subtitle
    content
    backgroundcolor
    textcolor
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
    mobileimage {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 450) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

const BiggerLeftNumberedList = ({
  title,
  subtitle,
  content,
  backgroundcolor,
  textcolor,
  image,
  mobileimage,
}) => {
  const fluidImage = image ? image.imageFile.childImageSharp.fluid : null

  return (
    <section className={styles.Section}>
      <div className={`container-fluid `}>
        {title ? (
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-12`}>
              <div
                className={`${styles.Title} `}
                dangerouslySetInnerHTML={{ __html: title }}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className={`row ${styles.Row}`}>
          <div
            className={`col-md-7 biggerSide2 ${styles.TextSide} ${styles.Col}`}
          >
            <div className={styles.TextSideWrapper}>
              {subtitle ? (
                <div
                  className={`${styles.Subtitle} `}
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                ></div>
              ) : (
                ""
              )}

              <div
                className={`content text`}
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
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

export default BiggerLeftNumberedList
