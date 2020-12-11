import React from "react"
import { Row, Col, Button, Container } from "react-bootstrap"
import Swiper from "react-id-swiper"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"

//assets
import membershipModelImage from "../../../../images/membershipModelImage.png"
import modalVideo from "../../../../images/modalVideo.png"
const slides = [
  {
    image: membershipModelImage,
  },
  {
    image: membershipModelImage,
  },
]

const Step2 = ({
  values,
  setFieldValue,
  handleNext,
  hanldleAnswers,
  handlePrev,
}) => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <section
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#ffffff" }}
    >
      <Container fluid>
        <Col
          md={10}
          lg={8}
          className="flex justify-content-center text-center"
          style={{ margin: "auto" }}
        >
          <ul className="radio-btn MembershipRadio">
            <li>
              <h1
                style={{
                  backgroundColor: "initial",
                  color: "#000",
                  font: "normal normal bold 36px/48px Playfair Display",
                  margin: 0,
                }}
              >
                Choose your promotion
              </h1>
            </li>

            <li style={{ marginTop: "60px", fontWeight: "bold" }}>
              Promotion List
            </li>

            <li>
              <input
                type="radio"
                id="option1"
                name="question2"
                value="LHR: 50% OFF + Additional 5% OFF"
                checked={
                  values.question2 === "LHR: 50% OFF + Additional 5% OFF"
                }
                onChange={() => setModalShow(true)}
                // onChange={() => {
                //   setFieldValue("question2", "LHR: 50% OFF + Additional 5% OFF")
                //   //                hanldleAnswers("green")
                //   handleNext()
                // }}
              />
              <label htmlFor="option1">LHR: 50% OFF + Additional 5% OFF</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question2"
                value="Botox: Buy first 10 units for $59 (New clients only)"
                checked={
                  values.question2 ===
                  "Botox: Buy first 10 units for $59 (New clients only)"
                }
                onChange={() => {
                  setFieldValue(
                    "question2",
                    "Botox: Buy first 10 units for $59 (New clients only)"
                  )
                  // hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option2">
                Botox: Buy first 10 units for $59 (New clients only)
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                name="question2"
                value="CoolSculpting: Flat 40% OFF"
                checked={values.question2 === "CoolSculpting: Flat 40% OFF"}
                onChange={() => {
                  setFieldValue("question2", "CoolSculpting: Flat 40% OFF")
                  // hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option3">CoolSculpting: Flat 40% OFF</label>
            </li>
            <li className="buttonReposive">
              <input type="radio" />
              <Button
                className="next-btn  py-3 buton contButton"
                onClick={handleNext}
              >
                Continue &nbsp; &nbsp;
              </Button>
            </li>
          </ul>
        </Col>
      </Container>
      <MyVerticallyCenteredModal
        open={modalShow}
        handleNext={handleNext}
        onClose={() => setModalShow(false)}
      />

      {/* </Row> */}
    </section>
  )
}

export default Step2

const MyVerticallyCenteredModal = props => {
  const params = {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 20,
    breakpoints: {
      // when window width is >= 1200px

      768: {
        slidesPerView: "auto",
      },
    },
  }

  return (
    <Modal
      {...props}
      center
      // size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      // centered
      classNames={{
        modal: "MembershipModel",
      }}
      // className="MembershipModel"
    >
      <div closeButton style={{ borderBottom: "none" }}>
        <div id="contained-modal-title-vcenter">
          <h1 className="modal-title">LHR: 50% OFF + Additional 5% OFF</h1>
        </div>
      </div>
      <div>
        <Row>
          <Col md={6}>
            <Swiper {...params}>
              {slides.map((slide, index) => (
                <div className="SwiperSlide" key={index}>
                  <img
                    src={slide.image}
                    style={{
                      height: "575px",
                      width: "522px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </Swiper>
          </Col>
          <Col md={6} className="grid2">
            <div>
              <p style={{ font: "normal normal normal 15px/20px Open Sans" }}>
                Our Laser Hair Removal treatments are here with a BIG DISCOUNT!
                That’s 50% off with any laser hair removal treatment. Plus you
                get to enjoy an additional 5% off if you contact us now. Hurry,
                this promo is for limited slots only!
              </p>
              <Button
                className="next-btn  py-3"
                style={{
                  width: "100%",
                  maxWidth: "none",
                  textTransform: "uppercase",
                  backgroundColor: "#9C1A3B",
                  border: "none",
                }}
                onClick={props.handleNext}
              >
                Select &nbsp; &nbsp;
              </Button>
            </div>
            <div>
              <div>
                <img
                  src={modalVideo}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  )
}
