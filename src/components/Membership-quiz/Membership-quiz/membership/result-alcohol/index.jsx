import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Loader from "./loader"
import "./_index.scss"
//router
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
          result.includes("yellow") &&
          result.includes("red")
        ) {
          setanswer(
            "We hate to be the bearer of bad news, but unfortunately laser is unable to target blonde, red or grey hair!  Well, better to find out sooner than later.  But wait, don’t leave us!  Take our next quiz to see what other treatments may be suited for you!"
          )
        } else if (
          result.includes("green") &&
          result.includes("yellow") &&
          !result.includes("red")
        ) {
          setanswer("A 5 session package")
        } else if (
          result.includes("green") &&
          !result.includes("yellow") &&
          !result.includes("red")
        ) {
          setanswer("A 12 month package")
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
            {/* <h1>24</h1>
            <div className="point-txt">points</div> */}
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
