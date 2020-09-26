import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Step2 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
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
        <Col lg={6} md={10} className="text-align-center">
          <h1>
            How long have you been considering getting treatment on that
            stubborn fat?
          </h1>
        </Col>
      </div>
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
              name="question2"
              value="Forever!"
              checked={values.question2 === "Forever!"}
              onChange={() => {
                setFieldValue("question2", "Forever!")
                hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option1">Forever!</label>
          </li>
          <li>
            <input
              type="radio"
              id="option2"
              name="question2"
              value="The idea just popped into my head"
              checked={values.question2 === "The idea just popped into my head"}
              onChange={() => {
                setFieldValue("question2", "The idea just popped into my head")
                hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option2">The idea just popped into my head</label>
          </li>
          <li>
            <input
              type="radio"
              id="option3"
              name="question2"
              value="For the past year or two"
              checked={values.question2 === "For the past year or two"}
              onChange={() => {
                setFieldValue("question2", "For the past year or two")
                hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option3">For the past year or two</label>
          </li>
          <li>
            <input
              type="radio"
              id="option4"
              name="question2"
              value="For a couple of months"
              checked={values.question2 === "For a couple of months"}
              onChange={() => {
                setFieldValue("question2", "For a couple of months")
                hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option4">For a couple of months</label>
          </li>
          <li style={{ display: "flex" }}>
            <input type="radio" />
            <Button className="next-btn  py-3" onClick={handleNext}>
              Next &nbsp; &nbsp;
            </Button>
          </li>
        </ul>
      </Col>
    </>
  )
}

export default Step2
