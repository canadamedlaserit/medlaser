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
import { Form, Button } from "react-bootstrap"
import { navigate } from "gatsby-link"
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
  desiredTreatment: "",
  location: "",

  firstNameValid: false,
  lastNameValid: false,
  emailValid: false,
  phoneValid: false,
  desiredTreatmentValid: false,
  locationValid: false,
  formValid: false,
  emailSent: false,

  formErrors: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    desiredTreatment: "",
    location: "",
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
      initialState.location = loc
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
    this.refs.desiredTreatment.value = "DEFAULT"
    this.refs.location.value = "DEFAULT"
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
    let desiredTreatmentValid = this.state.desiredTreatmentValid
    let locationValid = this.state.locationValid

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

      case "desiredTreatment":
        desiredTreatmentValid = value.length >= 1
        fieldValidationErrors.desiredTreatment = desiredTreatmentValid
          ? ""
          : "Select Desired Treatment"

        break

      case "location":
        locationValid = value.length >= 1
        fieldValidationErrors.location = locationValid ? "" : "Enter Location"

        break

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
        desiredTreatmentValid: desiredTreatmentValid,
        locationValid: locationValid,
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
        this.state.phoneValid &&
        this.state.desiredTreatmentValid &&
        this.state.locationValid,
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
          console.log("form-submitted")
        )
        .catch(error => alert(error))
    } else {
      // console.log("form invalid")

      this.validateField("firstName", this.state.firstName)
      this.validateField("lastName", this.state.lastName)
      this.validateField("email", this.state.email)
      this.validateField("phone", this.state.phone)
      this.validateField("desiredTreatment", this.state.desiredTreatment)
      this.validateField("location", this.state.location)

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
      <div>
        <Form
          name="Medlaser NEW LEAD - Contact Form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you/"
          onSubmit={this.handleSubmit}
          //className={styles.Form}
        >
          <input
            type="hidden"
            name="form-name"
            value="Medlaser NEW LEAD - Contact Form"
          />

          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div
          // className={`${styles.FormColumn} ${
          //   column ? styles.FormColumnType : ""
          // }`}
          >
            <Form.Group
            //className={styles.Form___group}
            >
              <Form.Control
                // className={`${styles.Form___formControl} ${
                //   this.state.formErrors.firstName ? styles.ErrorField : ""
                // }`}
                onChange={this.handleChange("firstName")}
                type="text"
                placeholder="First Name"
                ref="firstName"
                name="firstName"
              />
              <p
              //className={styles.ErrorMessage}
              >
                {this.state.formErrors.firstName}
              </p>
            </Form.Group>
          </div>

          <div
          // className={`${styles.FormColumn} ${
          //   column ? styles.FormColumnType : ""
          // }`}
          >
            <Form.Group
            // className={styles.Form___group}
            >
              <Form.Control
                // className={`${styles.Form___formControl} ${
                //   this.state.formErrors.lastName ? styles.ErrorField : ""
                // }`}
                onChange={this.handleChange("lastName")}
                type="text"
                placeholder="Last Name"
                ref="lastName"
                name="lastName"
              />
              <p
              //className={styles.ErrorMessage}
              >
                {this.state.formErrors.lastName}
              </p>
            </Form.Group>
          </div>

          <div
          // className={`${styles.FormColumn} ${
          //   column ? styles.FormColumnType : ""
          // }`}
          >
            <Form.Group
            //className={styles.Form___group}
            >
              <Form.Control
                // className={`${styles.Form___formControl} ${
                //   this.state.formErrors.email ? styles.ErrorField : ""
                // }`}
                onChange={this.handleChange("email")}
                type="email"
                placeholder="Email"
                ref="email"
                name="email"
              />
              <p
              //className={styles.ErrorMessage}
              >
                {this.state.formErrors.email}
              </p>
            </Form.Group>
          </div>

          <div
          // className={`${styles.FormColumn} ${
          //   column ? styles.FormColumnType : ""
          // }`}
          >
            <Form.Group
            //className={styles.Form___group}
            >
              <Form.Control
                // className={`${styles.Form___formControl} ${
                //   this.state.formErrors.phone ? styles.ErrorField : ""
                // }`}
                onChange={this.handleChange("phone")}
                type="tel"
                placeholder="Phone"
                ref="phone"
                name="phone"
              />
              <p
              //className={styles.ErrorMessage}
              >
                {this.state.formErrors.phone}
              </p>
            </Form.Group>
          </div>

          <div
          // className={`${styles.FormColumn} ${
          //   column ? styles.FormColumnType : ""
          // }`}
          >
            <Form.Group
            //className={styles.Form___group}
            >
              <Form.Control
                // className={`${styles.Form___formControl} ${
                //   this.state.formErrors.desiredTreatment
                //     ? styles.ErrorField
                //     : ""
                // }`}
                onChange={this.handleChange("desiredTreatment")}
                defaultValue={"DEFAULT"}
                as="select"
                ref="desiredTreatment"
                name="desiredTreatment"
              >
                <option disabled value="DEFAULT">
                  Desired Treatment
                </option>
                <option>Laser Hair Removal</option>
                <option>Skin Treatments</option>
                <option>CoolSculpting Body</option>
                <option>CoolSculpting Chin</option>
                <option>Cosmetic Injections</option>
                <option>Skin Tightening</option>
                <option>Cellulite</option>
                <option>Hair Restoration</option>
                <option>Anti Aging</option>
                <option>Microblading</option>
                <option>Nail Fungus</option>
              </Form.Control>
              <p
              //className={styles.ErrorMessage}
              >
                {this.state.formErrors.desiredTreatment}
              </p>
            </Form.Group>
          </div>

          <div
          // className={`${styles.FormColumn} ${
          //   column ? styles.FormColumnType : ""
          // }`}
          >
            <Form.Group
            //className={styles.Form___group}
            >
              {loc !== "" ? (
                <Form.Control
                  // className={`${styles.Form___formControl} ${
                  //   this.state.formErrors.location ? styles.ErrorField : ""
                  // }`}
                  onChange={this.handleChange("location")}
                  // as="select"
                  value={loc.charAt(0).toUpperCase() + loc.slice(1)}
                  ref="location"
                  name="location"
                  placeholder="City Name"
                >
                  {/* <option disabled value="DEFAULT">
                    Location
                  </option>
                  <option>{loc}</option> */}
                </Form.Control>
              ) : (
                <Form.Control
                  // className={`${styles.Form___formControl} ${
                  //   this.state.formErrors.location ? styles.ErrorField : ""
                  // }`}
                  onChange={this.handleChange("location")}
                  defaultValue={"DEFAULT"}
                  as="select"
                  placeholder="City Name"
                  ref="location"
                  name="location"
                >
                  <option disabled value="DEFAULT">
                    Location
                  </option>
                  <option>Vaughan</option>
                  <option>Mississauga</option>
                  <option>Toronto</option>
                  <option>Newmarket</option>
                  <option>Thornhill</option>
                  <option>Maple</option>
                </Form.Control>
              )}
              <p
              //className={styles.ErrorMessage}
              >
                {this.state.formErrors.location}
              </p>
            </Form.Group>
          </div>

          <Button
            // className={` ${styles.Form___formSubmit} btn btn-red ${
            //   column ? styles.ButtonColumnType : ""
            // }`}
            // onClick={this.handleSubmit}
            type="submit"
          >
            {/*btntext*/}
            submit
          </Button>
        </Form>

        <div
        // className={`${styles.NotificationBlock} ${
        //   column ? styles.NotificationBlockType : ""
        // }`}
        >
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
      </div>
    )
  }
}

export default BookingComponentLocation
