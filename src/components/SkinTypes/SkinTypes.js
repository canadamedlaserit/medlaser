import React from "react"
import { graphql } from "gatsby"

import styles from "./SkinTypes.module.scss"

export const fragment = graphql`
  fragment SkinTypesSection on WPGraphQL_Page_Sectionfields_Sections_Skintypes {
    title
    content
    tones {
      ... on WPGraphQL_Page_Sectionfields_Sections_Skintypes_tones {
        title
        images {
          ... on WPGraphQL_Page_Sectionfields_Sections_Skintypes_tones_images {
            image {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`

const SkinTypes = ({ title, content, tones }) => {
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
              <div className={styles.InnerRow}>
                {tones.map((tone, index) => {
                  return (
                    <div key={index} className={styles.Tone}>
                      {tone.title ? <h5>{tone.title}</h5> : ""}
                      <div className={styles.Images}>
                        {tone.images.map(({ image }, index) => (
                          <img
                            key={index}
                            src={image ? image.sourceUrl : ""}
                            alt={image ? image.altText : ""}
                          />
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkinTypes
