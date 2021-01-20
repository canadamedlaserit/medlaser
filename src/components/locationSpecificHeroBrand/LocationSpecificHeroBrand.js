import React from "react"
import { graphql } from "gatsby"
import "./locationSpecificHeroBrand.scss"
import { Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
//icon

export const fragment = graphql`
  fragment Locationspecificherobrand on WPGraphQL_Page_Sectionfields_Sections_Locationspecificherobrand {
    btnCall
    btnCallLink
    btnPromo
    btnPromoLink
    description
    title
  }
`

const LocationSpecificHeroBrand = ({
  btnCall,
  btnPromo,
  description,
  title,
}) => {
  return (
    <section id="LocationHeroBrand">
      <div className="brandWrapper">
        <Col lg={4}>
          <div
            className="titleWrapper"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <div
            className="disc"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="btnHeroWrapper">
            <div className="RightSide">
              <Button className="PhoneWrapper callBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.203"
                  height="25.25"
                  viewBox="0 0 25.203 25.25"
                >
                  <path
                    className="PhoneSvg"
                    d="M26.369,20.405v3.5a2.333,2.333,0,0,1-2.543,2.333,23.087,23.087,0,0,1-10.068-3.581,22.748,22.748,0,0,1-7-7A23.087,23.087,0,0,1,3.177,5.543,2.333,2.333,0,0,1,5.5,3H9a2.333,2.333,0,0,1,2.333,2.007,14.979,14.979,0,0,0,.817,3.278,2.333,2.333,0,0,1-.525,2.461l-1.482,1.482a18.665,18.665,0,0,0,7,7l1.482-1.482a2.333,2.333,0,0,1,2.461-.525,14.979,14.979,0,0,0,3.278.817,2.333,2.333,0,0,1,2.007,2.368Z"
                    transform="translate(-2.167 -2)"
                  />
                </svg>
                {btnCall}
              </Button>
            </div>
            <div>
              <Button className="promoBtn">{btnPromo}</Button>
            </div>
          </div>
        </Col>
      </div>
    </section>
  )
}
export default LocationSpecificHeroBrand
