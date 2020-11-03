import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

const Step3 = ({
  values,
  setFieldValue,
  handleNext,
  handlePrev,
  hanldleAnswers,
}) => {
  return (
    <>
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
            <li>
              <input
                type="radio"
                id="option1"
                name="question3"
                value="Blonde/red/grey"
                checked={values.question3 === "Blonde/red/grey"}
                onChange={() => {
                  setFieldValue("question3", "Blonde/red/grey")
                  hanldleAnswers("red")
                  handleNext()
                }}
              />
              <label htmlFor="option1">Blonde/red/grey</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question3"
                value="Black"
                checked={values.question3 === "Black"}
                onChange={() => {
                  setFieldValue("question3", "Black")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option2">Black</label>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                name="question3"
                value="Brown"
                checked={values.question3 === "Brown"}
                onChange={() => {
                  setFieldValue("question3", "Brown")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option3">Brown</label>
            </li>
            <li>
              <input
                type="radio"
                id="option4"
                name="question3"
                value="Dark blonde"
                checked={values.question3 === "Dark blonde"}
                onChange={() => {
                  setFieldValue("question3", "Dark blonde")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option4">Dark blonde</label>
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

export default Step3
