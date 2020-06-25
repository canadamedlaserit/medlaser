import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./FullWidthImage.module.scss"

export const fragment = graphql`
  fragment FullWidthImageSection on WPGraphQL_Page_Sectionfields_Sections_Fullwidthimage {
    title
    subtitle
    btnlink
    btntext
    image {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

const FullWidthImage = ({ title, subtitle, btntext, btnlink, image }) => {
  const fluidImage = image ? image.imageFile.childImageSharp.fluid : false

  return (
    <section className={styles.Section}>
      <div className={`container-fluid`}>
        <div className={`row`}>
          <div className={`col-md-12 ${styles.Col}`}>
            {fluidImage ? (
              <Img
                alt={image.altText}
                className="gatsby-image-background"
                fluid={fluidImage}
              />
            ) : (
              ""
            )}

            <div className={styles.Inner}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
              <Link to={btnlink} className="btn btn-white-transparent">
                {btntext}
              </Link>
            </div>

            <div className={` ${styles.Overlay}`}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FullWidthImage
