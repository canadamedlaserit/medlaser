import React from "react"
import { graphql } from "gatsby"
import Areas from "./Areas"

import styles from "./TreatmentAreas2.module.scss"

export const fragment = graphql`
  fragment TreatmentAreas2Section on WPGraphQL_Page_Sectionfields_Sections_Treatmentareas2 {
    title
    areas {
      ... on WPGraphQL_Page_Sectionfields_Sections_Treatmentareas2_areas {
        title
        image {
          sourceUrl
          altText
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
    areas2 {
      ... on WPGraphQL_Page_Sectionfields_Sections_Treatmentareas2_areas2 {
        title
        image {
          sourceUrl
          altText
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

const TreatmentAreas2 = ({ title, areas, areas2 }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 ${styles.Col}`}>
            <div className={styles.TextWrapper}>
              <h3>{title}</h3>
            </div>
          </div>

          <div className={`col-md-6 ${styles.Col} ${styles.ListSide}`}>
            <div className={styles.InnerWrapper}>
              <Areas areas={areas} />
            </div>
          </div>

          <div className={`col-md-6 ${styles.Col} ${styles.ListSide}`}>
            <div className={styles.InnerWrapper}>
              <Areas areas={areas2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TreatmentAreas2
