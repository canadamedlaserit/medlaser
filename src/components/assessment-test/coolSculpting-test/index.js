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
import Step8 from "./steps/step-8"
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
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  assessmentType: "CoolSculpting Assessment",
}

const CSTest = () => {
  //const alcoholTest = { title: "" }
  const [state, SetState] = useState(initialValues)
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

  const encode = data => {
    // console.log(data, "encodedata")
    // console.log(
    //   Object.keys(data)
    //     .map(
    //       key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    //     )
    //     .join("&"),
    //   "objectencoded"
    // )
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const reset = e => {
    SetState(e)
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
    // reset(payload)
    setpayload(payload)
    // console.log(payload)
    // //e.preventDefault()
    // console.log({ ...payload }, "payloadnow")
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "Medlaser NEW LEAD - Cool-Sculpting Form",
        ...payload,
      }),
    })
      .then(() => setFormSubmitted(true))
      .catch(error => alert(error))

    //console.log("Payload", payload)
  }

  const handleNext = () => {
    if (currentStep >= 8) {
      console.log("Max Number is reached")
    } else {
      setProgress(progress + 14)
      setCurrentStep(currentStep + 1)
    }
    console.log("handle next assured")
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

          <Col className="text-center my-3">
            <h1 className="alcohol-test-heading">
              CoolSculpting – Am I a candidate?
            </h1>
          </Col>
          {/* <Col style={{ textAlign: "end" }}>
            <a style={{ textDecoration: "underline" }}>Need help?</a>
          </Col> */}
        </Row>
      </div>
      <Container className="alcohol-test-wrapper" fluid>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({
                "form-name": "Medlaser NEW LEAD - Cool-Sculpting Form",
                ...values,
              }),
            })
              .then(
                () => (setFormSubmitted(true), console.log("Payload=", values))
              )
              .catch(error => alert(error))
          }}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form
              name="Medlaser NEW LEAD - Cool-Sculpting Form"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input
                type="hidden"
                name="form-name"
                value="Medlaser NEW LEAD - Cool-Sculpting Form"
              />
              <input
                type="hidden"
                value="CoolSculpting Assessment"
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
                  setQuestionAnswer={(field, value) => {
                    setFieldValue(field, value)
                    hanldleAnswers("green")
                    handleNext()
                  }}
                />
                <Step3
                  currentStep={currentStep}
                  values={values}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
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
                  setQuestionAnswer={(field, value, color = "green") => {
                    setFieldValue(field, value)
                    hanldleAnswers(color)
                    handleNext()
                  }}
                />
                <Step5
                  currentStep={currentStep}
                  values={values}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
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
                  setQuestionAnswer={(field, value) => {
                    setFieldValue(field, value)
                    hanldleAnswers("green")
                    handleNext()
                  }}
                />
                <Step7
                  currentStep={currentStep}
                  values={values}
                  handleNext={handleNext}
                  handlePrev={handlePrev}
                  setQuestionAnswer={(field, value) => {
                    setFieldValue(field, value)
                    hanldleAnswers("green")
                    handleNext()
                  }}
                />

                <Step8 currentStep={currentStep} />

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

export default CSTest
