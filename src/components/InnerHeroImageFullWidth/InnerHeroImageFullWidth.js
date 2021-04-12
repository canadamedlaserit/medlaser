import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Col, Row } from "react-bootstrap"

import styles from "./InnerHeroImageFullWidth.module.scss"

export const fragment = graphql`
  fragment InnerHeroImageFullWidthSection on WPGraphQL_Page_Sectionfields_Sections_Innerheroimagefullwidth {
    title
    description
    hidestripondevice
    image {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`
const handleClick = e => {
  e.preventDefault()
  // let pathname = window.location.pathname.replace("/", "")
  // window.location.href = pathname + "/#contact"
  document
    .getElementById("contact")
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
}
const InnerHeroImageFullWidth = ({
  title,
  description,
  image,
  hidestripondevice,
}) => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Container fluid className={styles.ourTeamContainer}>
        <div className={styles.ourTeamInner}>
          <Row>
            <Col lg={4} md={12}>
              <div className={styles.ourTeamHead}>
                <div dangerouslySetInnerHTML={{ __html: title }}></div>
              </div>
            </Col>
            <Col lg={8} md={12}>
              <div
                className={styles.ourTeamContent}
                dangerouslySetInnerHTML={{ __html: description }}
              ></div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="InnerHeroImage">
        <div className={styles.ourTeamImgContainer}>
          <div className={styles.ourTeamImgInner}>
            <Img
              alt={image.altText}
              className={styles.ourTeamPersonImg}
              fluid={image.imageFile.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className={`cta_content ${image.altText}`}>
          <h2>Canada MedLaser Clinics</h2>
          <p>
            <a
              className="btn btn-mid btn-red"
              href="#contact"
              onClick={handleClick}
            >
              Book Now
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default InnerHeroImageFullWidth
