import React from "react"
import { Container, Col, Button } from "react-bootstrap"

const Step3 = ({
  currentStep,
  values,
  setQuestionAnswer,
  handleNext,
  handlePrev,
}) => {
  return (
    <div style={{ display: currentStep === 3 ? "block" : "none" }}>
      <div className="questionDiv">
        <Col lg={5} md={10} className="text-align-center">
          <h1>
            Have you ever had medical/aesthetic procedures to target signs of
            aging?
          </h1>
        </Col>
      </div>
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
              name="question3"
              value="Yes"
              checked={values.question3 === "Yes"}
              readOnly={true}
            />
            <label onClick={() => setQuestionAnswer("question3", "Yes")}>
              Yes
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="question3"
              value="No"
              checked={values.question3 === "No"}
              readOnly={true}
            />
            <label onClick={() => setQuestionAnswer("question3", "No")}>
              No
            </label>
          </li>
        </ul>
        <li style={{ display: "flex" }}>
          <Button className="next-btn ml-2 py-3" onClick={handlePrev}>
            Back
          </Button>
          <Button className="next-btn ml-2 py-3" onClick={handleNext}>
            Next
          </Button>
        </li>
      </Col>
    </div>
  )
}

export default Step3
