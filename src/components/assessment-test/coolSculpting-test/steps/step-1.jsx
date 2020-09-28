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
            Ready? Let’s go! If you had to choose one area of your body, on
            which area would you like to see fat loss?
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
              name="question1"
              value="Abdomen/midsection/love handles/bra fat"
              checked={
                values.question1 === "Abdomen/midsection/love handles/bra fat"
              }
              onChange={() => {
                setFieldValue(
                  "question1",
                  "Abdomen/midsection/love handles/bra fat"
                )
                hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option1">
              Abdomen/midsection/love handles/bra fat
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="option2"
              name="question1"
              value="Inner/outer thighs"
              checked={values.question1 === "Inner/outer thighs"}
              onChange={() => {
                setFieldValue("question1", "Inner/outer thighs")
                hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option2">Inner/outer thighs</label>
          </li>
          <li>
            <input
              type="radio"
              id="option3"
              name="question1"
              value="Chin"
              checked={values.question1 === "Chin"}
              onChange={() => {
                setFieldValue("question1", "Chin")
                hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option3">Chin</label>
          </li>
          <li>
            <input
              type="radio"
              id="option4"
              name="question1"
              value="Arms"
              checked={values.question1 === "Arms"}
              onChange={() => {
                setFieldValue("question1", "Arms")
                hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option4">Arms</label>
          </li>
          <li>
            <input
              type="radio"
              id="option5"
              name="question1"
              value="Why settle for one?  I want two or more areas"
              checked={
                values.question1 ===
                "Why settle for one?  I want two or more areas"
              }
              onChange={() => {
                setFieldValue(
                  "question1",
                  "Why settle for one?  I want two or more areas"
                )
                hanldleAnswers("green")
                handleNext()
              }}
            />
            <label htmlFor="option4">
              Why settle for one? I want two or more areas
            </label>
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

export default Step1
