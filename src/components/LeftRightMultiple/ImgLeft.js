import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

import styles from "./LeftRightMultiple.module.scss"

const ImgLeft = ({ data }) => {
  const { title, content, image, btntext, btnlink } = data
  const fluidImage = image ? image.imageFile.childImageSharp.fluid:null

  return (
    <div className={`row ${styles.Row} ${styles.TextLeft}`}>
      <BackgroundImage
        className={`col-md-5 smallerSide2 ${styles.ImageSide} ${styles.Col}`}
        fluid={fluidImage}
      ></BackgroundImage>

      <div className={`col-md-7 biggerSide2 ${styles.TextSide} ${styles.Col}`}>
        <div className={styles.TextSideWrapper}>
          {title ? <h4>{title}</h4> : ""}

          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          {btntext ? (
            <div className={styles.buttonsWrapper}>
              <Link to={btnlink} className="btn btn-red">
                {btntext}
              </Link>
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
