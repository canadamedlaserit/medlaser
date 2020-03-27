import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./TwoSidesLinks.module.scss"

export const fragment = graphql`
  fragment TwoSidesLinksSection on WPGraphQL_Page_Sectionfields_Sections_Twosideslinks {
    title1
    title2
    linktext1
    linktext2
    link1
    link2
    image1 {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 960) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
    image2 {
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

const TwoSidesLinks = ({
  title1,
  title2,
  linktext1,
  linktext2,
  link1,
  link2,
  image1,
  image2,
}) => {
  const fluidImage1 = image1.imageFile.childImageSharp.fluid
  const fluidImage2 = image2.imageFile.childImageSharp.fluid

  return (
    <section className={styles.Section}>
      <div className={`container-fluid `}>
        <div className={`row ${styles.Row}`}>
          <BackgroundImage
            className={`col-md-6 ${styles.Col}`}
            fluid={fluidImage1}
          >
            <div className={styles.InsideWrapper}>
              <div className={styles.Inside}>
                <Link to={link1}>
                  <h3>{title1}</h3>
                </Link>
                <Link className={`transition ${styles.ReadMore}`} to={link1}>
                  {linktext1}
                </Link>
              </div>
            </div>

            <Link to={link1} className={styles.Overlay}></Link>
          </BackgroundImage>

          <BackgroundImage
            className={`col-md-6 ${styles.Col}`}
            fluid={fluidImage2}
          >
            <div className={styles.InsideWrapper}>
              <div className={styles.Inside}>
                <Link to={link1}>
                  <h3>{title2}</h3>
                </Link>
                <Link className={`transition ${styles.ReadMore}`} to={link2}>
                  {linktext2}
                </Link>
              </div>
            </div>

            <Link to={link2} className={styles.Overlay}></Link>
          </BackgroundImage>
        </div>
      </div>
    </section>
  )
}

export default TwoSidesLinks
