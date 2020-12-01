import React from "react"
import { Row, Col, Button, Container } from "react-bootstrap"
//router
import { Link } from "gatsby"

const Step1 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
  return (
    <>
      <div className="questionDiv">
        <Col className="text-align-center">
          <h1>
            {/* Let’s get started! Tell us about your current method of hair
            removal. How do you normally remove your hair? */}
          </h1>
        </Col>
      </div>
      <Container fluid>
        <Col
          md={10}
          lg={5}
          className="flex justify-content-center text-center"
          style={{ margin: "auto" }}
        >
          <ul className="radio-btn">
            <li className="justify-content-center">
              <h1 style={{ backgroundColor: "initial", color: "#000" }}>
                Hi "Customer"!
              </h1>
            </li>
            <li style={{ display: "flex" }} className="mt-5">
              <Link className="next-btn  py-3" to="/">
                back &nbsp; &nbsp;
              </Link>
              <input type="radio" />
              <Button className="next-btn  py-3" onClick={handleNext}>
                Continue &nbsp; &nbsp;
              </Button>
            </li>
          </ul>
        </Col>
      </Container>
    </>
  )
}

export default Step1
