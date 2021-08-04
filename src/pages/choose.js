import React from "react"
import styled from "styled-components"
import AcuityFrame from "../components/homeComponents/AcuityScheduling/AcuityFrame"
import Layout from "../components/Layout"

const Div = styled.div`
  min-height: 60vh;
  padding-top: 150px;
  padding-bottom: 50px;
  background: rgb(156, 26, 59);
  h3, label {
    color: #fff;
  }
`

const Choose = () => (
  <Layout>
    <Div>
      <AcuityFrame />
    </Div>
  </Layout>
)

export default Choose
