import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Areas from './Areas'

import styles from "./TreatmentAreas.module.scss"

export const fragment = graphql`
  fragment TreatmentAreasSection on WPGraphQL_Page_Sectionfields_Sections_Treatmentareas {
    title
    content
    areas {
      ... on WPGraphQL_Page_Sectionfields_Sections_Treatmentareas_areas {
        title
        image {
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 102) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`

const TreatmentAreas = ({ title, content, areas }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-6 ${styles.Col} ${styles.TextSide}`}>
            <div className={styles.TextWrapper}>
              <h3>{title}</h3>
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          </div>

          <div className={`col-md-6 ${styles.Col} ${styles.ListSide}`}>
            <div className={styles.InnerWrapper}>

              <Areas areas={areas} />

              {/* {areas.map((area, index) => (
                <div key={index} className={styles.Area}>
                  <Img
                    className={styles.AreaImage}
                    fluid={area.image.imageFile.childImageSharp.fluid}
                  ></Img>
                  <h5>{area.title}</h5>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TreatmentAreas
