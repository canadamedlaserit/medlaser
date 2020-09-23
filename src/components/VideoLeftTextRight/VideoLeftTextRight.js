import React from "react"
import { graphql } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"
import styles from "./VideoLeftTextRight.module.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Video from "./Video"

export const fragment = graphql`
  fragment VideoLeftTextRight on WPGraphQL_Page_Sectionfields_Sections_VideoLeftTextRight {
    video {
      url
      image {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    text
    button {
      label
      url
    }
  }
`

const VideoLeftTextRight = ({ video, text, button }) => {
  return (
    <section className={styles.Section}>
      <Container className={styles.Container}>
        <Row>
          <Col md={7}>
            <div className={styles.VideoWrapper}>
              <Video
                imagelink={video.image.imageFile.childImageSharp.fluid.src}
                videolink={video.url}
              />
            </div>
          </Col>
          <Col md={5}>
            {text ? (
              <div
                className={styles.Text}
                dangerouslySetInnerHTML={{ __html: text }}
              ></div>
            ) : (
              ""
            )}
            <div className={styles.Buttons}>
              <AnchorLink to={button.url} className="btn btn-red">
                {button.label}
              </AnchorLink>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <div className={`container `}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 ${styles.TextSide} ${styles.Col}`}>
            <div className={styles.TextSideWrapper}>
              {text ? (
                <div
                  className={styles.Title}
                  dangerouslySetInnerHTML={{ __html: text }}
                ></div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default VideoLeftTextRight
