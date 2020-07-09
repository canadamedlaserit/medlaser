import React from "react"
import { graphql, Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Img from "gatsby-image"

import styles from "./LaserClinics.module.scss"

export const fragment = graphql`
  fragment LaserClinicsSection on WPGraphQL_Page_Sectionfields_Sections_Laserclinics {
    title
    text
    btntext1
    btntext2
    btnlink1
    btnlink2
    image {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

const LaserClinics = ({
  title,
  text,
  image,
  btntext1,
  btntext2,
  btnlink1,
  btnlink2,
}) => {
  const fluidImage = image ? image.imageFile.childImageSharp.fluid : false
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-6 ${styles.TextSide}`}>
            <div className={styles.TextSideWrapper}>
              <div
                className={styles.Title}
                dangerouslySetInnerHTML={{ __html: title }}
              ></div>
              <div
                className={styles.Text}
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>

              <div className={styles.ButtonsWrpper}>
                {btntext1 ? (
                  <Link
                    to={btnlink1}
                    className="btn btn-small btn-white-transparent"
                  >
                    {btntext1}
                  </Link>
                ) : (
                  ""
                )}

                {btntext2 ? (
                  <AnchorLink to={btnlink2} className="btn btn-small btn-red">
                    {btntext2}
                  </AnchorLink>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className={`col-md-6 ${styles.ImageSide}`}>
            {fluidImage ? (
              <Img
                className="gatsby-image-background"
                alt={image.altText}
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

export default LaserClinics
