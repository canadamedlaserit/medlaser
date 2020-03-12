import React from "react"
import { graphql, Link } from "gatsby"
import Swiper from "react-id-swiper"
import Img from "gatsby-image"

import styles from "./BeforeAfter.module.scss"

export const fragment = graphql`
  fragment BeforeAfterSection on WPGraphQL_Page_Sectionfields_Sections_BeforeAfter {
    title
    subtitle
    btntext
    btnlink
    slides {
      ... on WPGraphQL_Page_Sectionfields_Sections_BeforeAfter_slides {
        title
        content
        image {
          altText
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 752) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const BeforeAfter = ({ title, subtitle, btntext, slides }) => {
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

  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 ${styles.Titles}`}>
            <h2>{title}</h2>
            <p className={styles.Subtitle}>{subtitle}</p>
            <Link
              className={`btn btn-small btn-black-transparent ${styles.Btn}`}
              to="/"
            >
              {btntext}
            </Link>
          </div>
          <div
            className={`col-md-12 before-after-swiper ${styles.SwiperWrapper}`}
          >
            <Swiper {...params}>
              {slides.map((slide, index) => (
                <div className={styles.SwiperSlide} key={index}>
                  <div className={styles.ImageWrapper}>
                    <Img
                      className={styles.Gimg}
                      alt={slide.altText}
                      fluid={slide.image.imageFile.childImageSharp.fluid}
                    />
                    <div className={styles.Overlay}></div>
                    <div className={styles.Divider}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="621.621"
                        viewBox="0 0 28 621.621"
                      >
                        <defs></defs>
                        <g transform="translate(-0.058)">
                          <line
                            className={styles.a}
                            y2="621.621"
                            transform="translate(14.848)"
                          />
                          <rect
                            className={styles.b}
                            width="28"
                            height="25"
                            transform="translate(0.058 298.811)"
                          />
                          <g transform="translate(20.082 305.174)">
                            <path
                              className={styles.c}
                              d="M133.574,5.865,128.407.078a.224.224,0,0,0-.332-.008.265.265,0,0,0-.007.356l5.011,5.614-5.011,5.614a.265.265,0,0,0,.007.356.224.224,0,0,0,.332-.008l5.167-5.787A.265.265,0,0,0,133.574,5.865Z"
                              transform="translate(-128.003 0)"
                            />
                          </g>
                          <path
                            className={styles.c}
                            d="M5.571,5.865.4.078A.224.224,0,0,0,.072.07.265.265,0,0,0,.065.425L5.076,6.039.065,11.653a.265.265,0,0,0,.007.356A.224.224,0,0,0,.4,12L5.571,6.213A.265.265,0,0,0,5.571,5.865Z"
                            transform="translate(8.809 317.252) rotate(180)"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>

                  <div className={styles.ContentWrapper}>
                    <h4>{slide.title}</h4>
                    <p>{slide.content}</p>
                  </div>
                </div>
              ))}
            </Swiper>
          </div>
          <Link
            className={`btn btn-small btn-black-transparent ${styles.Btn2}`}
            to="/"
          >
            {btntext}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
