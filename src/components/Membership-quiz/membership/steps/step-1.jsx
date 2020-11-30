import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Step1 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
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
            {/* Let’s get started! Tell us about your current method of hair
            removal. How do you normally remove your hair? */}
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
            <h1 style={{ backgroundColor: "initial", color: "#000" }}>
              Hi "Customer"!
            </h1>
          </li>
          {/*  <li>
              <input
                type="radio"
                id="option1"
                name="question1"
                value="Wax/tweeze/epilate"
                checked={values.question1 === "Wax/tweeze/epilate"}
                onChange={() => {
                  setFieldValue("question1", "Wax/tweeze/epilate")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option1">Wax/tweeze/epilate</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question1"
                value="Shave"
                checked={values.question1 === "Shave"}
                onChange={() => {
                  setFieldValue("question1", "Shave")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option2">Shave</label>
            </li>
            <li>
              <input
                type="radio"
                id="option3"
                name="question1"
                value="Keep it au naturel"
                checked={values.question1 === "Keep it au naturel"}
                onChange={() => {
                  setFieldValue("question1", "Keep it au naturel")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option3">Keep it au naturel</label>
            </li>
            <li>
              <input
                type="radio"
                id="option4"
                name="question1"
                value="One or more of the above methods"
                checked={
                  values.question1 === "One or more of the above methods"
                }
                onChange={() => {
                  setFieldValue("question1", "One or more of the above methods")
                  hanldleAnswers("green")
                  handleNext()
                }}
              />
              <label htmlFor="option4">One or more of the above methods</label>
            </li> */}
          <li style={{ display: "flex" }} className="mt-5">
            <input type="radio" />
            <Button className="next-btn  py-3" onClick={handleNext}>
              Continue &nbsp; &nbsp;
            </Button>
          </li>
        </ul>
      </Col>
    </>
  )
}

export default Step1
