import React, { Component } from "react"
import { graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Img from "gatsby-image"

import styles from "./InnerHero-new.module.scss"

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
            <div className={`col-md-6 ${styles.ImgCol}`}>
              {backgroundimage ? (
                <Img
                  alt={backgroundimage.altText}
                  className={`gatsby-image-background`}
                  fluid={backgroundimage.imageFile.childImageSharp.fluid}
                />
              ) : (
                ""
              )}

              <div
                className={`${styles.Title} ${styles.TitleMobile}`}
                dangerouslySetInnerHTML={{ __html: title }}
              ></div>

              <div className={styles.Overlay}></div>

              <div className={`${styles.Hatch} ${styles.HatchMobile}`}></div>
            </div>

            <div className={`col-md-6 ${styles.TextCol}`}>
              <div className={styles.innerWrapper}>
                <div style={{width: '100%'}}>
                  <div
                    className={`${styles.Title} ${styles.TitleDesktop}`}
                    dangerouslySetInnerHTML={{ __html: title }}
                  ></div>

                  {text ? (
                    <div
                      className={styles.Text}
                      dangerouslySetInnerHTML={{ __html: text }}
                    ></div>
                  ) : null}

                  <div className={styles.ButtonsWrapper}>
                    {btntext1 ? (
                      <AnchorLink to={btnlink1} className="btn btn-mid btn-red">
                        {btntext1}
                      </AnchorLink>
                    ) : null}

                    {btntext2 ? (
                      <AnchorLink
                        to={btnlink2}
                        className={`btn btn-mid btn-white-transparent ${styles.BtnBlackTransparent_Mobile}`}
                      >
                        {btntext2}
                      </AnchorLink>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.Hatch} ${styles.HatchDesktop}`}></div>
          </div>
        </div>

        {/* {subtitle ? (
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
          )} */}
      </section>
    )
  }
}
export default InnerHero
