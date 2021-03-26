import React from "react"
import { Col, Button, Container } from "react-bootstrap"

const Step4 = ({
  currentStep,
  values,
  setQuestionAnswer,
  setFieldValue,
  handleNext,
  handlePrev,
  hanldleAnswers,
}) => {
  return (
    <div style={{ display: currentStep === 4 ? "block" : "none" }}>
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
            <fieldset>
              <li>
                <input
                  type="radio"
                  name="question4"
                  value="Yes"
                  checked={values.question4 === "Yes"}
                />
                <label onClick={() => setQuestionAnswer("question4", "Yes")}>
                  Yes
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question4"
                  value="No"
                  checked={values.question4 === "No"}
                />
                <label onClick={() => setQuestionAnswer("question4", "No")}>
                  No
                </label>
              </li>
            </fieldset>
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
    </div>
  )
}

export default Step4
