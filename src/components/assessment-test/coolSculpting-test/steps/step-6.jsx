import React from "react"
import { Col, Button, Container } from "react-bootstrap"

const Step6 = ({
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
          <h1>How soon do you want to see that fat fade away?</h1>
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

export default Step6
