import React from "react"
import { graphql, Link } from "gatsby"
import Swiper from "react-id-swiper"
import Img from "gatsby-image"

import styles from "./Specials.module.scss"

export const fragment = graphql`
  fragment SpecialsSection on WPGraphQL_Page_Sectionfields_Sections_Homeourspecials {
    title
    text
    btntext
    slides {
      ... on WPGraphQL_Page_Sectionfields_Sections_Homeourspecials_slides {
        title
        text
        price
        label
        image {
          altText
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 454) {
                ...GatsbyImageSharpFluid_withWebp
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
    slidesPerView: "auto",
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
  }
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-4 ${styles.TextSide}`}>
            <h2>{title}</h2>
            <p>{text}</p>
            <Link className={`btn btn-small btn-white-transparent ${styles.Btn}`} to="/">
              {btntext}
            </Link>
          </div>
          <div className={`col-md-8 ${styles.SwiperSide}`}>
            <Swiper {...params}>
              {slides.map((slide, index) => (
                <div className={styles.SwiperSlide} key={index}>
                  <Img
                    className={styles.Gimg}
                    alt={slide.altText}
                    fluid={slide.image.imageFile.childImageSharp.fluid}
                  />
                  <div className={styles.ContentWrapper}>
                    <span className={styles.Price}>
                      {slide.price}
                      <div className={styles.Label}>{slide.label}</div>
                    </span>

                    <span className={styles.Text}>
                      <h5>{slide.title}</h5>
                      <p>{slide.text}</p>
                    </span>
                  </div>
                </div>
              ))}
            </Swiper>
            <Link className={`btn btn-small btn-white-transparent ${styles.Btn_bottom}`} to="/">
              {btntext}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Specials
