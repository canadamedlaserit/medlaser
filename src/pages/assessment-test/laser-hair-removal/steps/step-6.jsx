import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Step6 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
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
        <Col lg={5} md={10} className="text-align-center">
          <h1>
            Do you have any of the following medical conditions: Cancer,
            diabetes, skin diseases/skin lesions, seizure disorder, blood
            clotting abnormalities, G6PD deficiency, psoriasis/vitiligo/lupus,
            HIV/AIDS OR are you pregnant or breastfeeding?
          </h1>
        </Col>
      </div>
      <Row className="flex justify-content-center">
        <Col lg={5} md={10} style={{ textAlign: "center" }}>
          <ul className="radio-btn">
            <li>
              <input
                type="radio"
                id="option1"
                name="question6"
                value="Yes"
                checked={values.question6 === "Yes"}
                onChange={() => {
                  setFieldValue("question6", "Yes")
                  hanldleAnswers("red")

                  handleNext()
                }}
              />
              <label htmlFor="option1">Yes</label>
            </li>
            <li>
              <input
                type="radio"
                id="option2"
                name="question6"
                value="No"
                checked={values.question6 === "No"}
                onChange={() => {
                  setFieldValue("question6", "No")
                  hanldleAnswers("green")

                  handleNext()
                }}
              />
              <label htmlFor="option2">No</label>
            </li>
            <li>
              <Button className="next-btn  py-3" onClick={handleNext}>
                Next &nbsp; &nbsp;
              </Button>
            </li>
          </ul>
        </Col>
      </Row>
    </>
  )
}

export default Step6
