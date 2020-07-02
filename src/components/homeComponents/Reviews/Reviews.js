import React from "react"
import { graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import ReviewsSlider from "./ReviewsSlider"
import styles from "./Reviews.module.scss"
import VisibilitySensor from "react-visibility-sensor"

export const fragment = graphql`
  fragment ReviewsSection on WPGraphQL_Page_Sectionfields_Sections_Googlereviews {
    titleRight
    titleLeft
    contentRight
    btntext
    btnlink
  }
`

const Reviews = ({ titleRight, titleLeft, contentRight, btntext, btnlink }) => {
  const [isItemVisible, setIsItemVisible] = React.useState(false)
  const onChange = isVisible => {
    if (isVisible) {
      setIsItemVisible(true)
    }
  }

  return (
    <VisibilitySensor
      delayedCall={true}
      scrollCheck={true}
      partialVisibility={"bottom"}
      offset={{
        bottom: -700,
      }}
      onChange={onChange}
    >
      <section className={styles.Section}>
        <div className={`container ${styles.Container}`}>
          <div className={`row`}>
            <div className={`col-md-6 ${styles.LeftSide}`}>
              <div className={styles.InsideWrapper}></div>
              <div
                className={styles.Title}
                dangerouslySetInnerHTML={{ __html: titleLeft }}
              ></div>

              <div>{isItemVisible ? <ReviewsSlider /> : ""}</div>
            </div>

            <div className={`col-md-6 ${styles.RightSide}`}>
              <div className={styles.InsideWrapper}>
                <div
                  className={styles.Title}
                  dangerouslySetInnerHTML={{ __html: titleRight }}
                ></div>
                <div
                  className={styles.Content}
                  dangerouslySetInnerHTML={{ __html: contentRight }}
                ></div>

                <AnchorLink to={btnlink} className="btn btn-small btn-red">
                  {btntext}
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </VisibilitySensor>
  )
}

export default Reviews
