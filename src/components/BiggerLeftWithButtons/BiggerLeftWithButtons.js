import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import styles from "./BiggerLeftWithButtons.module.scss"

export const fragment = graphql`
  fragment BiggerLeftWithButtonsSection on WPGraphQL_Page_Sectionfields_Sections_Biggerleftwithbuttons {
    maintitle
    title
    content
    backgroundcolor
    textcolor
    btntext1
    btntext2
    btnlink1
    btnlink2
    image {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

const BiggerLeftWithButtons = ({
  maintitle,
  title,
  content,
  backgroundcolor,
  textcolor,
  btntext1,
  btntext2,
  btnlink1,
  btnlink2,
  image,
}) => {
  const fluidImage = image ? image.imageFile.childImageSharp.fluid : null

  return (
    <section
      style={{ backgroundColor: backgroundcolor }}
      className={styles.Section}
    >
      <div className={`container-fluid `}>
        {maintitle ? (
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-12`}>
              <h2 style={{ color: textcolor }}>{maintitle}</h2>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className={`row ${styles.Row}`}>
          <div
            className={`col-md-7 biggerSide2 ${styles.TextSide} ${styles.Col}`}
          >
            <div className={styles.TextSideWrapper}>
              {title ? <h3 style={{ color: textcolor }}>{title}</h3> : ""}

              <div
                style={{ color: textcolor }}
                className="content text"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>

              <div className={styles.buttonsWrapper}>
                {btntext1 ? (
                  <>
                    {btnlink1.includes("tel") ? (
                      <a href={btnlink1} className="btn btn-mid btn-red">
                        {btntext1}
                      </a>
                    ) : (
                      <AnchorLink to={btnlink1} className="btn btn-mid btn-red">
                        {btntext1}
                      </AnchorLink>
                    )}
                  </>
                ) : (
                  ""
                )}

                {btntext2 ? (
                  <>
                    {btnlink2.includes("tel") ? (
                      <a
                        href={btnlink2}
                        className="btn btn-mid btn-black-transparent"
                      >
                        {btntext2}
                      </a>
                    ) : (
                      <AnchorLink
                        to={btnlink2}
                        className="btn btn-mid btn-black-transparent"
                      >
                        {btntext2}
                      </AnchorLink>
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <BackgroundImage
            className={`col-md-5 smallerSide2 ${styles.ImageSide} ${styles.Col}`}
            fluid={fluidImage}
          ></BackgroundImage>
        </div>
      </div>
    </section>
  )
}

export default BiggerLeftWithButtons
