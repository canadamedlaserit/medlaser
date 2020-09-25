import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Step3 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
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
          <h1>Would you consider your skin concern to be genetic?</h1>
        </Col>
      </div>
      <Row className="flex justify-content-center">
        <Col lg={5} md={10} style={{ textAlign: "center" }}>
          <ul className="radio-btn">
            <li>
              <input
                type="radio"
                id="option1"
                name="question3"
                value="Yes!"
                checked={values.question3 === "Yes!"}
                onChange={() => {
                  setFieldValue("question3", "Yes!")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option1">Yes!</label>
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

export default Step3
