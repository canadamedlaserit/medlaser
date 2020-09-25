import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Swiper from "react-id-swiper"

import styles from "./MembershipServices.module.scss"

export const fragment = graphql`
  fragment MembershipServices on WPGraphQL_Page_Sectionfields_Sections_MembershipServices {
    title
    plans {
      title
      price
      list
      button {
        label
        url
      }
      image {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 140) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const MembershipServices = ({ title, plans }) => {
  const params = {
    slidesPerView: 1,
    initialSlide: 1,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 10,
  }

  return (
    <>
      <section className={`${styles.Section} ${styles.Section1}`}>
        <Container className={styles.Container}>
          <Row className={styles.Top}>
            <div
              className={styles.Title}
              dangerouslySetInnerHTML={{ __html: title }}
            ></div>
          </Row>
          {/* <Row className={styles.Bot}>
          {plans.map((plan, i) => (
            <Col>{i}</Col>
          ))}
        </Row> */}
        </Container>
      </section>

      <section
        className={`${styles.Section} ${styles.Section2} ${styles.Desktop}`}
      >
        <Container className={styles.Container}>
          <Row className={styles.Bot}>
            {plans.map((plan, i) => (
              <Col className={styles.PlanCol}>
                <div className={styles.Plan}>
                  <div className={styles.Header}>
                    <div>
                      <Img
                        className={styles.Image}
                        alt={plan.image.altText}
                        fluid={plan.image.imageFile.childImageSharp.fluid}
                      />
                    </div>
                    <div>
                      <h3 dangerouslySetInnerHTML={{ __html: plan.title }}></h3>
                      <p>
                        {plan.price} <span>/month</span>
                      </p>
                    </div>
                  </div>

                  <div
                    className={styles.List}
                    dangerouslySetInnerHTML={{ __html: plan.list }}
                  ></div>

                  <div className={styles.Buttons}>
                    <Link to={plan.button.url} className="btn btn-red">
                      {plan.button.label}
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section
        className={`${styles.Section} ${styles.Section2} ${styles.Tablet}`}
      >
        <div className={`${styles.Swiper} membership-swiper`}>
          <Swiper className={styles.SwiperSlider} {...params}>
            {plans.map((plan, index) => (
              <div className={styles.SwiperSlide} key={index}>
                <div className={styles.PlanCol}>
                  <div className={styles.Plan}>
                    <div className={styles.Header}>
                      <div>
                        <Img
                          className={styles.Image}
                          alt={plan.image.altText}
                          fluid={plan.image.imageFile.childImageSharp.fluid}
                        />
                      </div>
                      <div>
                        <h3
                          dangerouslySetInnerHTML={{ __html: plan.title }}
                        ></h3>
                        <p>
                          {plan.price} <span>/month</span>
                        </p>
                      </div>
                    </div>

                    <div
                      className={styles.List}
                      dangerouslySetInnerHTML={{ __html: plan.list }}
                    ></div>

                    <div className={styles.Buttons2}>
                      <Link to={plan.button.url} className="btn btn-red">
                        {plan.button.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default MembershipServices
