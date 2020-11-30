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
          {/* <h1>How often do you remove your hair?</h1> */}
        </Col>
      </div>
      {/* <Row className="flex justify-content-center"> */}
      <Col
        md={10}
        lg={4}
        className="flex justify-content-center text-center"
        style={{ margin: "auto", padding: "2em" }}
      >
        <ul className="radio-btn">
          <li>
            <h1 style={{ backgroundColor: "initial", color: "#000" }}>
              Promotion list
            </h1>
          </li>

          <li>
            <input
              type="radio"
              id="option1"
              name="question2"
              value="LHR: 50% OFF + Additional 5% OFF"
              checked={values.question2 === "LHR: 50% OFF + Additional 5% OFF"}
              onChange={() => {
                setFieldValue("question2", "LHR: 50% OFF + Additional 5% OFF")
                //                hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option1">LHR: 50% OFF + Additional 5% OFF</label>
          </li>
          <li>
            <input
              type="radio"
              id="option2"
              name="question2"
              value="Botox: Buy first 10 units for $59 (New clients only)"
              checked={
                values.question2 ===
                "Botox: Buy first 10 units for $59 (New clients only)"
              }
              onChange={() => {
                setFieldValue(
                  "question2",
                  "Botox: Buy first 10 units for $59 (New clients only)"
                )
                // hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option2">
              Botox: Buy first 10 units for $59 (New clients only)
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="option3"
              name="question2"
              value="CoolSculpting: Flat 40% OFF"
              checked={values.question2 === "CoolSculpting: Flat 40% OFF"}
              onChange={() => {
                setFieldValue("question2", "CoolSculpting: Flat 40% OFF")
                // hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option3">CoolSculpting: Flat 40% OFF</label>
          </li>
          {/* <li>
            <input
              type="radio"
              id="option4"
              name="question2"
              value="Every 2 months"
              checked={values.question2 === "Every 2 months"}
              onChange={() => {
                setFieldValue("question2", "Every 2 months")
                hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option4">Every 2 months</label>
          </li> */}
          <li style={{ display: "flex" }} className="mt-5">
            <input type="radio" />
            <Button className="next-btn  py-3" onClick={handleNext}>
              Next &nbsp; &nbsp;
            </Button>
          </li>
        </ul>
      </Col>
      {/* </Row> */}
    </>
  )
}

export default Step2
