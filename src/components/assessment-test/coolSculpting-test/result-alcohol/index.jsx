import React, { useState, useEffect } from "react"

import { Container, Row, Col, Button } from "react-bootstrap"
import Loader from "./loader"
import "./_index.scss"
import { Link } from "gatsby"

const ResultAlcohol = ({ payload, result }) => {
  console.log(payload, "payload end ")
  console.log(result, "result end ")
  const [answer, setanswer] = useState(null)
  useEffect(() => {
    {
      setTimeout(function() {
        if (
          result.includes("green") &&
          !result.includes("yellow") &&
          result.includes("red")
        ) {
          setanswer(
            "We hate to be the bearer of bad news, butunfortunately it looks like you’re not a candidate!  Well, better to find out sooner than later.  But wait, don’t leave us yet!  Take our next quiz to see what other treatments may be suited for you!”“To schedule your complimentary consultation, <a>click here now</a>"
          )
        } else if (
          result.includes("green") &&
          !result.includes("yellow") &&
          !result.includes("red")
        ) {
          setanswer(
            "Congratulations!  Based on the answers you have submitted, you are a candidate for the CoolSculpting treatmen"
          )
        } else {
          setanswer("Sorry! You didn't answer any questions ")
        }
      }, 2000)
    }
  }, [])
  return (
    <section id="alcohol-result-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={5} md={8} className="text-center">
            <h2 style={{ color: "#9c1a3b" }}>
              Good news! Your results are in! For optimal results, and based on
              your answers, we would recommend you start off with…. drum roll
              please….{" "}
            </h2>
            {answer ? <p>{answer}</p> : <Loader />}{" "}
            <Link to="/assessment">
              <button className="contact-btn">Home</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ResultAlcohol
