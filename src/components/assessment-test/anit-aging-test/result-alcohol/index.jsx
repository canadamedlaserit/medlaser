import React, { useState, useEffect } from "react"

import { Container, Row, Col, Button } from "react-bootstrap"
import Loader from "./loader"
import "./_index.scss"
import { Link } from "gatsby"

const ResultAlcohol = ({ payload, result }) => {
  // console.log(payload, "payload end ")
  // console.log(result, "result end ")
  const [answer, setanswer] = useState(null)
  useEffect(() => {
    {
      const green = result.includes("green")
      const yellow = result.includes("yellow")
      const red = result.includes("red")
      const baby_blue = result.includes("baby blue")

      setTimeout(function() {
        if (green && yellow && baby_blue && red) {
          setanswer(
            "We hate to be the bearer of bad news, but unfortunately it looks like you’re not a candidate!  Well, better to find out sooner than later.  But wait, don’t leave us yet!  Take our next quiz to see what other treatments may be suited for you! at-home skincare routine"
          )
        } else if (green && !yellow && !baby_blue && !red) {
          setanswer(
            "Based on the answers you have submitted, you’re best coming in for an in-person consultation so we can assess your skin and offer you the best suited treatment for your needs"
          )
        } else if (green && !yellow && !baby_blue && red) {
          setanswer(
            "We hate to be the bearer of bad news, but unfortunately it looks like you’re not a candidate!  Well, better to find out sooner than later.  But wait, don’t leave us yet!  Take our next quiz to see what other treatments may be suited for you!"
          )
        } else if (green && yellow && !baby_blue && !red) {
          setanswer(
            "A radiofrequency treatment series or cosmetic injectables plus an at-home skincare routine"
          )
        } else if (green && !yellow && baby_blue && !red) {
          setanswer(
            "Cosmetic injectables, a microneedling treatment series, or fractional laser skin resurfacing, plus an at-home skincare routine"
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
            {/* <h1>24</h1>
            <div className="point-txt">points</div> */}
            <h2 style={{ color: "#9c1a3b" }}>
              Good news! Your results are in! For optimal results, and based on
              your answers, we would recommend you start off with. drum roll
              please.{" "}
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
