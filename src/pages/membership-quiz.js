import React from "react"
import MembershipQuiz from "../components/MembershipQuiz/membership"
import Layout from "../components/Layout"
const MembershipQuizPage = props => {
  console.log(props)
  return (
    <>
      <Layout>
        <MembershipQuiz />
      </Layout>
    </>
  )
}

export default MembershipQuizPage
