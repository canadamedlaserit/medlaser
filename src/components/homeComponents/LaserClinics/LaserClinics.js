import React from "react"
import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styles from "./LaserClinics.module.scss"

export const fragment = graphql`
  fragment LaserClinicsSection on WPGraphQL_Page_Sectionfields_Sections_Laserclinics {
    title
    text
    btntext1
    btntext2
    btnlink1
    btnlink2
    list {
      ... on WPGraphQL_Page_Sectionfields_Sections_Laserclinics_list {
        listitem
      }
    }
    image {
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const LaserClinics = ({
  title,
  text,
  image,
  list,
  btntext1,
  btntext2,
  btnlink1,
  btnlink2,
}) => {
  const fluidImage = image ? image.imageFile.childImageSharp.fluid : false
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-7 biggerSide ${styles.TextSide}`}>
            <div className={styles.TextSideWrapper}>
              <h2>{title}</h2>
              <p>{text}</p>
              <ul className="listType-normal">
                {list.map((single, index) => (
                  <li key={index}>{single.listitem}</li>
                ))}
              </ul>

              <div className={styles.ButtonsWrpper}>
                <Link
                  to={btnlink1}
                  className="btn btn-small btn-white-transparent"
                >
                  {btntext1}
                </Link>
                <Link to={btnlink2} className="btn btn-small btn-red">
                  {btntext2}
                </Link>
              </div>
            </div>
          </div>
          {fluidImage ? (
            <BackgroundImage
              className={`col-md-5 smallerSide ${styles.ImageSide}`}
              fluid={fluidImage}
            ></BackgroundImage>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  )
}

export default LaserClinics
