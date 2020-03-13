import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./MainHero.module.scss"

export const fragment = graphql`
  fragment MainHeroSection on WPGraphQL_Page_Sectionfields_Sections_Mainhero {
    title
    subtitle
    btntext1
    btntext2
    backgroundimage {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

const MainHero = ({ title, subtitle, btntext1, btntext2, backgroundimage }) => {
  const fluidImage = backgroundimage.imageFile.childImageSharp.fluid

  return (
    <section className={styles.MainHero}>
      <div className={`container-fluid ${styles.container}`}>
        <div className={`row ${styles.row}`}>
          <BackgroundImage
            className={`col-md-7 biggerSide ${styles.imgSide}`}
            fluid={fluidImage}
          ></BackgroundImage>

          <div className={`col-md-5 smallerSide ${styles.rightSide}`}>
            <div className={styles.rightSideWrapper}>
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
              <div className={styles.buttonsWrapper}>
                <Link to="/" className="btn btn-red">
                  {btntext1}
                </Link>
                <Link to="/" className="btn btn-black-transparent">
                  {btntext2}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainHero
