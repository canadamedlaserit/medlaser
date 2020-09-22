import React from "react"
// import { graphql } from "gatsby"
// import Header from "../components/header"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
import AlcoholTest from "../components/assessment-test/alcohol-test"
import Layout from "../components/Layout"

const AlcoholTestPage = props => {
  console.log(props)
  return (
    <>
      <Layout>
        {/* <SEO title="Qualifications Quiz" /> */}
        {/* <Header headerShadow="-4px 4px 9px rgba(204, 204, 204, 0.66)" /> */}
        <AlcoholTest />
      </Layout>
    </>
  )
}

export default AlcoholTestPage
