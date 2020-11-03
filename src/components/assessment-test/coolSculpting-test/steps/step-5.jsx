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
            <li>
              <input
                type="radio"
                id="option1"
                name="question5"
                value="Fat loss – Make those inches disappear!"
                checked={
                  values.question5 === "Fat loss – Make those inches disappear!"
                }
                onChange={() => {
                  setFieldValue(
                    "question5",
                    "Fat loss – Make those inches disappear!"
                  )
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option1">
                Fat loss – Make those inches disappear!
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question5"
                value="Contouring in the area"
                checked={values.question5 === "Contouring in the area"}
                onChange={() => {
                  setFieldValue("question5", "Contouring in the area")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option2">Contouring in the area</label>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                name="question5"
                value="Fat loss and contouring	"
                checked={values.question5 === "Fat loss and contouring	"}
                onChange={() => {
                  setFieldValue("question5", "Fat loss and contouring	")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option3">Fat loss and contouring</label>
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
