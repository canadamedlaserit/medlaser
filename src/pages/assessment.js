import React from "react"
// import { graphql } from "gatsby"
// import SEO from "../components/seo"
import AlcoholTest from "../components/quiz-home"
import Layout from "../components/Layout"

const AlcoholTestPage = ({ data }) => {
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
