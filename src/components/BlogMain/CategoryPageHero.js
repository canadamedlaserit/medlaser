import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "../InnerHeroImageFullWidth/InnerHeroImageFullWidth.module.scss"

export const fragment = graphql`
  fragment InnerHeroImageFullWidthSection2 on WPGraphQL_Page_Sectionfields_Sections_Innerheroimagefullwidth {
    title
    hidestripondevice
    image {
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

const CategoryPageHero = ({ pageName, image, slug }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.RowTop}`}>
          <div className={`col-md-12 ${styles.ImgCol}`}>
            {image ? (
              <Img
                alt={image.altText}
                className="gatsby-image-background"
                fluid={image.imageFile.childImageSharp.fluid}
              />
            ) : (
              ""
            )}

            <div className={styles.innerWrapper}>
            <div>Category</div>
              <h1>{pageName}</h1>
            </div>
            <div className={styles.Overlay}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryPageHero
