import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./GetPricing.module.scss"

export const fragment = graphql`
  fragment GetPricingSection on WPGraphQL_Page_Sectionfields_Sections_Getpricing {
    titleright
    titleleft
    content
    subtitleleft
    btntext
    btnlink
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

const GetPricing = ({
  titleright,
  titleleft,
  content,
  subtitleleft,
  btntext,
  btnlink,
  image,
}) => {
  const fluidImage = image.imageFile.childImageSharp.fluid

  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <BackgroundImage
            fluid={fluidImage}
            className={`col-md-6 ${styles.Col} ${styles.ImageSide}`}
          >
            <div className={styles.TextWrapper}>
              <h2>{titleleft}</h2>

              <p className={styles.Subtitle}>{subtitleleft}</p>

              <Link to={btnlink} className="btn btn-white-transparent">
                {btntext}
              </Link>
            </div>
            <div className={styles.Overlay}></div>
          </BackgroundImage>

          <div className={`col-md-6 ${styles.Col} ${styles.TextSide}`}>
            <div className={styles.TextWrapper}>
              <h3>{titleright}</h3>
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetPricing
