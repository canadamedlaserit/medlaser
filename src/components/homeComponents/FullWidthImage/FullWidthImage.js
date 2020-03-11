import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

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
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

const FullWidthImage = ({ title, subtitle, btntext, btnlink, image, altText }) => {
  const fluidImage = image.imageFile.childImageSharp.fluid

  return (
    <section className={styles.Section}>
      <div className={`container-fluid`}>
        <div className={`row`}>
          <BackgroundImage
            className={`col-md-12 ${styles.Col}`}
            fluid={fluidImage}
            altText={altText}
          >
            <div className={styles.Inner}>
              <h2>{title}</h2>
              <p>{subtitle}</p>
              <Link to={btnlink} className="btn btn-white-transparent">
                {btntext}
              </Link>
            </div>

            <div className={` ${styles.Overlay}`}></div>
          </BackgroundImage>
        </div>
      </div>
    </section>
  )
}

export default FullWidthImage
