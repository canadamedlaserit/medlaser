import React from "react"
import Swiper from "react-id-swiper"
import Img from "gatsby-image"
import { graphql } from "gatsby"

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
    slidesPerView: 3,
    centeredSlides: true,
    // speed: 300,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 0,
  }
  return (
    <section className={styles.Section}>
      <div className={`${styles.Hatch2} ${styles.Hatch}`}></div>

      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 team-swiper ${styles.Col}`}>
            <Swiper {...params}>
              {teammembers
                ? teammembers.map(({ member }, index) => (
                    <div className={`${styles.SwiperSlide} `} key={index}>
                      <div className={`team-slider-text ${styles.Text}`}>
                        <div>
                          <h3>{member.teamMembersDescription.name}</h3>

                          <div
                            dangerouslySetInnerHTML={{
                              __html: member.teamMembersDescription.description,
                            }}
                          ></div>
                        </div>
                      </div>

                      <Img
                        className={styles.Gimg}
                        alt={member.teamMembersDescription.altText}
                        fluid={
                          member.teamMembersDescription.image.imageFile
                            .childImageSharp.fluid
                        }
                      />
                    </div>
                  ))
                : ""}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSlider
