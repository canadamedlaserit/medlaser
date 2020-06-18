import React from "react"
import CategoryList from "../../components/CategoryList"
import Img from "gatsby-image"

import styles from "../../components/BlogMain/BlogMain.module.scss"

const MemberMain = ({ data }) => {
  return (
    <article className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className="row">
          <CategoryList showOnDevice="mobile" />

          <div className="col-md-12">
            <div className={styles.MemberWrapper}>
              <div>
                {data ? (
                  <div className={styles.Entry}>
                    <Img
                      className={styles.Image}
                      fluid={data.image.imageFile.childImageSharp.fluid}
                    />
                    <h3>{data.name}</h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: data.description }}
                    ></div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <CategoryList showOnDevice="desktop" />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default MemberMain
