import React from "react"
import { Col, Button, Container } from "react-bootstrap"

const Step4 = ({
  values,
  setFieldValue,
  handleNext,
  handlePrev,
  hanldleAnswers,
}) => {
  return (
    <>
      <div className="questionDiv">
        <Col lg={5} md={10} className="text-align-center">
          <h1>
            Have you ever had any medical/aesthetic procedures in the past?
          </h1>
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
                name="question4"
                value="Yes"
                checked={values.question4 === "Yes"}
                onChange={() => {
                  setFieldValue("question4", "Yes")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option1">Yes</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question4"
                value="No"
                checked={values.question4 === "No"}
                onChange={() => {
                  setFieldValue("question4", "No")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option2">No</label>
            </li>
            <li style={{ display: "flex" }}>
              <input type="radio" />
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

export default Step4
