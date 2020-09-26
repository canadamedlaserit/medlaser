import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Step3 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#000000",
          textAlign: "center",
          padding: "3em",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col lg={5} md={10} className="text-align-center">
          <h1>
            What colour is your hair in the area you are hoping to have treated?
          </h1>
        </Col>
      </div>
            <Col
        md={10}
        lg={4}
        className="flex justify-content-center text-center"
        style={{ margin: "auto", padding:"2em" }}
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
             <input type="radio"/>
              <Button className="next-btn  py-3" onClick={handleNext}>
                Next &nbsp; &nbsp;
              </Button>
            </li>
          </ul>
        </Col>

    </>
  )
}

export default Step3
