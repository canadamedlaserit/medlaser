import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./ThreeImageLinks.module.scss"

export const fragment = graphql`
  fragment ThreeImageLinksSection on WPGraphQL_Page_Sectionfields_Sections_Threeimagelinks {
    links {
      ... on WPGraphQL_Page_Sectionfields_Sections_Threeimagelinks_links {
        title
        link
        image {
          sourceUrl
          altText
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
              <div className={styles.InsideWrapper}>
                {link.image ? (
                  <Img
                    alt={link.image.altText}
                    className="gatsby-image-background"
                    fluid={link.image.imageFile.childImageSharp.fluid}
                  />
                ) : (
                  ""
                )}

                <div className={styles.Titles}>
                  <Link to={link.link ? link.link : ""}>
                    <div className={styles.Title} dangerouslySetInnerHTML={{ __html: link.title }}></div>
                  </Link>
                </div>
                <Link
                  className={styles.Overlay}
                  to={link.link ? link.link : ""}
                ></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThreeImageLinks
