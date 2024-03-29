//components
import { Form, Formik } from "formik"
import React, { useState } from "react"
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap"
import ResultAlcohol from "./result-alcohol"
//custom components
import Step1 from "./steps/step-1"
import Step2 from "./steps/step-2"
import Step3 from "./steps/step-3"
import Step4 from "./steps/step-4"
import Step5 from "./steps/step-5"
import Step6 from "./steps/step-6"
import Step7 from "./steps/step-7"
//assets
// import { LeftArrowHeader } from "./assets"
//styles
import "./_index.scss"




const initialValues = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
  question5: "",
  question6: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  assessmentType: "Laser Hair Removal Assessment",
}

const LHRTest = () => {
  // const alcoholTest = { title: "" }
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [progress, setProgress] = useState(20)
  const [currentStep, setCurrentStep] = useState(1)
  const [payloadend, setpayload] = useState(null)
  const [colorArray, setcolorArray] = useState([])
  const hanldleAnswers = value => {
    let temp = colorArray
    temp.push(value)
    setcolorArray([...temp])
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const handleSubmit = async payload => {
    const emailHtml = `
    <p><strong>First Name:</strong> ${payload.firstName}</p>
    <p><strong>Last Name:</strong> ${payload.lastName}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone}</p>
    <table>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">Ready? Let’s go! If you had to choose one area of your body, on which area would you like to see fat loss?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question1}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">How long have you been considering getting treatment on that stubborn fat?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question2}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">Based on your knowledge, is the fat you’re hoping to target there because of genetics?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question3}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">Ever try pinching your fat? Well there’s a first time for everything.When you pinch the area of concern, what would be the closest way to describe what you feel?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question4}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">My ideal result after having a fat-reduction treatment would look like this:</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question5}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 10px;">How soon do you want to see that fat fade away?</td>
        <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question6}</td>
      </tr>
      <tr>
      <td style="border: 1px solid #dddddd; padding: 10px;">Do you have any of the following medical conditions:
      Cancer, diabetes, skin diseases/skin lesions, blood clotting abnormalities, G6PD deficiency, psoriasis/vitiligo/lupus, HIV/AIDS, history of hernia in the area of potential treatment
      OR are you pregnant or breastfeeding?</td>
      <td style="border: 1px solid #dddddd; padding: 10px;">${payload.question7}</td>
    </tr>
     
    </table>
    `
    setpayload(payload)
    //e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "Medlaser NEW LEAD - Laser-Hair-Removal Form",
        ...payload,
      }),
    })
      .then(() => setFormSubmitted(true))
      .catch(error => alert(error))

    //console.log("Payload", payload)
  }

  const handleNext = () => {
    if (currentStep >= 7) {
      console.log("Max Number is reached")
    } else {
      setProgress(progress + 15)
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep <= 1) {
      console.log("Min Number is reached")
    } else if (currentStep >= 2) {
      setProgress(progress - 15)
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
        <Container>
          <Row className="headerTest py-4">

            <Col className="text-center my-3">
              <h1 className="alcohol-test-heading">
                Laser Hair Removal Assessment
              </h1>
            </Col>
            {/* <Col style={{ textAlign: "end" }}>
            <a style={{ textDecoration: "underline" }}>Need help?</a>
          </Col> */}
          </Row>
        </Container>
      </div>
      <Container className="alcohol-test-wrapper" fluid>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting, values, setFieldValue }) => (
            <Form
              name="Medlaser NEW LEAD - Laser-Hair-Removal Form"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input
                type="hidden"
                name="form-name"
                value="Medlaser NEW LEAD - Laser-Hair-Removal Form"
              />
              <input
                type="hidden"
                value="Laser Hair Removal Assessment"
                name="assessmentType"
              />
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
                    handleNext={handleNext}
                    hanldleAnswers={hanldleAnswers}
                    setQuestionAnswer={(field, value) => {
                      setFieldValue(field, value)
                      hanldleAnswers("green")
                      handleNext()
                    }}
                  />
                )}

                <Step2
                  currentStep={currentStep}
                  values={values}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  hanldleAnswers={hanldleAnswers}
                  setQuestionAnswer={(field, value) => {
                    setFieldValue(field, value)
                    hanldleAnswers("green")
                    handleNext()
                  }}
                />

                <Step3
                  values={values}
                  currentStep={currentStep}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  hanldleAnswers={hanldleAnswers}
                  setQuestionAnswer={(field, value) => {
                    setFieldValue(field, value)
                    hanldleAnswers("green")
                    handleNext()
                  }}
                />
                <Step4
                  currentStep={currentStep}
                  values={values}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  hanldleAnswers={hanldleAnswers}
                  setQuestionAnswer={(field, value) => {
                    setFieldValue(field, value)
                    hanldleAnswers("green")
                    handleNext()
                  }}
                />
                <Step5
                  currentStep={currentStep}
                  values={values}
                  setFieldValue={setFieldValue}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  hanldleAnswers={hanldleAnswers}
                  setQuestionAnswer={(field, value) => {
                    setFieldValue(field, value)
                    hanldleAnswers("green")
                    handleNext()
                  }}
                />
                <Step6
                  currentStep={currentStep}
                  values={values}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  hanldleAnswers={hanldleAnswers}
                  setQuestionAnswer={(field, value) => {
                    setFieldValue(field, value)
                    hanldleAnswers("green")
                    handleNext()
                  }}
                />

                <Step7 currentStep={currentStep} />
 
                <Row className="flex justify-content-center">
                  <Col
                    lg={4}
                    md={10}
                    style={{ textAlign: "center", paddingBottom: "5vh" }}
                  >
                    {currentStep === 7 && (
                      <Button
                        className="next-btn"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting" : "Submit"}
                        {/* <i className="fa fa-long-arrow-right" /> */}
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

export default LHRTest
