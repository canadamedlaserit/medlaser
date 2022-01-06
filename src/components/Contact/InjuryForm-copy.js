import { navigate } from "gatsby-link";
import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Recaptcha from 'react-google-recaptcha';
import styles from "./Form.module.scss";

const RECAPTCHA_KEY = '6LfBo_EdAAAAAE_r6XsccDAlO6xHWcbnZyRV6Lkn'

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  queryType: "",
  message: "",

  firstNameValid: false,
  lastNameValid: false,
  emailValid: false,
  phoneValid: false,
  queryTypeValid: false,
  messageValid: false,

  formValid: false,
  emailSent: false,

  formErrors: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    queryType: "",
    message: "",
  },
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const InjuryForm = ({ btntext }) => {
  const [state, setState] = useState(initialState);
  const recaptchaRef = useRef()

  function validateField(fieldName, value) {
    let fieldValidationErrors = state.formErrors

    let firstNameValid = state.firstNameValid
    let lastNameValid = state.lastNameValid
    let emailValid = state.emailValid
    let phoneValid = state.phoneValid
    let queryTypeValid = state.queryTypeValid
    let messageValid = state.messageValid

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

      case "queryType":
        queryTypeValid = value.length >= 1
        fieldValidationErrors.queryType = queryTypeValid
          ? ""
          : "Select Query Type"
        break

      case "message":
        messageValid = value.length >= 1
        fieldValidationErrors.message = messageValid
          ? ""
          : "Please, fill out message field"
        break

      default:
        break
    }

    setState(
      {
        ...state,
        [fieldName]: value,
        formErrors: fieldValidationErrors,
        firstNameValid: firstNameValid,
        lastNameValid: lastNameValid,
        emailValid: emailValid,
        phoneValid: phoneValid,
        queryTypeValid: queryTypeValid,
        messageValid: messageValid,
        formValid:
          state.firstNameValid &&
          state.lastNameValid &&
          state.emailValid &&
          state.phoneValid &&
          state.queryTypeValid &&
          state.messageValid,
      }
    )
  }

  const handleChange = (e) => {

    let fieldName = e.target.name
    let value = e.target.value

    validateField(fieldName, value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    const recaptchaValue = recaptchaRef.current.getValue()

    if (state.formValid) {
      const form = e.target
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "Medlaser NEW LEAD - Contact Us",
          'g-recaptcha-response': recaptchaValue,
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute("action")))
        .catch(error => alert(error))
    } else {
      validateField("firstName", state.firstName)
      validateField("lastName", state.lastName)
      validateField("email", state.email)
      validateField("phone", state.phone)
      validateField("message", state.message)
      validateField("queryType", state.queryType)
    }
    console.warn(state)
  }

  // useEffect(() => {
  //   console.warn(state)
  // }, [state])

  return (
    <div className={styles.FormWrapper}>
      <Form
        name="Medlaser NEW LEAD - Contact Us"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        action="/thank-you/"
        onSubmit={handleSubmit}
        className={styles.Form}
      >
        <input
          type="hidden"
          name="form-name"
          value="Medlaser NEW LEAD - Contact Us"
        />

        <p className="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <div className={styles.FormColumn}>
          <Form.Group className={styles.Form___group}>
            <Form.Control
              className={`${styles.Form___formControl} ${
                state.formErrors.firstName ? styles.ErrorField : ""
              }`}
              onChange={handleChange}
              type="text"
              placeholder="First Name"
              name="firstName"
            />
            <p className={styles.ErrorMessage}>
              {state.formErrors.firstName}
            </p>
          </Form.Group>
        </div>

        <div className={styles.FormColumn}>
          <Form.Group className={styles.Form___group}>
            <Form.Control
              className={`${styles.Form___formControl} ${
                state.formErrors.lastName ? styles.ErrorField : ""
              }`}
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
              name="lastName"
            />
            <p className={styles.ErrorMessage}>
              {state.formErrors.lastName}
            </p>
          </Form.Group>
        </div>

        <div className={styles.FormColumn}>
          <Form.Group className={styles.Form___group}>
            <Form.Control
              className={`${styles.Form___formControl} ${
                state.formErrors.email ? styles.ErrorField : ""
              }`}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              name="email"
            />
            <p className={styles.ErrorMessage}>
              {state.formErrors.email}
            </p>
          </Form.Group>
        </div>

        <div className={styles.FormColumn}>
          <Form.Group className={styles.Form___group}>
            <Form.Control
              className={`${styles.Form___formControl} ${
                state.formErrors.phone ? styles.ErrorField : ""
              }`}
              onChange={handleChange}
              type="tel"
              placeholder="Phone"
              name="phone"
            />
            <p className={styles.ErrorMessage}>
              {state.formErrors.phone}
            </p>
          </Form.Group>
        </div>

        <div className={`${styles.FormColumn} ${styles.QueryTypeColumn}`}>
          <Form.Group className={styles.Form___group}>
            <Form.Control
              className={`${styles.Form___formControl} ${
                state.formErrors.queryType ? styles.ErrorField : ""
              }`}
              onChange={handleChange}
              defaultValue={"DEFAULT"}
              as="select"
              name="queryType"
            >
              <option disabled value="DEFAULT">
                Query Type
              </option>
              <option>Sales</option>
              <option>Finance</option>
              <option>Marketing</option>
              <option>Customer Care</option>
              <option>Other Inquires</option>
            </Form.Control>
            <p className={styles.ErrorMessage}>
              {state.formErrors.queryType}
            </p>
          </Form.Group>
        </div>

        <div className={styles.FormColumnFull}>
          <Form.Group className={styles.Form___group}>
            <Form.Control
              className={styles.Form___formControl}
              onChange={handleChange}
              as="textarea"
              placeholder="Your Message"
              rows="5"
              name="message"
            />

            <p className={styles.ErrorMessage}>
              {state.formErrors.message}
            </p>
          </Form.Group>
        </div>
        <Recaptcha
          ref={recaptchaRef}
          sitekey={RECAPTCHA_KEY}
          size="normal"
          id="recaptcha-google"
        />
        <Button
          className={` ${styles.Form___formSubmit} btn btn-red`}
          type="submit"
        >
          {btntext}
        </Button>
      </Form>

      <div className={styles.NotificationBlock}>
        {/* Email send block */}
        {state.emailSent ? (
          <div className={styles.SuccessBlock}>
            <p>Thank you! Email has been sent</p>
          </div>
        ) : (
          ""
        )}

        {/* Error block */}
        {state.formErrors.firstName ||
        state.formErrors.lastName ||
        state.formErrors.email ||
        state.formErrors.phone ||
        state.formErrors.queryType ? (
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

export default InjuryForm
