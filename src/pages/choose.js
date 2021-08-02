import React from "react"
import { Link } from "gatsby"
//import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import ChooseLock from "../components/homeComponents/AcuityScheduling/ChooseLock"
import styled from "styled-components"
import Layout from "../components/Layout"

const MainSection = styled.section`
max-width: 700px;
padding-top: 100px;
margin: 20px auto;
a:nth-child(1) {
  top: 50;
}
`
const Title = styled.h2`
max-width: 700px;
font-size: 2rem !important;
margin: 10px auto;
`
const IframeBox = styled.div`
max-width: 800px;
margin: 20px auto;
iframe {
  width: 100%;
}
`
const BtnReturn = styled.p`
padding: 0;
margin-top: 50px;
`

const AcuityScheduling = props => {
  let iFr = document.getElementById("iframe")
  let src = document.createAttribute("src")
  src.value =
    "https://app.acuityscheduling.com/schedule.php?owner=20480304&owner=20480304&appointmentType=" +
    props
  iFr.setAttributeNode(src)
}

const eventhandler = data => {
  console.log(data)
  var {selectedValue} = data
  let appType = selectedValue
  AcuityScheduling(appType)
}

const Choose = () => (
  <Layout>
    <MainSection>
      <Title>Choose location</Title>
      <ChooseLock onChange={eventhandler} />
      <div style={{ height: "fit-content" }}>
        <IframeBox>
          <iframe
            id="iframe"
            src="https://app.acuityscheduling.com/schedule.php?owner=20480304&owner=20480304&appointmentType=19135190"
            title="Schedule Appointment"
            width="100%"
            height="610"
            frameBorder="0"
          ></iframe>
          <script
            src="https://embed.acuityscheduling.com/js/embed.js"
            type="text/javascript"
          ></script>
        </IframeBox>
      </div>
    </MainSection>
  </Layout>
)

export default Choose
