import React from "react"
import { graphql } from "gatsby"

export const fragment = graphql`
  fragment AcuitySchedulingSection on WPGraphQL_Page_Sectionfields_Sections_Acuityscheduling {
    fieldGroupName
  }
`
const AcuityScheduling = () => {
  return (
    <section style={{ height: "60vh" }}>
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=20480304&owner=20480304&appointmentType=18280821"
        width="100%"
        height="800"
        frameBorder="0"
      ></iframe>{" "}
      <script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      ></script>
    </section>
  )
}
export default AcuityScheduling
