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
          <h1>How soon are you hoping to start treating your skin concern?</h1>
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
                value="ASAP.  HALP!"
                checked={values.question5 === "ASAP.  HALP!"}
                onChange={() => {
                  setFieldValue("question5", "ASAP.  HALP!")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option1">ASAP. HALP!</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question5"
                value="I’d probably have to sleep on it… Depends on the treatment I’m advised to do"
                checked={values.question5 === "I’d probably have to sleep on it… Depends on the treatment I’m advised to do"}
                onChange={() => {
                  setFieldValue("question5", "I’d probably have to sleep on it… Depends on the treatment I’m advised to do")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option2">I’d probably have to sleep on it… Depends on the treatment I’m advised to do</label>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                name="question5"
                value="I’m only interested in a consultation.  No urgency to start treatment 	"
                checked={values.question5 === "I’m only interested in a consultation.  No urgency to start treatment 	"}
                onChange={() => {
                  setFieldValue("question5", "I’m only interested in a consultation.  No urgency to start treatment 	")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option3">I’m only interested in a consultation.  No urgency to start treatment </label>
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
