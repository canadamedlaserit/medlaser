import React, { useState } from "react"
import "./BookingComponent_location.scss"
//import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory"
import { Row } from "react-bootstrap"
import { navigate } from "gatsby-link"
import { Field, Form, Formik, FormikProps } from "formik"
import { Col, Button } from "react-bootstrap"

export const fragment = graphql`
  fragment Bookinglocationspecific on WPGraphQL_Page_Sectionfields_Sections_Bookinglocationspecific {
    fieldGroupName
    title
  }
`
const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />
}

// const handleSubmit = e => {
//   //e.preventDefault()

//   if (this.state.formValid) {
//     // this.reset()

//     const form = e.target
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({
//         "form-name": "Medlaser NEW LEAD - Main Form",
//         // ...this.state,
//       }),
//     })
//       .then(() => navigate(form.getAttribute("action")))
//       .catch(error => alert(error))
//   } else {
//     // console.log("form invalid")

//     this.validateField("firstName", this.state.firstName)
//     this.validateField("lastName", this.state.lastName)
//     this.validateField("email", this.state.email)
//     this.validateField("phone", this.state.phone)
//     this.validateField("desiredTreatment", this.state.desiredTreatment)
//     this.validateField("location", this.state.location)

//     // console.log(this.state.formErrors)
//   }
// }

const BookingComponentLocation = () => {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNo, setPhoneNo] = useState("")
  const [email, setEmail] = useState("")

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const reset = () => {
    // reseting state
    setDate("")
    setTime("")
    setFirstName("")
    setLastName("")
    setPhoneNo("")
    setEmail("")
  }
  const handleSubmit = event => {
    // event.preventDefault()
    reset()
    const form = event.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "Medlaser NEW LEAD - Contact location",
        date,
        time,
        firstName,
        lastName,
        phoneNo,
        email,
      }),
    })
      .then(
        () => navigate(form.getAttribute("action")),
        console.log("form-submitted")
      )
      // .then(resp => {
      //   console.log("abd", resp)
      //   navigate("#LocationOurTreatment")
      //   //setFormSuccess(true)
      // })
      .catch(error => alert(error))
    //console.log("form-submtte")
    console.log(
      "form submitted",
      date,
      time,
      firstName,
      lastName,
      phoneNo,
      email
    )
  }

  // const handleChange = input => event => {
  //   const value = event.target.value

  //   // this.setState({ [input]: value }, () => {
  //   //   this.validateField(input, value)
  //   // })
  // }
  return (
    <>
      <section id="BookingSection_location">
        <div className="header_wrapper">
          <h1>Book your free consultation</h1>
        </div>
      </section>
      <section id="BookingForm_location">
        <Row className="LocationBookingWrapper">
          <Col lg={12}>
            <Formik
              initialValues={{
                email: "",
                firstName: "",
                lastName: "",
                phone: "",
              }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                  actions.setSubmitting(false)
                }, 1000)
              }}
              name="Medlaser NEW LEAD - Contact location"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thank-you/"
              onSubmit={handleSubmit}
            >
              <Form className="FormStep1Wrapper">
                <Col lg={4}>
                  <p className="para">Step 1 of 2</p>
                  <h3 className="headerWrapper"> Select Date & Time</h3>
                  <div className="formFieldWrapper">
                    <Field
                      name="date"
                      type="date"
                      value={date}
                      className="form-control mb-3 alcohol-test-field"
                      onChange={e => setDate(e.target.value)}
                      placeholder="choose Date"
                      required
                    />

                    <Field
                      name="time"
                      type="time"
                      className="form-control alcohol-test-field"
                      placeholder="Time"
                      value={time}
                      onChange={e => setTime(e.target.value)}
                      required
                    />
                  </div>
                </Col>
                <Col lg={8}>
                  <p className="para">Step 2 of 2</p>
                  <h3 className="headerWrapper"> Enter your information</h3>
                  <div className="formField_textWrapper">
                    <Field
                      name="firstName"
                      type="text"
                      className="form-control mb-3 alcohol-test-field"
                      placeholder="First Name"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      required
                    />

                    <Field
                      name="lastName"
                      type="text"
                      className="form-control mb-3 alcohol-test-field"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="formField_textWrapper">
                    <Field
                      name="phone"
                      type="number"
                      className="form-control mb-3 alcohol-test-field"
                      placeholder="Phone"
                      value={phoneNo}
                      onChange={e => setPhoneNo(e.target.value)}
                      required
                    />

                    <Field
                      type="email"
                      name="email"
                      className="form-control mb-3 alcohol-test-field"
                      placeholder="Email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </Col>
                <Col lg={3}>
                  <Button
                    className=" btn btn-red"
                    // onClick={this.handleSubmit}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Col>
              </Form>
            </Formik>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default BookingComponentLocation
/* */
