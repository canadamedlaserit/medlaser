import React from "react"
import { Container, Col, Button } from "react-bootstrap"

const Step5 = ({
  values,
  setFieldValue,
  handleNext,
  handlePrev,
  hanldleAnswers,
}) => {
  return (
    <>
      <div className="questionDiv">
        <Col className="text-align-center">
          <h1>When would you like to get started on your treatment?</h1>
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
                name="question5"
                value="You mean if I start now, I’ll be hair-free by THIS TIME, next year?! Sign me up asap!"
                checked={
                  values.question5 ===
                  "You mean if I start now, I’ll be hair-free by THIS TIME, next year?! Sign me up asap!"
                }
                onChange={() => {
                  setFieldValue(
                    "question5",
                    "You mean if I start now, I’ll be hair-free by THIS TIME, next year?! Sign me up asap!"
                  )
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option1">
                You mean if I start now, I’ll be hair-free by THIS TIME, next
                year?! Sign me up asap!
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question5"
                value="Woah, slow down.  I’m in no rush.  Just looking to do some research first"
                checked={
                  values.question5 ===
                  "Woah, slow down.  I’m in no rush.  Just looking to do some research first"
                }
                onChange={() => {
                  setFieldValue(
                    "question5",
                    "Woah, slow down.  I’m in no rush.  Just looking to do some research first"
                  )
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option2">
                Woah, slow down. I’m in no rush. Just looking to do some
                research first
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                name="question5"
                value="Depends on how my consultation goes.  If I feel comfortable, I can start asap	"
                checked={
                  values.question5 ===
                  "Depends on how my consultation goes.  If I feel comfortable, I can start asap	"
                }
                onChange={() => {
                  setFieldValue(
                    "question5",
                    "Depends on how my consultation goes.  If I feel comfortable, I can start asap	"
                  )
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option3">
                Depends on how my consultation goes. If I feel comfortable, I
                can start asap{" "}
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="option4"
                name="question5"
                value="Really depends.  I have to talk to my partner/spouse before committing"
                checked={
                  values.question5 ===
                  "Really depends.  I have to talk to my partner/spouse before committing"
                }
                onChange={() => {
                  setFieldValue(
                    "question5",
                    "Really depends.  I have to talk to my partner/spouse before committing"
                  )
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option4">
                Really depends. I have to talk to my partner/spouse before
                committing
              </label>
            </li>
            <li style={{ display: "flex" }}>
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

export default Step5
