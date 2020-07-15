import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Swiper from "react-id-swiper"
import Img from "gatsby-image"

import styles from "./LinkSlider.module.scss"

export const fragment = graphql`
  fragment LinkSliderSection on WPGraphQL_Page_Sectionfields_Sections_Linkslider {
    slides {
      ... on WPGraphQL_Page_Sectionfields_Sections_Linkslider_slides {
        title
        link
        image {
          altText
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`

const LinkSlider = ({ slides }) => {
  const staticData = useStaticQuery(graphql`
    query LinkSliderGlobalQuery {
      wpgraphql {
        page(id: "link-slider-global", idType: URI) {
          sectionFields {
            sections {
              ... on WPGraphQL_Page_Sectionfields_Sections_Linkslider {
                slides {
                  ... on WPGraphQL_Page_Sectionfields_Sections_Linkslider_slides {
                    title
                    link
                    image {
                      altText
                      sourceUrl
                      imageFile {
                        childImageSharp {
                          fluid(quality: 100, maxWidth: 700) {
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
      }
    }
  `)
  const slidesData = slides
    ? slides
    : staticData.wpgraphql.page.sectionFields.sections[0].slides
    ? staticData.wpgraphql.page.sectionFields.sections[0].slides
    : ""

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
    spaceBetween: 16,
    breakpoints: {
      // when window width is >= 1200px

      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  }
  return (
    <section className={styles.Section}>
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12 link-swiper ${styles.SwiperSide}`}>
            <Swiper {...params}>
              {slidesData
                ? slidesData.map((slide, index) => (
                    <div className={styles.SwiperSlide} key={index}>
                      {slide.image ? (
                        <Img
                          className={styles.Gimg}
                          alt={slide.image.altText}
                          fluid={slide.image.imageFile.childImageSharp.fluid}
                        />
                      ) : (
                        ""
                      )}

                      <div className={styles.ContentWrapper}>
                        <h2>{slide.title}</h2>

                        <Link
                          className={`${styles.OverflowLink}`}
                          to={slide.link}
                        ></Link>
                      </div>
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

export default LinkSlider
