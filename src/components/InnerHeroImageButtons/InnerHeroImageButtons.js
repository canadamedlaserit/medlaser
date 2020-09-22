import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import styles from "./InnerHeroImageButtons.module.scss"

export const fragment = graphql`
  fragment InnerHeroImageButtons on WPGraphQL_Page_Sectionfields_Sections_InnerHeroImageButtons {
    title
    buttons {
      button1 {
        label
        url
      }
      button2 {
        label
        url
      }
    }
    coverImage {
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

const InnerHeroImageButtons = ({ title, buttons, coverImage }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.RowTop}`}>
          {coverImage ? (
            <Img
              alt={coverImage.altText}
              className="gatsby-image-background"
              fluid={coverImage.imageFile.childImageSharp.fluid}
            />
          ) : (
            ""
          )}
          <div className={`${styles.innerWrapper} col`}>
            <div
              className={styles.Title}
              dangerouslySetInnerHTML={{ __html: title }}
            ></div>

            <div className={styles.Buttons}>
              <AnchorLink to={buttons.button1.url} className="btn btn-red">
                {buttons.button1.label}
              </AnchorLink>
              <AnchorLink to={buttons.button2.url} className="btn btn-black-transparent">
                {buttons.button2.label}
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InnerHeroImageButtons
