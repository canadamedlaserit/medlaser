import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./TwoSidesLinks.module.scss"

export const fragment = graphql`
  fragment TwoSidesLinksSection on WPGraphQL_Page_Sectionfields_Sections_Twosideslinks {
    title1
    title2
    linktext1
    linktext2
    link1
    link2
    image1 {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 960) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
    image2 {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 960) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

const TwoSidesLinks = ({
  title1,
  title2,
  linktext1,
  linktext2,
  link1,
  link2,
  image1,
  image2,
}) => {
  const fluidImage1 = image1 ? image1.imageFile.childImageSharp.fluid : null
  const fluidImage2 = image2 ? image2.imageFile.childImageSharp.fluid : null

  return (
    <section className={styles.Section}>
      <div className={`container-fluid `}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-6 ${styles.Col}`}>
            {fluidImage1 ? (
              <Img
                alt={image1.altText}
                className={`gatsby-image-background ${styles.halfImage}`}
                fluid={fluidImage1}
              />
            ) : (
              ""
            )}

            <div className={styles.InsideWrapper}>
              <div className={styles.Inside}>
                <h3>
                  <Link to={link1}>{title1}</Link>
                </h3>

                <Link className={`transition ${styles.ReadMore}`} to={link1}>
                  {linktext1}
                </Link>
              </div>
            </div>
            <Link to={link1} className={styles.Overlay}></Link>
          </div>

          <div className={`col-md-6 ${styles.Col}`}>
            {fluidImage2 ? (
              <Img
                alt={image2.altText}
                className={`gatsby-image-background ${styles.halfImage}`}
                fluid={fluidImage2}
              />
            ) : (
              ""
            )}

            <div className={styles.InsideWrapper}>
              <div className={styles.Inside}>
                <h3>
                  <Link to={link2}>{title2}</Link>
                </h3>

                <Link className={`transition ${styles.ReadMore}`} to={link2}>
                  {linktext2}
                </Link>
              </div>
            </div>
            <Link to={link2} className={styles.Overlay}></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoSidesLinks
