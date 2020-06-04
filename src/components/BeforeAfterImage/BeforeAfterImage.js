import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./BeforeAfterImage.module.scss"

export const fragment = graphql`
  fragment BeforeAfterImageSection on WPGraphQL_Page_Sectionfields_Sections_Beforeafterimage {
    image {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
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
          {image ? (
            <BackgroundImage
              className={`col-md-12 ${styles.Col}`}
              fluid={image.imageFile.childImageSharp.fluid}
            >
              <div className={styles.Inner}>
                <h3>Real Results</h3>

                <div className={styles.buttonsWrapper}>
                  <Link to="/before-after/" className="btn btn-red">
                    Before & After
                  </Link>
                </div>
              </div>

              <div className={` ${styles.Overlay}`}></div>
            </BackgroundImage>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterImage
