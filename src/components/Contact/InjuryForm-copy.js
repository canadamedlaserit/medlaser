import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./Form.module.scss";

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

const InjuryForm = ({ btntext }) => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });

    console.log('state', state);
  }


  return (
    <div className={styles.FormWrapper}>
      <Form
        name="Medlaser NEW LEAD - Contact Us"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/thank-you/"
        onSubmit="{this.handleSubmit}"
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
