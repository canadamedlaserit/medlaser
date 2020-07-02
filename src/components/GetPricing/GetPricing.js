import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import styles from "./GetPricing.module.scss"

export const fragment = graphql`
  fragment GetPricingSection on WPGraphQL_Page_Sectionfields_Sections_Getpricing {
    titleright
    titleleft
    content
    subtitleleft
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

const GetPricing = ({
  titleright,
  titleleft,
  content,
  subtitleleft,
  btntext,
  btnlink,
  image,
}) => {
  const fluidImage = image ? image.imageFile.childImageSharp.fluid : false

  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-6 ${styles.Col} ${styles.ImageSide}`}>
            {fluidImage ? (
              <Img
                alt={image.altText}
                className="gatsby-image-background"
                fluid={fluidImage}
              />
            ) : (
              ""
            )}
            <div className={styles.TextWrapper}>
              <div
                className={styles.TitleLeft}
                dangerouslySetInnerHTML={{ __html: titleleft }}
              ></div>
              <div
                className={styles.Subtitle}
                dangerouslySetInnerHTML={{ __html: subtitleleft }}
              ></div>

              <AnchorLink to={btnlink} className="btn btn-white-transparent">
                {btntext}
              </AnchorLink>
            </div>
            <div className={styles.Overlay}></div>
          </div>

          <div className={`col-md-6 ${styles.Col} ${styles.TextSide}`}>
            <div className={styles.TextWrapper}>
              <div
                className={styles.TitleRight}
                dangerouslySetInnerHTML={{ __html: titleright }}
              ></div>
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetPricing
