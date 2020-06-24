import React, { Component } from "react"
import { graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
// import ReviewsSlider from './ReviewsSlider'

import styles from "./Reviews.module.scss"

export const fragment = graphql`
  fragment ReviewsSection on WPGraphQL_Page_Sectionfields_Sections_Googlereviews {
    titleRight
    titleLeft
    contentRight
    btntext
    btnlink
  }
`

class Reviews extends Component {
  render() {
    const { titleRight, titleLeft, contentRight, btntext, btnlink } = this.props

    return (
      <section className={styles.Section}>
        <div className={`container ${styles.Container}`}>
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-6 ${styles.LeftSide}`}>
              <div className={styles.InsideWrapper}></div>
              <h2 dangerouslySetInnerHTML={{ __html: titleLeft }}></h2>
              {/* <ReviewsSlider /> */}
            </div>

            <div className={`col-md-6 ${styles.RightSide}`}>
              <div className={styles.InsideWrapper}>
                <h2 dangerouslySetInnerHTML={{ __html: titleRight }}></h2>
                <p>{contentRight}</p>
                <AnchorLink to={btnlink} className="btn btn-small btn-red">
                  {btntext}
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Reviews
