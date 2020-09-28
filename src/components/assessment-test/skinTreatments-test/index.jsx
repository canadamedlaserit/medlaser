import React, { useState } from "react"

//router
import { Link } from "gatsby"

//components
import { Formik, Form } from "formik"
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap"

//custom components
import Step1 from "./steps/step-1"
import Step2 from "./steps/step-2"
import Step3 from "./steps/step-3"
import Step4 from "./steps/step-4"
import Step5 from "./steps/step-5"
import Step6 from "./steps/step-6"
import Step7 from "./steps/step-7"
import Step8 from "./steps/step-8"

import ResultAlcohol from "./result-alcohol"

//assets
import { LeftArrowHeader } from "./assets"

//styles
import "./_index.scss"

const initialValues = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
  question5: "",
  question6: "",
  question7: "",
  name: "",
  email: "",
  phone: "",
}

const LhrTest1 = () => {
  //const alcoholTest = { title: "" }
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [progress, setProgress] = useState(12)
  const [currentStep, setCurrentStep] = useState(1)
  const [payloadend, setpayload] = useState(null)
  const [colorArray, setcolorArray] = useState([])
  const hanldleAnswers = value => {
    let temp = colorArray
    temp.push(value)
    setcolorArray([...temp])
  }

  const handleSubmit = async payload => {
    const subject = "Qualifications Quiz for Website"

    const emailHtml = `
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone}</p>
    <table>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">Ready? Okay! Tell us about your skin. What is your number one skin concern?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question1}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">How long have you been suffering with this skin concern?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question2}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">Would you consider your skin concern to be genetic?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question3}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">Have you ever had any medical/aesthetic procedures in the past?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question4}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">How did you enjoy the treatment and results?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question5}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">How soon are you hoping to start treating your skin concern?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question6}</td>
      </tr>
      <tr>
      <td style="border: 1px solid #dddddd; padding: 10px;"> Do you have any of the following medical conditions: 
      Cancer, diabetes, skin diseases/skin lesions, seizure disorder, blood
      clotting abnormalities, G6PD deficiency, psoriasis/vitiligo/lupus, HIV/AIDS
      OR are you pregnant or breastfeeding? </td>
      <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question7}</td>
    </tr>
     
    </table>
    `

    // try {
    //   const response = await axios.post("/.netlify/functions/send-email", {
    //     emailHtml,
    //     subject,
    //   })
    setFormSubmitted(true)

    // console.log("Request Response", response)
    // } catch (error) {
    //   console.log(error)
    // }
    setpayload(payload)
    console.log("Payload", payload)
  }

  const handleNext = () => {
    if (currentStep >= 8) {
      console.log("Max Number is reached ")
    } else {
      setProgress(progress + 14)
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep <= 1) {
      console.log("Min Number is reached")
    } else if (currentStep >= 2) {
      setProgress(progress - 14)
      setCurrentStep(currentStep - 1)
    }
  }

  return formSubmitted ? (
    <div>
      <ResultAlcohol payload={payloadend} result={colorArray} />
    </div>
  ) : (
    <section id="alcohol-test-section">
      <div className="header-gap">
        <Row className="headerTest py-4">
          <Col>
            {currentStep === 1 ? (
              <Link to="/assessment">
                <img
                  src={LeftArrowHeader}
                  alt="Back arrow"
                  style={{
                    width: "35px",
                    height: "18px",
                  }}
                />
              </Link>
            ) : (
              <button className="buttonWrap" onClick={handlePrev}>
                <img
                  src={LeftArrowHeader}
                  alt="Back arrow"
                  style={{
                    width: "35px",
                    height: "18px",
                  }}
                />
              </button>
            )}
          </Col>
          <Col className="text-center my-3">
            <span className="alcohol-test-heading" style={{ color: "#fff" }}>
              Skin Treatments – What Treatment is Best Suited for my Skin?
            </span>
          </Col>
          <Col style={{ textAlign: "end" }}>
            <a style={{ textDecoration: "underline" }}>Need help?</a>
          </Col>
        </Row>
      </div>
      <Container className="alcohol-test-wrapper" fluid>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting, values, setFieldValue }) => (
            <Form>
              {/* Progressbar */}
              <Row>
                <Col md={12} className="px-0">
                  <ProgressBar
                    now={progress}
                    variant="mybarVariant"
                    className="progressbar-sec"
                  />
                </Col>
              </Row>
              {/* Questions Wrapper */}
              <Row
                className="justify-content-center"
                style={{ flexDirection: "column" }}
              >
                {/* <Col className="text-center"> */}
                {/* <div className="index">{currentStep} of 6</div> */}
                {currentStep === 1 && (
                  <Step1
                    values={values}
                    setFieldValue={setFieldValue}
                    handleNext={handleNext}
                    hanldleAnswers={hanldleAnswers}
                  />
                )}
                {currentStep === 2 && (
                  <Step2
                    values={values}
                    setFieldValue={setFieldValue}
                    handleNext={handleNext}
                    hanldleAnswers={hanldleAnswers}
                  />
                )}
                {currentStep === 3 && (
                  <Step3
                    values={values}
                    setFieldValue={setFieldValue}
                    handleNext={handleNext}
                    hanldleAnswers={hanldleAnswers}
                  />
                )}
                {currentStep === 4 && (
                  <Step4
                    values={values}
                    setFieldValue={setFieldValue}
                    handleNext={handleNext}
                    hanldleAnswers={hanldleAnswers}
                  />
                )}
                {currentStep === 5 && (
                  <Step5
                    values={values}
                    setFieldValue={setFieldValue}
                    handleNext={handleNext}
                    hanldleAnswers={hanldleAnswers}
                  />
                )}
                {currentStep === 6 && (
                  <Step6
                    values={values}
                    setFieldValue={setFieldValue}
                    handleNext={handleNext}
                    hanldleAnswers={hanldleAnswers}
                  />
                )}
                {currentStep === 7 && (
                  <Step7
                    values={values}
                    setFieldValue={setFieldValue}
                    handleNext={handleNext}
                    hanldleAnswers={hanldleAnswers}
                  />
                )}

                {currentStep >= 8 && <Step8 />}

                <Row className="flex justify-content-center">
                  <Col
                    lg={4}
                    md={10}
                    style={{ textAlign: "center", paddingBottom: "5vh" }}
                  >
                    {currentStep === 8 && (
                      <Button
                        className="next-btn"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting" : "Submit"}
                      </Button>
                    )}
                  </Col>
                </Row>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  )
}

export default LhrTest1
