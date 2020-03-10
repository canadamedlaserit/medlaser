import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./LookYounger.module.scss"

export const fragment = graphql`
  fragment LookYoungerSection on WPGraphQL_Page_Sectionfields_Sections_Lookyounger {
    title
    btnlink
    btntext
    image {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    list {
      ... on WPGraphQL_Page_Sectionfields_Sections_Lookyounger_list {
        listitem
      }
    }
  }
`

const LookYounger = ({ title, btntext, btnlink, image, list }) => {
  const fluidImage = image.imageFile.childImageSharp.fluid

  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <BackgroundImage
            className={`col-md-5 smallerSide ${styles.ImageSide}`}
            fluid={fluidImage}
          ></BackgroundImage>
          <div className={`col-md-7 biggerSide ${styles.TextSide}`}>
            <div className={styles.TextInside}>
              <h2>{title}</h2>

              <ul className="listType-normal">
                {list.map((single, index) => (
                  <li key={index}>{single.listitem}</li>
                ))}
              </ul>
              <Link to={btnlink} className="btn btn-small btn-red">
                {btntext}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LookYounger
