import React, { Component } from "react"
import { graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Img from "gatsby-image"

import styles from "./InnerHero.module.scss"

export const fragment = graphql`
  fragment InnerHeroSection on WPGraphQL_Page_Sectionfields_Sections_Innerhero {
    title
    subtitle
    btntext1
    btntext2
    btnlink1
    btnlink2
    text
    backgroundimage {
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

class InnerHero extends Component {
  render() {
    const {
      title,
      subtitle,
      text,
      btntext1,
      btntext2,
      btnlink1,
      btnlink2,
      backgroundimage,
    } = this.props

    return (
      <section className={styles.Section}>
        <div className={`container-fluid ${styles.Container}`}>
          <div className={`row ${styles.RowTop}`}>
            <div className={`col-md-12 ${styles.ImgCol}`}>
              {backgroundimage ? (
                <Img
                  alt={backgroundimage.altText}
                  className={`gatsby-image-background ${styles.halfImage}`}
                  fluid={backgroundimage.imageFile.childImageSharp.fluid}
                />
              ) : (
                ""
              )}
              <div className={styles.innerWrapper}>
                <div
                  className={styles.Title}
                  dangerouslySetInnerHTML={{ __html: title }}
                ></div>
              </div>
              <div className={styles.Overlay}></div>
              {subtitle ? <div className={styles.Hatch}></div> : ""}
            </div>
          </div>

          {subtitle ? (
            <div className={`row ${styles.RowBot}`}>
              <div className={`col-md-12 ${styles.TextCol}`}>
                <div
                  className={styles.SubTitle}
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                ></div>

                {btntext1 ? (
                  <>
                    <div
                      className={styles.TextItalic}
                      dangerouslySetInnerHTML={{ __html: text }}
                    ></div>
                    <div className={styles.buttonsWrapper}>
                      <AnchorLink to={btnlink1} className="btn btn-red">
                        {btntext1}
                      </AnchorLink>
                      <AnchorLink
                        to={btnlink2}
                        className="btn btn-black-transparent"
                      >
                        {btntext2}
                      </AnchorLink>
                    </div>
                  </>
                ) : (
                  <div
                    className={styles.Text}
                    dangerouslySetInnerHTML={{ __html: text }}
                  ></div>
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    )
  }
}
export default InnerHero
