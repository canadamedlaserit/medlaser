import React from "react"
import { Container, Col, Button } from "react-bootstrap"

const Step3 = ({
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
              id="option1"
              name="question3"
              value="Yes"
              checked={values.question3 === "Yes"}
              onChange={() => {
                setFieldValue("question3", "Yes")
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
              name="question3"
              value="No"
              checked={values.question3 === "No"}
              onChange={() => {
                setFieldValue("question3", "No")
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
    </>
  )
}

export default Step3
