import React from "react"
import { Container, Col, Button } from "react-bootstrap"

const Step5 = ({
  currentStep,
  values,
  setQuestionAnswer,
  handleNext,
  handlePrev,
}) => {
  return (
    <div style={{ display: currentStep === 5 ? "block" : "none" }}>
      <div className="questionDiv">
        <Col lg={5} md={10} className="text-align-center">
          <h1>
            My ideal result after having a fat-reduction treatment would look
            like this:
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
            <fieldset>
              <li>
                <input
                  type="radio"
                  name="question5"
                  value="Fat loss – Make those inches disappear!"
                  checked={
                    values.question5 ===
                    "Fat loss – Make those inches disappear!"
                  }
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer(
                      "question5",
                      "Fat loss – Make those inches disappear!"
                    )
                  }
                >
                  Fat loss – Make those inches disappear!
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question5"
                  value="Contouring in the area"
                  checked={values.question5 === "Contouring in the area"}
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question5", "Contouring in the area")
                  }
                >
                  Contouring in the area
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question5"
                  value="Fat loss and contouring	"
                  checked={values.question5 === "Fat loss and contouring	"}
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question5", "Fat loss and contouring")
                  }
                >
                  Fat loss and contouring
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
            </fieldset>
          </ul>
        </Col>
      </Container>
    </div>
  )
}

export default Step5
