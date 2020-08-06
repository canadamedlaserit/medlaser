import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Swiper from "react-id-swiper"

import styles from "./TextAndThreeImages.module.scss"

export const fragment = graphql`
  fragment TextAndThreeImagesSection on WPGraphQL_Page_Sectionfields_Sections_Textandthreeimages {
    content
    backgroundcolor
    textcolor
    bottomlinecolor
    image1 {
      altText
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 550) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
    image2 {
      altText
      sourceUrl
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 550) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
    image3 {
      sourceUrl
      altText
      imageFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 550) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`

const TextAndThreeImages = ({
  content,
  backgroundcolor,
  textcolor,
  bottomlinecolor,
  image1,
  image2,
  image3,
}) => {
  const params = {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    spaceBetween: 20,
  }

  return (
    <section
      style={{
        backgroundColor: backgroundcolor,
        paddingBottom: backgroundcolor === bottomlinecolor ? "120px" : "0",
      }}
      className={styles.Section}
    >
      <div className={`container-fluid ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className={`col-md-12  `}>
            <div className={styles.TextWrapper}>
              <div
                style={{ color: textcolor }}
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </div>

          <div className={`${styles.Col} col-md-4`}>
            {image1 ? (
              <Img
                className={styles.Gimg}
                alt={image1.altText}
                fluid={image1.imageFile.childImageSharp.fluid}
              />
            ) : (
              ""
            )}
          </div>

          <div className={`${styles.Col} col-md-4`}>
            {image2 ? (
              <Img
                className={styles.Gimg}
                alt={image2.altText}
                fluid={image2.imageFile.childImageSharp.fluid}
              />
            ) : (
              ""
            )}
          </div>

          <div className={`${styles.Col} col-md-4`}>
            {image3 ? (
              <Img
                className={styles.Gimg}
                alt={image3.altText}
                fluid={image3.imageFile.childImageSharp.fluid}
              />
            ) : (
              ""
            )}
          </div>

          <div
            className={`col-md-12 before-after-swiper ${styles.SwiperWrapper}`}
          >
            <Swiper {...params}>
              <div className={styles.SwiperSlide}>
                <div className={styles.ImageWrapper}>
                  {image1 ? (
                    <Img
                      className={styles.Gimg}
                      alt={image1.altText}
                      fluid={image1.imageFile.childImageSharp.fluid}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className={styles.SwiperSlide}>
                <div className={styles.ImageWrapper}>
                  {image2 ? (
                    <Img
                      className={styles.Gimg}
                      alt={image2.altText}
                      fluid={image2.imageFile.childImageSharp.fluid}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className={styles.SwiperSlide}>
                <div className={styles.ImageWrapper}>
                  {image3 ? (
                    <Img
                      className={styles.Gimg}
                      alt={image3.altText}
                      fluid={image3.imageFile.childImageSharp.fluid}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: bottomlinecolor }}
        className={styles.BotLine}
      ></div>
    </section>
  )
}

export default TextAndThreeImages
