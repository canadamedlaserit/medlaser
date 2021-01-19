import React from "react"
import QuizHome from "../components/quiz-home"
import Layout from "../components/Layout"
import BookingComponentLocation from "../components/locationSpecificBookingSec/BookingComponent_Location"

const AlcoholTestPage = ({ data }) => {
  return (
    <>
      <Layout>
        {/* <QuizHome />*/}
        <div style={{ marginTop: "20rem" }}>
          <BookingComponentLocation />
        </div>
      </Layout>
    </>
  )
}

export default AlcoholTestPage
