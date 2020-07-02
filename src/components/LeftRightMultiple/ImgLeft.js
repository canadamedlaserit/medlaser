import React from "react"
import Img from "gatsby-image"

import { AnchorLink } from "gatsby-plugin-anchor-links"

import styles from "./LeftRightMultiple.module.scss"

const ImgLeft = ({ data }) => {
  const { title, content, image, btntext, btnlink } = data
  const fluidImage = image ? image.imageFile.childImageSharp.fluid : null

  return (
    <div className={`row ${styles.Row} ${styles.TextLeft}`}>
      <div
        className={`col-md-5 smallerSide2 ${styles.ImageSide} ${styles.Col}`}
      >
        {fluidImage ? (
          <Img
            alt={image.altText}
            className="gatsby-image-background"
            fluid={fluidImage}
          />
        ) : (
          ""
        )}
      </div>

      <div className={`col-md-7 biggerSide2 ${styles.TextSide} ${styles.Col}`}>
        <div className={styles.TextSideWrapper}>
          {title ? (
            <div
              className={styles.Subtitle}
              dangerouslySetInnerHTML={{ __html: title }}
            ></div>
          ) : (
            ""
          )}

          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          {btntext ? (
            <div className={styles.buttonsWrapper}>
              <AnchorLink to={btnlink} className="btn btn-red">
                {btntext}
              </AnchorLink>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default ImgLeft
