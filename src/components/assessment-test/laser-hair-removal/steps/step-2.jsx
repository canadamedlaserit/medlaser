import React from "react"
import { Col, Button, Container } from "react-bootstrap"

const Step2 = ({
  values,
  setFieldValue,
  handleNext,
  handlePrev,
  hanldleAnswers,
}) => {
  return (
    <>
      <div className="questionDiv">
        <Col className="text-align-center">
          <h1>How often do you remove your hair?</h1>
        </Col>
      </div>
      <Container fluid>
        <Col
          md={10}
          lg={4}
          className="flex justify-content-center text-center"
          style={{ margin: "auto", padding: "2em" }}
        >
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
            <li style={{ display: "flex" }}>
              <Button className="next-btn ml-2 py-3" onClick={handlePrev}>
                Back
              </Button>
              <Button className="next-btn ml-2 py-3" onClick={handleNext}>
                Next
              </Button>
            </li>
          </ul>
        </Col>
      </Container>
    </>
  )
}

export default Step2
