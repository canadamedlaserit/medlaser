import { Link } from "gatsby"
import React from "react"
import "./locationPromoSpecific.scss"
import CMLQUIZ from "../MembershipQuiz/membership/index"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { NavLink } from "react-bootstrap"
/**/

export const fragment = graphql`
  fragment Locationspecificpromo on WPGraphQL_Page_Sectionfields_Sections_Locationspecificpromo {
    fieldGroupName,
    promoList {
      promoText
    }
  }
`
const LocationPromoSpecific = (props) => {
  const TopBarMenu = [
    { name: "About Us", url: "#aboutUs" },
    { name: "Our Treatments", url: "#LocationOurTreatment" },
    { name: "our team", url: "#ourTeam" },
    { name: "Before & After", url: "#before&After" },
    { name: "FAQ", url: "#faq" },
    { name: "Book now", url: "#BookingSection_location" },
  ]
  return (
    <div>
      <section id="locationSpecific_topBar">
        <div className="topBarMenu_wrapper">
          <div className="topMenuBar_BrandWrapper">
            <a href="#locationSpecific_PromoSection">Promotion</a>
          </div>
          <div className="topMenuBar_Nav_wrapper">
            {TopBarMenu.map(data => (
              <a href={data.url}>{data.name}</a>
            ))}
          </div>
        </div>
      </section>
      <section id="locationSpecific_PromoSection">
        <CMLQUIZ
          ComponentFor="locationSection"
          locationComponent="locationPromoStyles"
          promoList={props.promoList}
        />
      </section>
    </div>
  )
}
export default LocationPromoSpecific
