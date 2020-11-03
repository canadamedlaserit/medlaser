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
        <Col lg={6} md={10} className="text-align-center">
          <h1>How long have you been suffering with this skin concern?</h1>
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
                value="For as long as I can remember"
                checked={values.question2 === "For as long as I can remember"}
                onChange={() => {
                  setFieldValue("question2", "For as long as I can remember")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option1">For as long as I can remember</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question2"
                value="Since my teenage years"
                checked={values.question2 === "Since my teenage years"}
                onChange={() => {
                  setFieldValue("question2", "Since my teenage years")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option2">Since my teenage years</label>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                name="question2"
                value="Since the past couple of years/months"
                checked={
                  values.question2 === "Since the past couple of years/months"
                }
                onChange={() => {
                  setFieldValue(
                    "question2",
                    "Since the past couple of years/months"
                  )
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option3">
                Since the past couple of years/months
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="option4"
                name="question2"
                value="I just noticed it recently"
                checked={values.question2 === "I just noticed it recently"}
                onChange={() => {
                  setFieldValue("question2", "I just noticed it recently")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option4">I just noticed it recently</label>
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
