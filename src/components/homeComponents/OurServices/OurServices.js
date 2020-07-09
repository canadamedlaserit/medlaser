import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./OurServices.module.scss"

export const fragment = graphql`
  fragment ServicesSection on WPGraphQL_Page_Sectionfields_Sections_Ourservices {
    title
    btntext
    btnlink
    btntext2
    btnlink2
    services {
      ... on WPGraphQL_Page_Sectionfields_Sections_Ourservices_services {
        title
        link
        image {
          altText
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 240) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`

const OurServices = ({
  title,
  btntext,
  btnlink,
  services,
  btntext2,
  btnlink2,
}) => {
  return (
    <section className={styles.Section}>
      <div className={`container ${styles.Container}`}>
        <div className={`row ${styles.Row}`}>
          <div className="col-md-12">
            <div
              className={styles.Title}
              dangerouslySetInnerHTML={{ __html: title }}
            ></div>
          </div>
          <div className={`col-md-12 ${styles.ServicesWrapper}`}>
            {services
              ? services.map((service, index) => (
                  <div className={styles.SingleService} key={index}>
                    <Link to={service.link}>
                      {service.image ? (
                        <Img
                          className={styles.Gimg}
                          alt={service.image.altText}
                          fluid={service.image.imageFile.childImageSharp.fluid}
                        />
                      ) : (
                        ""
                      )}

                      <h3 className={styles.TitleService}>{service.title}</h3>
                    </Link>
                  </div>
                ))
              : null}
            <div className={styles.BtnWrapper}>
              <Link
                className={`btn btn-small btn-red ${styles.Btn}`}
                to={btnlink}
              >
                {btntext}
              </Link>

              <Link
                className={`btn btn-small btn-black-transparent ${styles.Btn}`}
                to={btnlink2}
              >
                <h3>{btntext2}</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
