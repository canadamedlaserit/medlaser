import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Step2 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#000000",
          textAlign: "center",
          padding: "3em",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col lg={6} md={10} className="text-align-center">
          <h1>How often do you remove your hair?</h1>
        </Col>
      </div>
      <Row className="flex justify-content-center">
        <Col lg={4} md={10} style={{ textAlign: "center" }}>
          <ul className="radio-btn">
            <li>
              <input
                type="radio"
                id="option1"
                name="question2"
                value="Every week"
                checked={values.question2 === "Every week"}
                onChange={() => {
                  setFieldValue("question2", "Every week")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option1">Every week</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question2"
                value="Every 2 weeks"
                checked={values.question2 === "Every 2 weeks"}
                onChange={() => {
                  setFieldValue("question2", "Every 2 weeks")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option2">Every 2 weeks</label>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                name="question2"
                value="Once a month"
                checked={values.question2 === "Once a month"}
                onChange={() => {
                  setFieldValue("question2", "Once a month")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option3">Once a month</label>
            </li>
            <li>
              <input
                type="radio"
                id="option4"
                name="question2"
                value="Every 2 months"
                checked={values.question2 === "Every 2 months"}
                onChange={() => {
                  setFieldValue("question2", "Every 2 months")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option4">Every 2 months</label>
            </li>
            <li>
              <Button className="next-btn  py-3" onClick={handleNext}>
                Next &nbsp; &nbsp;
              </Button>
            </li>
          </ul>
        </Col>
      </Row>
    </>
  )
}

export default Step2
