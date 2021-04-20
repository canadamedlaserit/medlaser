import React from "react"
import { graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Img from "gatsby-image"
import useResizer from "../resizer"

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
const handleClick = e => {
  e.preventDefault()
  document
    .getElementById("contact")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
}

const InnerHero = ({
  title,
  subtitle,
  text,
  btntext1,
  btntext2,
  btnlink1,
  btnlink2,
  backgroundimage,
}) => {
  const isMobile = useResizer() //returns Boolean based on window width-> resizer.js

  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.RowTop}`}>
          <div className={`col-md-6 ${styles.ImgCol}`}>
            {backgroundimage ? (
              <Img
                loading="eager"
                fadeIn={false}
                alt={backgroundimage.altText}
                className={`gatsby-image-background`}
                fluid={backgroundimage.imageFile.childImageSharp.fluid}
              />
            ) : (
              ""
            )}

            <div className={styles.Overlay}></div>

            {isMobile ? <div className={`${styles.Hatch} `}></div> : null}

            {isMobile ? (
              <div
                className={`${styles.Title} ${styles.TitleMobile}`}
                dangerouslySetInnerHTML={{ __html: title }}
              ></div>
            ) : (
              ""
            )}
            <div class={styles.innerCta}>
              <a
                className={`btn btn-red ${styles.innerAnchor}`}
                href="#contact"
                onClick={handleClick}
              >
                Book Now
              </a>
            </div>
          </div>

          <div className={`col-md-6 ${styles.TextCol}`}>
            <div className={styles.innerWrapper}>
              <div style={{ width: "100%" }}>
                {/* issue title rendering  */}
                <div>
                  {!isMobile ? (
                    <div
                      className={`${styles.Title} ${styles.TitleDesktop}`}
                      dangerouslySetInnerHTML={{ __html: title }}
                    ></div>
                  ) : null}
                </div>

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

          {!isMobile ? <div className={`${styles.Hatch} `}></div> : null}
        </div>
      </div>
    </section>
  )
}
export default InnerHero
