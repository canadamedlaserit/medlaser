import React from "react"
import { graphql } from "gatsby"
import { Row } from "react-bootstrap"
import logo1 from "../../../images/daily-hive.png"
import logo2 from "../../../images/forbes.png"
import logo3 from "../../../images/narcity.png"
import logo4 from "../../../images/z105.png"
import logo5 from "../../../images/toronto-star.png"
import Img from "gatsby-image"
import Swiper from "react-id-swiper"

import styles from "./AsSeen.module.scss"
import { Autoplay } from "swiper/js/swiper.esm"
export const fragment = graphql`
  fragment AsSeenSection on WPGraphQL_Page_Sectionfields_Sections_Asseen {
    logos {
      image {
        altText
        sourceUrl
        imageFile {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
const imageData = [
  {
    src: logo1,
  },
  {
    src: logo2,
  },
  {
    src: logo3,
  },
  {
    src: logo4,
  },
  {
    src: logo5,
  },
]
const AsSeen = props => {
  const params = {
    slidesPerView: 1,
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "bullets",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    spaceBetween: 20,
    breakpoints: {
      // when window width is >= 1200px

      768: {
        slidesPerView: 6,
      },
    },
  }

  console.log(props, "AsSeenSection")
  return (
    <section className={styles.Section}>
      <div className={`container ${styles.Container}}`}>
        <h1>AS SEEN IN</h1>
        <div className={`row ${styles.Row} mt-5`}>
          <div
            className={`col-md-12 ${styles.TextSide} ${styles.Col}`}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className={styles.TextSideWrapper}
              style={{ textAlign: "center", display: "flex", width: "100vw" }}
            >
              <Swiper {...params}>
                {props.logos.map(data => (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Img
                      // className="gatsby-image-background"
                      alt={data.image.altText}
                      fluid={data.image.imageFile.childImageSharp.fluid}
                      className="px-4"
                      style={{
                        width: "200px",
                        height: "40",
                      }}
                      imgStyle={{
                        objectFit: "contain",
                        objectPosition: "50% 50%",
                      }}
                    />
                  </div>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AsSeen
