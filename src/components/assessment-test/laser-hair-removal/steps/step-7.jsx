import React from "react"
import { Row, Col } from "react-bootstrap"
import { Field } from "formik"

const Step7 = () => {
  return (
    <>
      <div className="questionDiv">
        <Col lg={6} md={10} className="text-align-center">
          <h1 style={{ margin: "0px" }}>
            Please fill all the following fields so we will contact you once we
            receive the assessment test.
          </h1>
        </Col>
      </div>
      <Row className="flex justify-content-center">
        <Col lg={4} md={10} style={{ textAlign: "center" }}>
          <Row className="mt-5">
            <Col md={12}>
              <Field
                name="firstName"
                type="text"
                className="form-control mb-4 alcohol-test-field"
                placeholder="First Name"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Field
                name="lastName"
                type="text"
                className="form-control mb-4 alcohol-test-field"
                placeholder="Last Name"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Field
                name="phone"
                type="text"
                className="form-control mb-4 alcohol-test-field"
                placeholder="Phone Number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Field
                name="email"
                type="email"
                className="form-control mb-4 alcohol-test-field"
                placeholder="Email"
                required
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Step7
