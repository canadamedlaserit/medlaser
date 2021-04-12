import React, { useState } from "react"
import { graphql } from "gatsby"
import "./locationSpecificHeroBrand.scss"
import { Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
//icon
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Row } from "react-bootstrap"
import { Modal } from "react-bootstrap"

export const fragment = graphql`
  fragment Locationspecificherobrand on WPGraphQL_Page_Sectionfields_Sections_Locationspecificherobrand {
    btnCall
    btnCallLink
    btnPromo
    btnPromoLink
    description
    title
  }
`

const LocationSpecificHeroBrand = ({
  btnCall,
  btnPromo,
  description,
  title,
  btnPromoLink,
  btnCallLink,
}) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <section id="LocationHeroBrand">
      <div className="brandWrapper">
        <Col lg={5} md={9} sm={12} className="mainWrapper">
          <div
            className="titleWrapper"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <div
            className="disc"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div>
            <Row
              className="Btn_rowWrapper"
              style={{ marginLeft: "0px", marginRight: "0px" }}
            >
              <Col lg={5} md={5} sm={12}>
                <AnchorLink className="PhoneWrapper callBtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25.203"
                    height="25.25"
                    viewBox="0 0 25.203 25.25"
                  >
                    <path
                      className="PhoneSvg"
                      d="M26.369,20.405v3.5a2.333,2.333,0,0,1-2.543,2.333,23.087,23.087,0,0,1-10.068-3.581,22.748,22.748,0,0,1-7-7A23.087,23.087,0,0,1,3.177,5.543,2.333,2.333,0,0,1,5.5,3H9a2.333,2.333,0,0,1,2.333,2.007,14.979,14.979,0,0,0,.817,3.278,2.333,2.333,0,0,1-.525,2.461l-1.482,1.482a18.665,18.665,0,0,0,7,7l1.482-1.482a2.333,2.333,0,0,1,2.461-.525,14.979,14.979,0,0,0,3.278.817,2.333,2.333,0,0,1,2.007,2.368Z"
                      transform="translate(-2.167 -2)"
                    />
                  </svg>
                  {btnCall}
                </AnchorLink>
              </Col>
              <Col
                lg={{ offset: 2, span: 5 }}
                md={{ offset: 2, span: 5 }}
                sm={12}
              >
                <AnchorLink className="promoBtn " to={btnPromoLink}>
                  {btnPromo}
                </AnchorLink>
              </Col>
              {title.includes("Maple Laser Clinic") && (
                <Col lg={5} md={5} sm={12}>
                  <button
                    className={`promoBtn book__appointment show${btnCallLink}`}
                    onClick={handleShow}
                  >
                    Book Appointment
                  </button>
                </Col>
              )}
            </Row>
          </div>
        </Col>
      </div>
      {title.includes("Maple Laser Clinic") && (
        <Modal size="lg" centered show={show} onHide={handleClose}>
          <Modal.Header closeButton className="quity__header">
            <Modal.Title>Book An Appointment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="brandWrapper">
              <iframe
                className="iframe quity__iframe"
                src='https://app.acuityscheduling.com/schedule.php?owner=20480304&owner=20480304&appointmentType=18280821” width=“100%” height=“800” frameBorder=“0"'
              ></iframe>
            </Row>
          </Modal.Body>
        </Modal>
      )}
    </section>
  )
}
export default LocationSpecificHeroBrand
/* <div className="btnHeroWrapper">
            <div className="RightSide">
              <Button className="PhoneWrapper callBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.203"
                  height="25.25"
                  viewBox="0 0 25.203 25.25"
                >
                  <path
                    className="PhoneSvg"
                    d="M26.369,20.405v3.5a2.333,2.333,0,0,1-2.543,2.333,23.087,23.087,0,0,1-10.068-3.581,22.748,22.748,0,0,1-7-7A23.087,23.087,0,0,1,3.177,5.543,2.333,2.333,0,0,1,5.5,3H9a2.333,2.333,0,0,1,2.333,2.007,14.979,14.979,0,0,0,.817,3.278,2.333,2.333,0,0,1-.525,2.461l-1.482,1.482a18.665,18.665,0,0,0,7,7l1.482-1.482a2.333,2.333,0,0,1,2.461-.525,14.979,14.979,0,0,0,3.278.817,2.333,2.333,0,0,1,2.007,2.368Z"
                    transform="translate(-2.167 -2)"
                  />
                </svg>
                {btnCall}
              </Button>
            </div>
            <div className="promoBtn">
              <AnchorLink to={btnPromoLink}>{btnPromo}</AnchorLink>
            </div>
          </div> */
