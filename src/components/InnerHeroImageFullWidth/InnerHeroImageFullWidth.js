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
  let iamgeSrc
  if (image !== null) {
    iamgeSrc = image.imageFile.childImageSharp.fluid
  }
  return (
    <div style={{ backgroundColor: "black" }}>
      <Container fluid className={styles.ourTeamContainer}>
        <div className={styles.ourTeamInner}>
          <Row>
            <Col lg={12} md={12}>
              <div className={styles.ourTeamHead}>
                <div dangerouslySetInnerHTML={{ __html: title }}></div>
              </div>
            </Col>
          </Row>
          <div class={styles.innerCta}>
            <a
              className={`btn btn-red ${styles.innerAnchor}`}
              href={image}
              onClick={handleClick}
            >
              Book Now
            </a>
          </div>
          <Row>
            <Col lg={12} md={12}>
              <div
                className={styles.ourTeamContent}
                dangerouslySetInnerHTML={{ __html: description }}
              ></div>
            </Col>
          </Row>
        </div>
        <div class="InnerHeroImageFullWidth-module--Hatch--1rqaI"></div>
      </Container>
      {title.includes("Our Team") &
      (
        <div className="InnerHeroImage testtingss">
          <div className={styles.ourTeamImgContainer}>
            <div className={styles.ourTeamImgInner}>
              <Img className={styles.ourTeamPersonImg} fluid={iamgeSrc} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default InnerHeroImageFullWidth
