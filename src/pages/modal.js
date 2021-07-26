import React from "react"
import { Link } from "gatsby"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import AcuityScheduling from "../components/homeComponents/AcuityScheduling/AcuityScheduling.js"
const ModalExamplePage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <Link to={closeTo}>Close</Link>
        ) : (
          <header>
            <h1>Website Title</h1>
          </header>
        )}

        <h2>Modal Page</h2>
        <AcuityScheduling />
       {/*  <iframe
          src="https://app.acuityscheduling.com/schedule.php?owner=20480304&appointmentType=18280821"
          title="Schedule Appointment"
          width="100%"
          height="800"
          frameBorder="0"
        ></iframe>
        <script
          src="https://embed.acuityscheduling.com/js/embed.js"
          type="text/javascript"
        ></script> */}

        
        <Link to="/">Go back to the homepage</Link>
      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default ModalExamplePage
