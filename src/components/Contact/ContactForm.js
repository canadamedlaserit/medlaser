import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"
import querystring from "query-string"
import axios from "axios"
import { navigate } from "gatsby-link"
import styles from "./Form.module.scss"
import { wpUrl } from "../../../globals"

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

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export class ContactForm extends Component {
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

        console.log(value)
        break

      case "location":
        locationValid = value.length >= 1
        fieldValidationErrors.location = locationValid ? "" : "Select Location"

        console.log(value)
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
      console.log("form valid")

      const data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
        email: this.state.email,
        desiredTreatment: this.state.desiredTreatment,
        location: this.state.location,
      }

      this.reset()

      const form = e.target
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...data,
        }),
      })
        .then(() => navigate(form.getAttribute("action")))
        .catch(error => alert(error))

      // axios
      //   .post(`${wpUrl}/contact.php`, querystring.stringify(data))
      //   .then(res => {
      //     this.setState({ emailSent: true })

      //     setTimeout(() => {
      //       this.setState({ emailSent: false })
      //     }, 2000)

      //     console.log(res + "resw")
      //   })
    } else {
      console.log("form invalid")

      this.validateField("firstName", this.state.firstName)
      this.validateField("lastName", this.state.lastName)
      this.validateField("email", this.state.email)
      this.validateField("phone", this.state.phone)
      this.validateField("desiredTreatment", this.state.desiredTreatment)
      this.validateField("location", this.state.location)

      console.log(this.state.formErrors)
    }
  }

  render() {
    const { btntext, column } = this.props

    return (
      <div className={styles.FormWrapper}>
        <Form
          name="contact"
          method="post"
          action="/test/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          className={styles.Form}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div
            className={`${styles.FormColumn} ${
              column ? styles.FormColumnType : ""
            }`}
          >
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={`${styles.Form___formControl} ${
                  this.state.formErrors.firstName ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("firstName")}
                type="text"
                placeholder="First Name"
                ref="firstName"
              />
              <p className={styles.ErrorMessage}>
                {this.state.formErrors.firstName}
              </p>
            </Form.Group>
          </div>

          <div
            className={`${styles.FormColumn} ${
              column ? styles.FormColumnType : ""
            }`}
          >
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={`${styles.Form___formControl} ${
                  this.state.formErrors.lastName ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("lastName")}
                type="text"
                placeholder="Last Name"
                ref="lastName"
              />
              <p className={styles.ErrorMessage}>
                {this.state.formErrors.lastName}
              </p>
            </Form.Group>
          </div>

          <div
            className={`${styles.FormColumn} ${
              column ? styles.FormColumnType : ""
            }`}
          >
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={`${styles.Form___formControl} ${
                  this.state.formErrors.phone ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("phone")}
                type="tel"
                placeholder="Phone"
                ref="phone"
              />
              <p className={styles.ErrorMessage}>
                {this.state.formErrors.phone}
              </p>
            </Form.Group>
          </div>

          <div
            className={`${styles.FormColumn} ${
              column ? styles.FormColumnType : ""
            }`}
          >
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={`${styles.Form___formControl} ${
                  this.state.formErrors.email ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("email")}
                type="email"
                placeholder="Email"
                ref="email"
              />
              <p className={styles.ErrorMessage}>
                {this.state.formErrors.email}
              </p>
            </Form.Group>
          </div>

          <div
            className={`${styles.FormColumn} ${
              column ? styles.FormColumnType : ""
            }`}
          >
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={`${styles.Form___formControl} ${
                  this.state.formErrors.desiredTreatment
                    ? styles.ErrorField
                    : ""
                }`}
                onChange={this.handleChange("desiredTreatment")}
                defaultValue={"DEFAULT"}
                as="select"
                ref="desiredTreatment"
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
              <p className={styles.ErrorMessage}>
                {this.state.formErrors.desiredTreatment}
              </p>
            </Form.Group>
          </div>

          <div
            className={`${styles.FormColumn} ${
              column ? styles.FormColumnType : ""
            }`}
          >
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={`${styles.Form___formControl} ${
                  this.state.formErrors.location ? styles.ErrorField : ""
                }`}
                onChange={this.handleChange("location")}
                defaultValue={"DEFAULT"}
                as="select"
                ref="location"
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
              <p className={styles.ErrorMessage}>
                {this.state.formErrors.location}
              </p>
            </Form.Group>
          </div>

          <Button
            className={` ${styles.Form___formSubmit} btn btn-red ${
              column ? styles.ButtonColumnType : ""
            }`}
            // onClick={this.handleSubmit}
            type="submit"
          >
            {btntext}
          </Button>
        </Form>

        <div
          className={`${styles.NotificationBlock} ${
            column ? styles.NotificationBlockType : ""
          }`}
        >
          {/* Email send block */}
          {this.state.emailSent ? (
            <div className={styles.SuccessBlock}>
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
            <div className={styles.ErrorBlock}>
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

export default ContactForm
