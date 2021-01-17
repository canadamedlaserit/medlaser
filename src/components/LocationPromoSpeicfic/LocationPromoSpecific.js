import { Link } from "gatsby"
import React from "react"
import "./locationPromoSpecific.scss"
import CMLQUIZ from "./../Membership-quiz/membership/index"
/**/
export const fragment = graphql`
  fragment Locationspecificpromo on WPGraphQL_Page_Sectionfields_Sections_Locationspecificpromo {
    fieldGroupName
  }
`
const LocationPromoSpecific = () => {
  const TopBarMenu = [
    { name: "About Us", url: "#AboutUs" },
    { name: "Our Treatments", url: "#OurTreatments" },
    { name: "our team", url: "#Ourteam" },
    { name: "Before & After", url: "#Before&After" },
    { name: "FAQ", url: "#FAQ" },
    { name: "Book now", url: "#BookNow" },
  ]
  return (
    <>
      <section id="locationSpecific_topBar">
        <div className="topBarMenu_wrapper">
          <div className="topMenuBar_BrandWrapper">
            <Link>Promotion</Link>
          </div>
          <div className="topMenuBar_Nav_wrapper">
            {TopBarMenu.map(data => (
              <Link>{data.name}</Link>
            ))}
          </div>
        </div>
      </section>
      <section id="locationSpecific_PromoSection">
        <CMLQUIZ
          ComponentFor="locationSection"
          locationComponent="locationPromoStyles"
        />
      </section>
    </>
  )
}

export default LocationPromoSpecific
