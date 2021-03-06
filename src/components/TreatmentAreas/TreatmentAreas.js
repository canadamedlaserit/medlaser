import React from "react"
import { graphql } from "gatsby"
import Areas from "./Areas"

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

const TreatmentAreas = ({ title, content, areas }) => {
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-6 ${styles.Col} ${styles.TextSide}`}>
            <div className={styles.TextWrapper}>
              <div className={styles.Title} dangerouslySetInnerHTML={{__html: title}}></div>
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          </div>

          <div className={`col-md-6 ${styles.Col} ${styles.ListSide}`}>
            <div className={styles.InnerWrapper}>
            <ul>
              {areas ? ( <Areas areas={areas} />) : ''}
             </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TreatmentAreas
