import React, { Component } from "react"
import { Form, Button } from "react-bootstrap"
import styles from "./Form.module.scss"

export class InjuryForm extends Component {
  render() {
    const { btntext } = this.props

    return (
      <div className={styles.FormWrapper}>
        <Form className={styles.Form}>
          <div className={styles.FormColumn}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={styles.Form___formControl}
                type="text"
                placeholder="First Name"
              />
            </Form.Group>
          </div>

          <div className={styles.FormColumn}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={styles.Form___formControl}
                type="text"
                placeholder="Last Name"
              />
            </Form.Group>
          </div>

          <div className={styles.FormColumn}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={styles.Form___formControl}
                type="text"
                placeholder="Phone"
              />
            </Form.Group>
          </div>

          <div className={styles.FormColumn}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={styles.Form___formControl}
                type="email"
                placeholder="Email"
                ref="email"
              />
            </Form.Group>
          </div>

          <div className={styles.FormColumn}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={styles.Form___formControl}
                defaultValue={"DEFAULT"}
                as="select"
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
            </Form.Group>
          </div>

          <div className={styles.FormColumnFull}>
            <Form.Group className={styles.Form___group}>
              <Form.Control
                className={styles.Form___formControl}
                as="textarea"
                placeholder="Message"
                rows="5"
              />
            </Form.Group>
          </div>


          <Button
            className={` ${styles.Form___formSubmit} btn btn-red`}
            // onClick={this.handleSubmit}
            type="submit"
          >
            {btntext}
          </Button>
        </Form>
        <div className={`${styles.panel} ${styles.panelDefault}`}>
          {/* <FormErrors formErrors={this.state.formErrors} /> */}
        </div>
      </div>
    )
  }
}

export default InjuryForm
