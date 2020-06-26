import React from "react"
import { graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Img from "gatsby-image"

import styles from "./SpecialTXT.module.scss"

export const fragment = graphql`
  fragment SpecialTxtSection on WPGraphQL_Page_Sectionfields_Sections_SpecialTxt {
    showButton
    image {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const SpecialTXT = ({ showButton, image, location }) => {
  return (
    <section className={styles.Section}>
      <div className={`container `}>
        <div className={`row `}>
          <div className={`col-md-12 `}>
            <div>
              {image ? (
                <Img
                  alt={image.altText}
                  fluid={image.imageFile.childImageSharp.fluid}
                />
              ) : (
                ""
              )}

              {showButton === "yes" ? (
                <AnchorLink
                  to={`${location.pathname}#contact`}
                  className="btn btn-mid btn-red"
                >
                  Preserve it
                </AnchorLink>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialTXT
