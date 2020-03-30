import React from "react"
import Layout from "../components/Layout"

const HairGrowth = ({ location }) => {
  return (
    <Layout location={location}>
      <div
        style={{
          paddingTop: "220px",
          paddingBottom: "120px",
          textAlign: "center",
        }}
      >
        HairGrowth
      </div>
    </Layout>
  )
}

export default HairGrowth