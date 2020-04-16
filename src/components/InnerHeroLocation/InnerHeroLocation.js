import React, { Component } from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./InnerHeroLocation.module.scss"

export const fragment = graphql`
  fragment InnerHeroLocationSection on WPGraphQL_Page_Sectionfields_Sections_Innerherolocation {
    title
    subtitle
    text
    backgroundimage {
      sourceUrl
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

class InnerHeroLocation extends Component {
  render() {
    const { title, subtitle, text, backgroundimage } = this.props
    console.log(subtitle)
    return (
      <section className={styles.Section}>
        <div className={`container-fluid ${styles.Container}`}>
          <div className={`row ${styles.RowTop}`}>
            {backgroundimage ? (
              <BackgroundImage
                className={`col-md-12 ${styles.ImgCol}`}
                fluid={backgroundimage.imageFile.childImageSharp.fluid}
                critical
              >
                <div className={styles.innerWrapper}>
                  <h1>{title}</h1>
                </div>
                <div className={styles.Overlay}></div>
                <div className={styles.Hatch}></div>
              </BackgroundImage>
            ) : (
              ""
            )}
          </div>

          <div className={`row ${styles.RowBot}`}>
            <div className={`col-md-12 ${styles.TextCol}`}>
              <h3 dangerouslySetInnerHTML={{ __html: subtitle }}></h3>

              <div
                className={styles.Text}
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default InnerHeroLocation
