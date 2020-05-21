import React, { Component } from "react"
import Img from "gatsby-image"

import styles from "./BeforeAfterTabs.module.scss"

class GalleryComponent extends Component {
  render() {
    const { category, results } = this.props

    return (
      <>
        {results.map((result, index) => {
          if (
            result.terms.filter(e => e.name === category.node.name).length > 0
          ) {
            return (
              <div className={styles.SpecialWrapper} key={index}>
                <div className={styles.ImageSide}>
                  {result.resultsFields.image ? (
                    <Img
                      fluid={
                        result.resultsFields.image.imageFile.childImageSharp
                          .fluid
                      }
                    />
                  ) : (
                    ""
                  )}
                </div>

                <div className={styles.TextSide}>
                  <h3>{result.resultsFields.title}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: result.resultsFields.description,
                    }}
                  ></div>
                </div>
              </div>
            )
          } else {
            return null
          }
        })}
      </>
    )
  }
}

export default GalleryComponent
