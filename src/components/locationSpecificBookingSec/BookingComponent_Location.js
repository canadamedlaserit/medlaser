// import React, { useState } from "react"
// import "./BookingComponent_location.scss"
// //import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory"
// import { Row } from "react-bootstrap"
// import { navigate } from "gatsby-link"
// import { Field, Form, Formik, FormikProps } from "formik"
// import { Col, Button } from "react-bootstrap"

// export const fragment = graphql`
//   fragment Bookinglocationspecific on WPGraphQL_Page_Sectionfields_Sections_Bookinglocationspecific {
//     fieldGroupName
//     title
//   }
// `
// const MyInput = ({ field, form, ...props }) => {
//   return <input {...field} {...props} />
// }

// // const handleSubmit = e => {
// //   //e.preventDefault()

// //   if (this.state.formValid) {
// //     // this.reset()

// //     const form = e.target
// //     fetch("/", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
// //       body: encode({
// //         "form-name": "Medlaser NEW LEAD - Contact Form",
// //         // ...this.state,
// //       }),
// //     })
// //       .then(() => navigate(form.getAttribute("action")))
// //       .catch(error => alert(error))
// //   } else {
// //     // console.log("form invalid")

// //     this.validateField("firstName", this.state.firstName)
// //     this.validateField("lastName", this.state.lastName)
// //     this.validateField("email", this.state.email)
// //     this.validateField("phone", this.state.phone)
// //     this.validateField("desiredTreatment", this.state.desiredTreatment)
// //     this.validateField("location", this.state.location)

// //     // console.log(this.state.formErrors)
// //   }
// // }

// const BookingComponentLocation = () => {
//   // const [date, setDate] = useState("")
//   // const [time, setTime] = useState("")
//   // const [firstName, setFirstName] = useState("")
//   // const [lastName, setLastName] = useState("")
//   // const [phoneNo, setPhoneNo] = useState("")
//   // const [email, setEmail] = useState("")

//   // const encode = data => {
//   //   return Object.keys(data)
//   //     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//   //     .join("&")
//   // }
//   // const reset = () => {
//   //   // reseting state
//   //   setDate("")
//   //   setTime("")
//   //   setFirstName("")
//   //   setLastName("")
//   //   setPhoneNo("")
//   //   setEmail("")
//   // }
//   // const handleSubmit = event => {
//   //   event.preventDefault()

//   //   const form = event.target
//   //   fetch("/", {
//   //     method: "POST",
//   //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//   //     body: encode({
//   //       "form-name": "Medlaser NEW LEAD - Contact location",
//   //       date,
//   //       time,
//   //       firstName,
//   //       lastName,
//   //       phoneNo,
//   //       email,
//   //     }),
//   //   })
//   //     .then(() => console.log("form-submitted"), reset())
//   //     // .then(resp => {
//   //     //   console.log("abd", resp)
//   //     //   navigate("#LocationOurTreatment")
//   //     //   //setFormSuccess(true)
//   //     // })
//   //     .catch(error => alert(error))
//   //   //console.log("form-submtte")
//   //   console.log(
//   //     "form submitted",
//   //     date,
//   //     time,
//   //     firstName,
//   //     lastName,
//   //     phoneNo,
//   //     email
//   //   )
//   // }

//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   )
// }

// export default BookingComponentLocation
/*  <section id="BookingSection_location">
<div className="header_wrapper">
  <h1>Book your free consultation</h1>
</div>
</section>
<section id="BookingForm_location">
<Row className="LocationBookingWrapper">
  <Col lg={12}>
    <Formik
      // initialValues={{
      //   email: "",
      //   firstName: "",
      //   lastName: "",
      //   phone: "",
      // }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
      name="Medlaser NEW LEAD - Contact location"
      // method="post"
      data-netlify="true"
      //data-netlify-honeypot="bot-field"
      //  action="/thank-you/"
      onSubmit={handleSubmit}
    >
      <Form className="FormStep1Wrapper">
        <input
          type="hidden"
          name="form-name"
          value="Medlaser NEW LEAD - Contact location"
        />

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
</section> */

// const handleChange = input => event => {
//   const value = event.target.value

//   // this.setState({ [input]: value }, () => {
//   //   this.validateField(input, value)
//   // })
// }

import React, { Component } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import { navigate } from "gatsby-link"
import "./BookingComponent_location.scss"

//import styles from "../Contact/ContactForm/Form.module.scss"

export const fragment = graphql`
  fragment Bookinglocationspecific on WPGraphQL_Page_Sectionfields_Sections_Bookinglocationspecific {
    fieldGroupName
    title
  }
`

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  // desiredTreatment: "",
  // location: "",

  firstNameValid: false,
  lastNameValid: false,
  emailValid: false,
  phoneValid: false,
  // desiredTreatmentValid: false,
  // locationValid: false,
  formValid: false,
  emailSent: false,

  formErrors: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // desiredTreatment: "",
    // location: "",
  },
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export class BookingComponentLocation extends Component {
  componentDidMount() {
    if (this.props.pathname) {
      let loc = ""

      loc = this.props.pathname
      loc = loc.replace("location", "")
      loc = loc.replace(/\//g, "")
      // initialState.location = loc
    }
  }

  state = initialState

  reset() {
    // reseting state
    this.setState(initialState)

    // update inputs
    this.refs.firstName.value = ""
    this.refs.lastName.value = ""
    this.refs.email.value = ""
    this.refs.phone.value = ""
    this.refs.date.value = ""
    this.refs.time.value = ""
    // this.refs.desiredTreatment.value = "DEFAULT"
    // this.refs.location.value = "DEFAULT"
  }

  handleChange = input => event => {
    const value = event.target.value

    this.setState({ [input]: value }, () => {
      this.validateField(input, value)
    })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors

    let firstNameValid = this.state.firstNameValid
    let lastNameValid = this.state.lastNameValid
    let emailValid = this.state.emailValid
    let phoneValid = this.state.phoneValid
    // let desiredTreatmentValid = this.state.desiredTreatmentValid
    // let locationValid = this.state.locationValid

    switch (fieldName) {
      case "firstName":
        firstNameValid = value.length >= 1
        fieldValidationErrors.firstName = firstNameValid
          ? ""
          : "First Name is required"
        break

      case "lastName":
        lastNameValid = value.length >= 1
        fieldValidationErrors.lastName = lastNameValid
          ? ""
          : "Last Name is required"
        break

      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? "" : "Email is invalid"
        break

      case "phone":
        phoneValid = value.length >= 1
        fieldValidationErrors.phone = phoneValid ? "" : "Phone is invalid"
        break

      // case "desiredTreatment":
      //   desiredTreatmentValid = value.length >= 1
      //   fieldValidationErrors.desiredTreatment = desiredTreatmentValid
      //     ? ""
      //     : "Select Desired Treatment"

      //   break

      // case "location":
      //   locationValid = value.length >= 1
      //   fieldValidationErrors.location = locationValid ? "" : "Enter Location"

      //   break

      default:
        break
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        firstNameValid: firstNameValid,
        lastNameValid: lastNameValid,
        emailValid: emailValid,
        phoneValid: phoneValid,
        // desiredTreatmentValid: desiredTreatmentValid,
        // locationValid: locationValid,
      },
      this.validateForm
    )
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.firstNameValid &&
        this.state.lastNameValid &&
        this.state.emailValid &&
        this.state.phoneValid,
      // this.state.desiredTreatmentValid &&
      // this.state.locationValid,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.formValid) {
      this.reset()

      const form = e.target
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "Medlaser NEW LEAD - Contact Form",
          ...this.state,
        }),
      })
        .then(
          () => navigate(form.getAttribute("action")),
          console.log(
            "form-submitted",
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.phone,
            this.state.date,
            this.state.time
            // this.state.desiredTreatment,
            // this.state.location
          )
        )
        .catch(error => alert(error))
    } else {
      // console.log("form invalid")

      this.validateField("firstName", this.state.firstName)
      this.validateField("lastName", this.state.lastName)
      this.validateField("email", this.state.email)
      this.validateField("phone", this.state.phone)
      // this.validateField("desiredTreatment", this.state.desiredTreatment)
      // this.validateField("location", this.state.location)

      // console.log(this.state.formErrors)
    }
  }

  render() {
    const { btntext, column, pathname } = this.props

    let loc = ""

    if (pathname) {
      loc = pathname
      loc = loc.replace("location", "")
      // loc = loc.replace('/', "")
      loc = loc.replace(/\//g, "")
    }

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
              <Form
                name="Medlaser NEW LEAD - Contact Form"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/thank-you/"
                onSubmit={this.handleSubmit}
                className="FormStep1Wrapper "
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="Medlaser NEW LEAD - Contact Form"
                />

                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>
                <Col lg={4}>
                  <p className="para">Step 1 of 2</p>
                  <h3 className="headerWrapper"> Select Date & Time</h3>
                  <div className="formFieldWrapper ">
                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange("date")}
                        type="date"
                        placeholder="Choose Date"
                        ref="date"
                        name="date"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange("time")}
                        type="time"
                        placeholder="Choose Time"
                        ref="time"
                        name="time"
                      />
                    </Form.Group>
                  </div>
                </Col>

                <Col lg={8}>
                  <p className="para">Step 2 of 2</p>
                  <h3 className="headerWrapper"> Enter your information</h3>

                  <div className="formField_textWrapper">
                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange("firstName")}
                        type="text"
                        placeholder="First Name"
                        ref="firstName"
                        name="firstName"
                      />
                      <p className="ErrorMessage">
                        {this.state.formErrors.firstName}
                      </p>
                    </Form.Group>

                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange("lastName")}
                        type="text"
                        placeholder="Last Name"
                        ref="lastName"
                        name="lastName"
                      />
                      <p className="ErrorMessage">
                        {this.state.formErrors.lastName}
                      </p>
                    </Form.Group>
                  </div>

                  <div className="formField_textWrapper">
                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange("email")}
                        type="email"
                        placeholder="Email"
                        ref="email"
                        name="email"
                      />
                      <p className="ErrorMessage">
                        {this.state.formErrors.email}
                      </p>
                    </Form.Group>

                    <Form.Group>
                      <Form.Control
                        onChange={this.handleChange("phone")}
                        type="tel"
                        placeholder="Phone"
                        ref="phone"
                        name="phone"
                      />
                      <p className="ErrorMessage">
                        {this.state.formErrors.phone}
                      </p>
                    </Form.Group>
                  </div>

                  <Button type="submit" className="btn btn-red btn btn-primary">
                    {/*btntext*/}
                    submit
                  </Button>
                </Col>
              </Form>

              <div>
                {/* Email send block */}
                {this.state.emailSent ? (
                  <div
                  //className={styles.SuccessBlock}
                  >
                    <p>Thank you! Email has been sent</p>
                  </div>
                ) : (
                  ""
                )}

                {/* Error block */}
                {this.state.formErrors.firstName ||
                this.state.formErrors.lastName ||
                this.state.formErrors.email ||
                this.state.formErrors.phone ||
                this.state.formErrors.desiredTreatment ||
                this.state.formErrors.location ? (
                  <div
                  //className={styles.ErrorBlock}
                  >
                    <p>Some Fields are invalid</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Col>
          </Row>
        </section>
      </>
    )
  }
}

export default BookingComponentLocation
