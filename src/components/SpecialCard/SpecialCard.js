import React from "react"
import { graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styles from "./SpecialCard.module.scss"
import Img from "gatsby-image"

export const fragment = graphql`
  fragment SpecialCardSection on WPGraphQL_Page_Sectionfields_Sections_SpecialCard {
    subtitle
    text
    image {
      altText
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

const SpecialCard = ({image, text, subtitle, location}) => {

  return (
    <section className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className={`row `}>
          <div className={`col-md-12`}>
            <div className={styles.SpecialWrapper}>
              <div className={styles.ImageSide}>
                {image ? (
                  <Img
                    alt={image.altText}
                    fluid={image.imageFile.childImageSharp.fluid}
                  />
                ) : (
                  ""
                )}
              </div>

              <div className={styles.TextSide}>
                <div className={styles.TextSideWrapper}>
                  <div className={styles.TextWrapper}>
                    <p className={styles.Subt}>{subtitle}</p>
                    <div
                      className={styles.Text}
                      dangerouslySetInnerHTML={{
                        __html: text,
                      }}
                    ></div>
                  </div>

                  <div className={styles.buttonsWrapper}>
                    <AnchorLink
                      to={`${location.pathname}#contact`}
                      className="btn btn-white-transparent"
                    >
                      Reserve it
                    </AnchorLink>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialCard
