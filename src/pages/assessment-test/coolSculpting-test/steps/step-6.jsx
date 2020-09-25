import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Step6 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
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
          <h1>How soon do you want to see that fat fade away?</h1>
        </Col>
      </div>
      <Row className="flex justify-content-center">
        <Col lg={5} md={10} style={{ textAlign: "center" }}>
          <ul className="radio-btn">
            <li>
              <input
                type="radio"
                id="option1"
                name="question6"
                value="Yesterday!"
                checked={values.question6 === "Yesterday!"}
                onChange={() => {
                  setFieldValue("question6", "Yesterday!")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option1">Yesterday!</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question6"
                value="I have an event next year, so I’m planning ahead!	"
                checked={
                  values.question6 ===
                  "I have an event next year, so I’m planning ahead!	"
                }
                onChange={() => {
                  setFieldValue(
                    "question6",
                    "I have an event next year, so I’m planning ahead!	"
                  )
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option2">
                I have an event next year, so I’m planning ahead!
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                name="question6"
                value="Meh, I’m in no rush"
                checked={values.question6 === "Meh, I’m in no rush"}
                onChange={() => {
                  setFieldValue("question6", "Meh, I’m in no rush")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option3">Meh, I’m in no rush</label>
            </li>
            <li>
              <input
                type="radio"
                id="option4"
                name="question6"
                value="Not sure, depends on whether I’m a candidate"
                checked={
                  values.question6 ===
                  "Not sure, depends on whether I’m a candidate"
                }
                onChange={() => {
                  setFieldValue(
                    "question6",
                    "Not sure, depends on whether I’m a candidate"
                  )
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option4">
                Not sure, depends on whether I’m a candidate
              </label>
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

export default Step6
