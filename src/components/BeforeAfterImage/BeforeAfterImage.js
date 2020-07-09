import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./BeforeAfterImage.module.scss"

export const fragment = graphql`
  fragment BeforeAfterImageSection on WPGraphQL_Page_Sectionfields_Sections_Beforeafterimage {
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

const BeforeAfterImage = ({ image }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid`}>
        <div className={`row`}>
          <div className={`col-md-12 ${styles.Col}`}>
            {image ? (
              <Img
                alt={image.altText}
                className="gatsby-image-background"
                fluid={image.imageFile.childImageSharp.fluid}
              />
            ) : (
              ""
            )}

            <div className={styles.Inner}>
              <h2>Real Results</h2>

              <div className={styles.buttonsWrapper}>
                <Link to="/before-after/" className="btn btn-red">
                  Before and After
                </Link>
              </div>
            </div>

            <div className={` ${styles.Overlay}`}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterImage
