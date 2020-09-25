import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Step4 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
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
        <Col lg={5} md={10} className="text-align-center">
          <h1>
            Have you ever had any medical/aesthetic procedures in the past?
          </h1>
        </Col>
      </div>
      <Row className="flex justify-content-center">
        <Col lg={5} md={10} style={{ textAlign: "center" }}>
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

export default Step4
