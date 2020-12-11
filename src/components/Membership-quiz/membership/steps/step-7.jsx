import React from "react"
import { Row, Col, Button, Container } from "react-bootstrap"
import { Field } from "formik"

const Step7 = () => {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "90px 0px" }}>
      <Container fluid>
        <Col
          className="flex justify-content-center text-center"
          style={{ margin: "auto" }}
        >
          <div className="questionDiv">
            <Col lg={6} md={10} className="text-align-center">
              <h1
                style={{
                  backgroundColor: "initial",
                  color: "#000",
                  font: "normal normal bold 36px/48px Playfair Display",
                  margin: 0,
                }}
              >
                Checkout{" "}
              </h1>
            </Col>
          </div>
          <div className="questionDiv">
            <Col lg={8} md={10} className="text-align-center">
              <p>
                Please fill all the following fields so we will contact you once
                we receive the assessment test.{" "}
              </p>
            </Col>
          </div>
          <Row className="flex justify-content-center">
            <Col lg={7} md={10} style={{ textAlign: "center" }}>
              <Row>
                <Col md={12}>
                  <Field
                    name="Name"
                    type="text"
                    className="form-control mb-3 alcohol-test-field"
                    placeholder="Full Name"
                    required
                  />
                </Col>
              </Row>
              {/* <Row>
            <Col md={12}>
              <Field
                name="user-detail"
                type="text"
                className="form-control mb-4 alcohol-test-field"
                placeholder="User detail"
                required
              />
            </Col>
          </Row> */}
              <Row>
                <Col md={12}>
                  <Field
                    name="email"
                    type="email"
                    className="form-control mb-3 alcohol-test-field"
                    placeholder="Email"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Field
                    name="phone"
                    type="number"
                    className="form-control mb-3 alcohol-test-field"
                    placeholder="Phone "
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Field
                    name="date"
                    type="date"
                    className="form-control mb-3 alcohol-test-field"
                    placeholder="Date"
                    required
                  />
                </Col>
                <Col md={6}>
                  <Field
                    name="time"
                    type="time"
                    className="form-control  alcohol-test-field"
                    placeholder="Time"
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Button
                    className="next-btn subButton"
                    style={{ width: "100%", maxWidth: "none" }}
                  >
                    Submit &nbsp; &nbsp;
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    </section>
  )
}

export default Step7
