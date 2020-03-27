import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./ThreeImageLinks.module.scss"

export const fragment = graphql`
  fragment ThreeImageLinksSection on WPGraphQL_Page_Sectionfields_Sections_Threeimagelinks {
    links {
      ... on WPGraphQL_Page_Sectionfields_Sections_Threeimagelinks_links {
        title
        label
        link
        image {
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`

const ThreeImageLinks = ({ links }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          {links.map((link, index) => (
            <div key={index} className={`col-md-4 ${styles.Col}`}>
              <BackgroundImage
                fluid={link.image.imageFile.childImageSharp.fluid}
                className={styles.InsideWrapper}
              >
                <div className={styles.Titles}>
                  <Link to={link.link}>
                    <h3>
                      {link.title}
                      <span>{link.label ? link.label : " "}</span>
                    </h3>
                  </Link>
                </div>
                <Link className={styles.Overlay} to={link.link}></Link>
              </BackgroundImage>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThreeImageLinks
