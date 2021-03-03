import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

const Step3 = ({
  currentStep,
  values,
  handleNext,
  handlePrev,
  setQuestionAnswer,
}) => {
  return (
    <div style={{ display: currentStep === 3 ? "block" : "none" }}>
      <div className="questionDiv">
        <Col lg={5} md={8} className="text-align-center">
          <h1>
            What colour is your hair in the area you are hoping to have treated?
          </h1>
        </Col>
      </div>
      <Container fluid>
        <Col
          lg={4}
          md={10}
          className="flex justify-content-center text-center"
          style={{ margin: "auto", padding: "2em" }}
        >
          <ul className="radio-btn">
            <fieldset>
              <li>
                <input
                  type="radio"
                  name="question3"
                  value="Blonde/red/grey"
                  checked={values.question3 === "Blonde/red/grey"}
                  readOnly={true}
                />
                <label
                  onClick={() =>
                    setQuestionAnswer("question3", "Blonde/red/grey")
                  }
                >
                  Blonde/red/grey
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question3"
                  value="Black"
                  checked={values.question3 === "Black"}
                  readOnly={true}
                />
                <label onClick={() => setQuestionAnswer("question3", "Black")}>
                  Black
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question3"
                  value="Brown"
                  checked={values.question3 === "Brown"}
                  readOnly={true}
                />
                <label onClick={() => setQuestionAnswer("question3", "Brown")}>
                  Brown
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  name="question3"
                  value="Dark blonde"
                  checked={values.question3 === "Dark blonde"}
                  readOnly={true}
                />
                <label
                  onClick={() => setQuestionAnswer("question3", "Dark blonde")}
                >
                  Dark blonde
                </label>
              </li>
            </fieldset>
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

export default Step3
