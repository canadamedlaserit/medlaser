import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import styles from "./HalfImageRedBtn.module.scss"

export const fragment = graphql`
  fragment HalfImageRedBtnSection on WPGraphQL_Page_Sectionfields_Sections_Halfimageredbtn {
    texttitle
    textcontent
    imagetitle
    imagecontent
    imagecontentlight
    btntext
    btnlink
    imageposition
    backgroundcolor
    textcolor
    image {
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

class HalfImageRedBtn extends Component {
  render() {
    const {
      texttitle,
      textcontent,
      imagetitle,
      imagecontent,
      imagecontentlight,
      btntext,
      btnlink,
      imageposition,
      backgroundcolor,
      textcolor,
      image,
    } = this.props

    const fluidImage = image ? image.imageFile.childImageSharp.fluid : null

    // not needed
    const Row = styled.div`
      @media only screen and (max-width: 767px) {
        flex-direction: ${imagecontent ? "" : "column"} !important;
      }
    `

    return (
      <section
        style={{ backgroundColor: backgroundcolor, color: textcolor }}
        className={styles.Section}
      >
        <div className={`container-fluid `}>
          <div className={styles.Hatch}></div>
          <Row
            style={{
              flexDirection: imageposition
                ? imageposition === "left"
                  ? `row-reverse`
                  : ""
                : "",
            }}
            className={`row ${styles.Row}`}
          >
            <div className={`col-md-6 ${styles.TextSide} ${styles.Col}`}>
              <div
                style={{
                  marginRight: imageposition
                    ? imageposition === "left"
                      ? `auto`
                      : "0"
                    : "",
                  marginLeft: imageposition
                    ? imageposition === "left"
                      ? `0`
                      : "auto"
                    : "",
                }}
                className={styles.InnerWrapper}
              >
                {texttitle ? (
                  <div
                    className={styles.TextTitle}
                    dangerouslySetInnerHTML={{ __html: texttitle }}
                  ></div>
                ) : (
                  ""
                )}

                {textcontent ? (
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: textcontent }}
                  ></div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className={`col-md-6 ${styles.ImageSide} ${styles.Col}`}>
              {fluidImage ? (
                <Img
                  alt={image.altText}
                  className="gatsby-image-background"
                  fluid={fluidImage}
                />
              ) : (
                ""
              )}

              <div
                style={{
                  marginRight: imageposition
                    ? imageposition === "left"
                      ? `0`
                      : "auto"
                    : "",
                  marginLeft: imageposition
                    ? imageposition === "left"
                      ? `auto`
                      : "0"
                    : "",
                }}
                className={styles.InnerWrapper}
              >
                {imagetitle ? (
                  <div
                    className={styles.ImageTitle}
                    dangerouslySetInnerHTML={{ __html: imagetitle }}
                  ></div>
                ) : (
                  ""
                )}

                {imagecontent ? (
                  <div
                    className={styles.ImageContent}
                    dangerouslySetInnerHTML={{ __html: imagecontent }}
                  ></div>
                ) : (
                  ""
                )}

                {imagecontentlight ? (
                  <div
                    className={styles.ImageContentLight}
                    dangerouslySetInnerHTML={{ __html: imagecontentlight }}
                  ></div>
                ) : (
                  ""
                )}
                {btntext ? (
                  <div className={styles.buttonsWrapper}>
                    <AnchorLink to={btnlink} className="btn btn-red">
                      {btntext}
                    </AnchorLink>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {imagecontent || imagecontentlight ? (
                <div className={` ${styles.Overlay}`}></div>
              ) : (
                ""
              )}
              <div className={`${styles.Hatch2} ${styles.Hatch}`}></div>
            </div>
          </Row>
        </div>
      </section>
    )
  }
}
export default HalfImageRedBtn
