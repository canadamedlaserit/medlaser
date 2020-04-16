import React from "react"
import { graphql, Link } from "gatsby"

import Swiper from "react-id-swiper"
import Img from "gatsby-image"
import styles from "./OurServicesSlider.module.scss"

export const fragment = graphql`
  fragment OurServicesSliderSection on WPGraphQL_Page_Sectionfields_Sections_Ourservicesslider {
    title
    services {
      ... on WPGraphQL_Page_Sectionfields_Sections_Ourservicesslider_services {
        title
        link
        image {
          altText
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 315) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`

const OurServicesSlider = ({ title, services }) => {
  const params = {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      // when window width is >= 1200px

      768: {
        slidesPerColumn: 1,
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1200: {
        slidesPerColumn: 1,
        slidesPerView: 5,
        spaceBetween: 16,

      },
    },
  }
  return (
    <section className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 ${styles.TextSide} ${styles.Col}`}>
            <div className={styles.TextSideWrapper}>
              <h3
                className={`content text ${styles.Content}`}
                dangerouslySetInnerHTML={{ __html: title }}
              ></h3>
            </div>
          </div>

          <div className={`col-md-12 services-swiper ${styles.SwiperSide}`}>
            <Swiper {...params}>
              {services.map((slide, index) => (
                <div className={styles.SwiperSlide} key={index}>
                  <Img
                    className={styles.Gimg}
                    alt={slide.altText}
                    fluid={slide.image.imageFile.childImageSharp.fluid}
                  />
                  <div className={styles.ContentWrapper}>
                    <Link className={`${styles.OverflowLink}`} to={slide.link}>
                      <h4>{slide.title}</h4>
                    </Link>
                  </div>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServicesSlider
