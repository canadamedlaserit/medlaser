import React from "react"
import { graphql, Link } from "gatsby"
import Swiper from "react-id-swiper"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import styles from "./Specials.module.scss"

export const fragment = graphql`
  fragment SpecialsSection on WPGraphQL_Page_Sectionfields_Sections_Homeourspecials {
    title
    text
    btntext
    slides {
      ... on WPGraphQL_Page_Sectionfields_Sections_Homeourspecials_slides {
        image {
          altText
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 354) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`

const Specials = ({ title, text, btntext, slides }) => {
  const params = {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 20,
    breakpoints: {
      // when window width is >= 1200px

      768: {
        slidesPerView: "auto",
      },
    },
  }
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-4 ${styles.TextSide}`}>
            <h2>{title}</h2>
            <p>{text}</p>
            <Link
              className={`btn btn-small btn-white-transparent ${styles.Btn}`}
              to="/specials/"
            >
              {btntext}
            </Link>
          </div>
          <div className={`col-md-8 special-swiper ${styles.SwiperSide}`}>
            <Swiper {...params}>
              {slides.map((slide, index) => (
                <div className={styles.SwiperSlide} key={index}>
                  {slide.image ? (
                    <AnchorLink to="/#contact">
                      <Img
                        className={styles.Gimg}
                        alt={slide.image.altText}
                        fluid={slide.image.imageFile.childImageSharp.fluid}
                      />
                    </AnchorLink>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </Swiper>
            <Link
              className={`btn btn-small btn-white-transparent ${styles.Btn_bottom}`}
              to="/specials/"
            >
              {btntext}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specials
