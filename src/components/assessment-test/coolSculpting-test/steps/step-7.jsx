import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Step7 = ({ values, setFieldValue, handleNext, hanldleAnswers }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#000000",

          padding: "3em",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <Col lg={5} md={10} className="text-align-center">
          <h1>
            Do you have any of the following medical conditions: Cancer,
            diabetes, skin diseases/skin lesions, blood clotting abnormalities,
            G6PD deficiency, psoriasis/vitiligo/lupus, HIV/AIDS, history of
            hernia in the area of potential treatment OR are you pregnant or
            breastfeeding?
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
              name="question7"
              value="Yes"
              checked={values.question7 === "Yes"}
              onChange={() => {
                setFieldValue("question7", "Yes")
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
              name="question7"
              value="No"
              checked={values.question7 === "No"}
              onChange={() => {
                setFieldValue("question7", "No")
                hanldleAnswers("green")

                handleNext()
              }}
            />
            <label htmlFor="option2">No</label>
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

export default Step7
