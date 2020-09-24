import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

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

      <section className={`${styles.Section} ${styles.Section2}`}>
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
                      <p
                        dangerouslySetInnerHTML={{ __html: plan.price }}
                      ></p>
                    </div>
                  </div>

                  <div className={styles.List} dangerouslySetInnerHTML={{__html: plan.list}}></div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default MembershipServices
