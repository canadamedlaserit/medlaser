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
      const purple = result.includes("purple")
      const blue = result.includes("blue")
      const grey = result.includes("grey")
      const teal = result.includes("teal")
      const dark_green = result.includes("dark green")

      setTimeout(function() {
        if (
          yellow &&
          baby_blue &&
          purple &&
          blue &&
          grey &&
          teal &&
          dark_green &&
          green &&
          red
        ) {
          setanswer(
            "We hate to be the bearer of bad news, but unfortunately it looks like you’re not a candidate!  Well, better to find out sooner than later.  But wait, don’t leave us yet!  Take our next quiz to see what other treatments may be suited for you"
          )
        } else if (
          yellow &&
          baby_blue &&
          purple &&
          blue &&
          grey &&
          teal &&
          dark_green &&
          !green &&
          red
        ) {
          setanswer(
            "We hate to be the bearer of bad news, but unfortunately it looks like you’re not a candidate!  Well, better to find out sooner than later.  But wait, don’t leave us yet!  Take our next quiz to see what other treatments may be suited for you!”“To schedule your complimentary consultation, click here now"
          )
        } else if (
          yellow &&
          !baby_blue &&
          !purple &&
          !blue &&
          !grey &&
          !teal &&
          !dark_green &&
          green &&
          !red
        ) {
          setanswer(
            "A microneedling or fractional laser treatment package, plus an at-home skincare routine"
          )
        } else if (
          !yellow &&
          baby_blue &&
          !purple &&
          !blue &&
          !grey &&
          !teal &&
          !dark_green &&
          green &&
          !red
        ) {
          setanswer(
            "Botox and Filler / fractional / Microneedling, plus an at-home skincare routine"
          )
        } else if (
          !yellow &&
          !baby_blue &&
          purple &&
          !blue &&
          !grey &&
          !teal &&
          !dark_green &&
          green &&
          !red
        ) {
          setanswer(
            "A chemical peel / microneedling / fractional laser skin resurfacing treatment package, plus an at-home skincare routine"
          )
        } else if (
          !yellow &&
          !baby_blue &&
          !purple &&
          blue &&
          !grey &&
          !teal &&
          !dark_green &&
          green &&
          !red
        ) {
          setanswer(
            "A chemical peel or Aquapure facial package, plus an at-home skincare routine"
          )
        } else if (
          !yellow &&
          !baby_blue &&
          !purple &&
          !blue &&
          grey &&
          !teal &&
          !dark_green &&
          green &&
          !red
        ) {
          setanswer(
            "A microneedling treatment package or botox, plus an at-home skincare routine"
          )
        } else if (
          !yellow &&
          !baby_blue &&
          !purple &&
          !blue &&
          !grey &&
          teal &&
          !dark_green &&
          green &&
          !red
        ) {
          setanswer(
            "A Radiofrequency skin tightening treatment package or cosmetic injections, plus an at-home skincare routine"
          )
        } else if (
          !yellow &&
          !baby_blue &&
          !purple &&
          !blue &&
          !grey &&
          !teal &&
          dark_green &&
          green &&
          !red
        ) {
          setanswer(
            "A combination of chemical peels and microneedlingor fractional laser treatments, plus an at-home skincare routine"
          )
        } else {
          setanswer("Sorry!  treatments may not be suited for you ")
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
