import React from "react"
import { Container, Col, Button } from "react-bootstrap"

const Step4 = ({
  currentStep,
  values,
  setQuestionAnswer,
  handleNext,
  handlePrev,
}) => {
  return (
    <div style={{ display: currentStep === 4 ? "block" : "none" }}>
      <div className="questionDiv">
        <Col lg={5} md={10} className="text-align-center">
          <h1>
            Ever try pinching your fat? Well there’s a first time for
            everything.When you pinch the area of concern, what would be the
            closest way to describe what you feel?
          </h1>
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
                name="question4"
                value="Lots of volume (aka. Fat)"
                checked={values.question4 === "Lots of volume (aka. Fat)"}
                readOnly={true}
              />
              <label
                onClick={() =>
                  setQuestionAnswer("question4", "Lots of volume (aka. Fat)")
                }
              >
                Lots of volume (aka. Fat)
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="question4"
                value="Just skin with no volume in between.  If there wasn’t any skin in the way, my fingers would be touching	"
                checked={
                  values.question4 ===
                  "Just skin with no volume in between.  If there wasn’t any skin in the way, my fingers would be touching	"
                }
                readOnly={true}
              />
              <label
                onClick={() =>
                  setQuestionAnswer(
                    "question4",
                    "Just skin with no volume in between.  If there wasn’t any skin in the way, my fingers would be touching	"
                  )
                }
              >
                Just skin with no volume in between. If there wasn’t any skin in
                the way, my fingers would be touching{" "}
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="question4"
                value="Volume but a bit of lax skin"
                checked={values.question4 === "Volume but a bit of lax skin"}
                readOnly={true}
              />
              <label
                onClick={() =>
                  setQuestionAnswer("question4", "Volume but a bit of lax skin")
                }
              >
                Volume but a bit of lax skin
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="option4"
                name="question4"
                value="No volume and lots of lax skin in the way"
                checked={
                  values.question4 ===
                  "No volume and lots of lax skin in the way"
                }
                readOnly={true}
              />
              <label
                onClick={() =>
                  setQuestionAnswer(
                    "question4",
                    "No volume and lots of lax skin in the way",
                    "red"
                  )
                }
              >
                No volume and lots of lax skin in the way
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
    </div>
  )
}

export default Step4
