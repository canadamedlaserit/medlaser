import React from "react"
import { Row, Col } from "react-bootstrap"
import { Field } from "formik"

const Step7 = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#000000",
          padding: "3em",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col lg={6} md={10} className="text-align-center">
          <h1>
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
                name="Name"
                type="text"
                className="form-control mb-4 alcohol-test-field"
                placeholder="Name"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Field
                name="user-detail"
                type="text"
                className="form-control mb-4 alcohol-test-field"
                placeholder="User detail"
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
          <Row>
            <Col md={12}>
              <Field
                name="phone"
                type="number"
                className="form-control mb-4 alcohol-test-field"
                placeholder="Phone Number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Field
                name="date"
                type="date"
                className="form-control mb-4 alcohol-test-field"
                placeholder="Date"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Field
                name="time"
                type="time"
                className="form-control mb-4 alcohol-test-field"
                placeholder="Time"
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
