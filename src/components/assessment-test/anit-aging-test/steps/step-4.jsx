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
          <h1>How did you enjoy the treatment and results?</h1>
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
                value="Loved it"
                checked={values.question4 === "Loved it"}
                onChange={() => {
                  setFieldValue("question4", "Loved it")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option1">Loved it</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question4"
                value="Meh, I was underwhelmed	"
                checked={values.question4 === "Meh, I was underwhelmed	"}
                onChange={() => {
                  setFieldValue("question4", "Meh, I was underwhelmed	")
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
                name="question4"
                value="I told you, I’ve never had treatments before!"
                checked={
                  values.question4 ===
                  "I told you, I’ve never had treatments before!"
                }
                onChange={() => {
                  setFieldValue(
                    "question4",
                    "I told you, I’ve never had treatments before!"
                  )
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option3">
                I told you, I’ve never had treatments before!
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

export default Step4
