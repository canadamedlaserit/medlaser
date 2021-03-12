import React from "react"
import Swiper from "react-id-swiper"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { Container, Col, Row } from "react-bootstrap"
// import teamIcon from "../images/contraceptive.svg"
import teamIcon from "../../images/contraceptive.svg"

import styles from "./TeamSlider.module.scss"

export const fragment = graphql`
  fragment TeamSliderSection on WPGraphQL_Page_Sectionfields_Sections_Teamslider {
    teamcategory
    teammembers {
      ... on WPGraphQL_Page_Sectionfields_Sections_Teamslider_teammembers {
        member {
          ... on WPGraphQL_Team {
            title
            teamMembersDescription {
              name
              position
              description
              image {
                sourceUrl
                altText
                imageFile {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 600) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const TeamSlider = ({ teamcategory, teammembers }) => {
  const params = {
    slidesPerView: 1,
    centeredSlides: false,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 0,
    breakpoints: {
      // when window width is >= 1200px

      768: {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
      },
    },
    renderPrevButton: () => (
      <div className="swiper-button-prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25.432"
          height="50.865"
          viewBox="0 0 25.432 50.865"
        >
          <g transform="translate(153.435 50.865) rotate(180)">
            <g transform="translate(128.003 0)">
              <path
                d="M153.141,24.7,129.828.327A1.06,1.06,0,1,0,128.3,1.792l22.612,23.641L128.3,49.073a1.06,1.06,0,0,0,1.532,1.465l23.314-24.373A1.062,1.062,0,0,0,153.141,24.7Z"
                transform="translate(-128.003 0)"
              />
            </g>
          </g>
        </svg>
      </div>
    ),
    renderNextButton: () => (
      <div className="swiper-button-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16.325"
          height="34.982"
          viewBox="0 0 16.325 34.982"
        >
          <defs></defs>x
          <path
            d="M144.139,16.987,129.174.225A.65.65,0,0,0,128.212.2a.767.767,0,0,0-.021,1.031l14.515,16.259L128.191,33.75a.767.767,0,0,0,.021,1.031.649.649,0,0,0,.962-.023L144.139,18A.768.768,0,0,0,144.139,16.987Z"
            transform="translate(-128.003 0)"
          />
        </svg>
      </div>
    ),
  }
  // console.log(styles)
  return (
    <div style={{ backgroundColor: "black" }}>
      <Container fluid className={styles.ourTeamPersonContainer}>
        <div className={styles.ourTeamPersonInner}>
          <Row>
            {teammembers
              ? teammembers.map(({ member }, index) => (
                  <Col lg={4} sm={6}>
                    <div>
                      {member.teamMembersDescription.image ? (
                        <Img
                          className={styles.ourTeamPersonImg}
                          alt={member.teamMembersDescription.image.altText}
                          fluid={
                            member.teamMembersDescription.image.imageFile
                              .childImageSharp.fluid
                          }
                        />
                      ) : (
                        ""
                      )}
                      <p className={styles.ourTeamPersonName}>
                        {member.teamMembersDescription.name}
                      </p>
                      <p className={styles.ourTeamPersonDesig}>
                        {member.teamMembersDescription.position}
                      </p>
                    </div>
                  </Col>
                ))
              : ""}
          </Row>
        </div>
      </Container>
      <Container fluid className={styles.ourTeamInfo}>
        <div className={styles.ourTeamInfoIcon}>
          <img src={teamIcon} />
        </div>
        <h1 className={styles.ourTeamInfoHead}>
          Want to become a part of our team?
        </h1>
        <p>Write us on our email maple@canadamedlaser.ca</p>
      </Container>
    </div>
  )
}

export default TeamSlider
