import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import React, { useState } from "react"
import { Col, Row, Tab, Tabs } from "react-bootstrap"
import "./locationOurTreatment.scss"

export const fragment = graphql`
  fragment OurtreatmentsLocation on WPGraphQL_Page_Sectionfields_Sections_OurtreatmentsLocation {
    fieldGroupName
    title
    ourTreatmentMenu {
      menuId
      menuTitle
      menuHeader
      menuDiscription
      btnText
      btnLink
      image {
        sourceUrl
        altText
        imageFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
/**/
const LocationOurTreatment = props => {
  const [key, setKey] = useState("Laser_Hair_Removal")
  return (
    <section id="LocationOurTreatment">
      <div
        className="titleWrapper"
        dangerouslySetInnerHTML={{ __html: props?.title }}
      />
      <div style={{ marginTop: "5rem" }}>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey(k)}
          className="tabsWrapper"
        >
          {props.ourTreatmentMenu.map(data => (
            <Tab eventKey={data.menuId} title={data.menuTitle}>
              <div>
                <Row
                  className="mainRowWrapper"
                  style={{ marginLeft: "0px", marginRight: "0px" }}
                >
                  <Col lg={5} md={5} sm={12}>
                    <div className="imgWrapper">
                      <Img
                        alt={data?.image?.altText}
                        className="gatsby-image-background"
                        fluid={data?.image?.imageFile?.childImageSharp?.fluid}
                        style={{ objectFit: "none" }}
                      />
                    </div>
                  </Col>
                  <Col lg={7} md={7} sm={12} className="contentWrapper">
                    <div className="menuContentWrapper">
                      <div
                        dangerouslySetInnerHTML={{ __html: data?.menuHeader }}
                      />

                      <div
                        dangerouslySetInnerHTML={{
                          __html: data?.menuDiscription,
                        }}
                      />

                      <div className="Btn_wrapper">
                        <AnchorLink
                          to={data?.btnLink}
                          className="btn btn-mid btn-red"
                          //style={{ margin: "0px" }}
                        >
                          {data?.btnText}
                        </AnchorLink>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default LocationOurTreatment
/* <Tab eventKey="home" title="Home">
            hello
          </Tab>
          <Tab eventKey="profile" title="Profile">
            profile
          </Tab>
          <Tab eventKey="contact" title="Contact">
            contact
          </Tab> */
