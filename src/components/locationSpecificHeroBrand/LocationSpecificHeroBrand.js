import React, { useState } from "react"
import { graphql } from "gatsby"
import "./locationSpecificHeroBrand.scss"
import { Col } from "react-bootstrap"
//icon
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Row } from "react-bootstrap"
import Modal from "react-modal"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

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
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <section id="LocationHeroBrand">
      <div className="brandWrapper">
        <Col lg={7} md={9} sm={12} className="mainWrapper">
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
              {title.includes("Maple Laser Clinic") && (
                <Col lg={4} md={4} sm={12}>
                  <button
                    className={`btn__bpp promoBtn book__appointment show${btnCallLink}`}
                    onClick={openModal}
                  >
                    Book An Appointment
                  </button>
                </Col>
              )}
              <Col lg={4} md={4} sm={12}>
                <a
                  href="tel:+18475555555"
                  className="btn__bpp PhoneWrapper callBtn"
                >
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
                </a>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <AnchorLink className="btn__bpp promoBtn " to={btnPromoLink}>
                  {btnPromo}
                </AnchorLink>
              </Col>
            </Row>
          </div>
        </Col>
      </div>
      {title.includes("Maple Laser Clinic") && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>X</button>
          <h4>Book An Appointment</h4>
          <Row className="brandWrapper">
            <iframe
              className="iframe quity__iframe"
              src='https://app.acuityscheduling.com/schedule.php?owner=20480304&owner=20480304&appointmentType=18280821” width=“100%” height=“800” frameBorder=“0"'
            ></iframe>
          </Row>
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
