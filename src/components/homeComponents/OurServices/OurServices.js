import React from "react"
import { graphql, Link } from "gatsby"
import Swiper from "react-id-swiper"
import Img from "gatsby-image"

import styles from "./OurServices.module.scss"

export const fragment = graphql`
  fragment ServicesSection on WPGraphQL_Page_Sectionfields_Sections_Ourservices {
    title
    btntext
    btnlink
    services {
      ... on WPGraphQL_Page_Sectionfields_Sections_Ourservices_services {
        title
        link
        image {
          altText
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 315) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

const OurServices = ({ title, btntext, btnlink, services }) => {
  return (
    <section className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className="col-md-12">
            <h2>{title}</h2>
          </div>
          <div className={`col-md-12 ${styles.ServicesWrapper}`}>
            {services.map((service, index) => (
              <div className={styles.SingleService} key={index}>
                <Link to={service.link}>
                  <Img
                    className={styles.Gimg}
                    alt={service.altText}
                    fluid={service.image.imageFile.childImageSharp.fluid}
                  />
                  <h4>{service.title}</h4>
                </Link>
              </div>
            ))}
            <Link
              className={`btn btn-small btn-black-transparent ${styles.Btn}`}
              to={btnlink}
            >
              {btntext}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
