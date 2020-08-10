import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./EqualTextLinks.module.scss"

export const fragment = graphql`
  fragment EqualTextLinksSection on WPGraphQL_Page_Sectionfields_Sections_Equaltextlinks {
    title1
    link1
    title2
    link2
    image1 {
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
    image2 {
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

const EqualTextLinks = ({ title1, link1, title2, link2, image1, image2 }) => {
  const fluidImage1 = image1 ? image1.imageFile.childImageSharp.fluid : null
  const fluidImage2 = image2 ? image2.imageFile.childImageSharp.fluid : null

  return (
    <section className={styles.Section}>
      <div className={`${styles.Hatch2} ${styles.Hatch}`}></div>

      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-6 ${styles.Col}`}>
            <h3>
              <Link className={styles.Link} to={link1}>
                {title1}
              </Link>
            </h3>

            {image1 ? (
              <Img
                alt={image1.altText}
                className="gatsby-image-background"
                fluid={fluidImage1}
              />
            ) : (
              ""
            )}
          </div>
          <div className={`col-md-6 ${styles.Col}`}>
            <h3>
              <Link className={styles.Link} to={link2}>
                {title2}
              </Link>
            </h3>

            {image2 ? (
              <Img
                alt={image2.altText}
                className="gatsby-image-background"
                fluid={fluidImage2}
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

export default EqualTextLinks
