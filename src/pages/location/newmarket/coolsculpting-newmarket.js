import React from "react"
import { graphql } from "gatsby"
import Layout from "../../../components/Layout"
import SEO from "../../../components/particles/SEO"
import InnerHero from "../../../components/InnerHero/InnerHero"
import BiggerLeftWithButtons from "../../../components/BiggerLeftWithButtons/BiggerLeftWithButtons"
import VideoSlider from "../../../components/VideoSlider/VideoSlider"
import TextFullWidth from "../../../components/TextFullWidth/TextFullWidth"
import TwoSidesLinks from "../../../components/TwoSidesLinks/TwoSidesLinks"
import BiggerRightWithButtons from '../../../components/BiggerRightWithButtons/BiggerRightWithButtons'
import TreatmentAreas2 from "../../../components/TreatmentAreas/TreatmentAreas2"
import LocationMap from "../../../components/LocationMap/LocationMap"
import Faqs from "../../../components/homeComponents/Faqs/Faqs"
import BeforeAfterImage from "../../../components/BeforeAfterImage/BeforeAfterImage"
import Contact from "../../../components/Contact/Contact"
import MoreInfoAnchor from "../../../components/MoreInfoAnchor/MoreInfoAnchor"

export const query = graphql`
  {
    wpgraphql {
      page(id: "coolsculpting-newmarket", idType: URI) {
        id
        title
        slug
        seo {
          title
          metaDesc
          focuskw
          metaKeywords
          metaRobotsNoindex
          metaRobotsNofollow
          opengraphTitle
          opengraphDescription
          opengraphImage {
            altText
            sourceUrl
            srcSet
          }
          twitterTitle
          twitterDescription
          twitterImage {
            altText
            sourceUrl
            srcSet
          }
        }
        sectionFields {
          sections {
            __typename
            ...InnerHeroSection
            ...BiggerLeftWithButtonsSection
            ...VideoSliderSection
            ...TextFullWidthSection
            ...TwoSidesLinksSection
            ...BiggerRightWithButtonsSection
            ...TreatmentAreas2Section
            ...FaqsSection
            ...BeforeAfterImageSection
            ...LocationMapSection
            ... on WPGraphQL_Page_Sectionfields_Sections_Contact {
              fieldGroupName
            }
            ... on WPGraphQL_Page_Sectionfields_Sections_MoreInfoAnchor {
              fieldGroupName
            }
          }
        }
      }
    }
  }
`

const CoolsculptingNewmarket = ({ data, location }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  return (
    <Layout location={location}>
      <SEO data={data.wpgraphql.page} />

      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerhero":
            return <InnerHero key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Biggerleftwithbuttons":
            return <BiggerLeftWithButtons key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Videoslider":
            return <VideoSlider key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Textfullwidth":
            return <TextFullWidth key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Twosideslinks":
            return <TwoSidesLinks key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Biggerrightwithbuttons":
            return <BiggerRightWithButtons key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Treatmentareas2":
            return <TreatmentAreas2 key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Faqs":
            return <Faqs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Beforeafterimage":
            return <BeforeAfterImage key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Locationsmap":
            return <LocationMap key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_MoreInfoAnchor":
            return <MoreInfoAnchor key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default CoolsculptingNewmarket
