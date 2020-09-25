import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Step5 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
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
          <h1>How did you enjoy the treatment and results?</h1>
        </Col>
      </div>
      <Row className="flex justify-content-center">
        <Col lg={5} md={10} style={{ textAlign: "center" }}>
          <ul className="radio-btn">
            <li>
              <input
                type="radio"
                id="option1"
                name="question5"
                value="Loved it"
                checked={
                  values.question5 === "Loved it"
                }
                onChange={() => {
                  setFieldValue(
                    "question5",
                    "Loved it"
                  )
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option1">
                Loved it
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question5"
                value="Meh, I was underwhelmed"
                checked={values.question5 === "Meh, I was underwhelmed"}
                onChange={() => {
                  setFieldValue("question5", "Meh, I was underwhelmed")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option2">Meh, I was underwhelmed</label>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                name="question5"
                value="I told you, I’ve never had treatments before!	"
                checked={values.question5 === "I told you, I’ve never had treatments before!	"}
                onChange={() => {
                  setFieldValue("question5", "I told you, I’ve never had treatments before!	")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option3">I told you, I’ve never had treatments before!</label>
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

export default Step5
