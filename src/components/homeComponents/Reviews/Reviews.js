import React from "react"
import { graphql, Link } from "gatsby"

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

class Reviews extends React.Component {
  render() {
    const { titleRight, titleLeft, contentRight, btntext, btnlink } = this.props

    return (
      <section className={styles.Section}>
        <div className={`container ${styles.Container}`}>
          <div className={`row ${styles.Row}`}>
            <div className={`col-md-6 ${styles.LeftSide}`}>
              <div className={styles.InsideWrapper}></div>
              <h2 dangerouslySetInnerHTML={{ __html: titleLeft }}></h2>
            </div>

            <div className={`col-md-6 ${styles.RightSide}`}>
              <div className={styles.InsideWrapper}>
                <h2 dangerouslySetInnerHTML={{ __html: titleRight }}></h2>
                <p>{contentRight}</p>
                <Link to={btnlink} className="btn btn-small btn-red">
                  {btntext}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Reviews
