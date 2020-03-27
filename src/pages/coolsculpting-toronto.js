import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/particles/SEO"

import InnerHero from "../components/InnerHero/InnerHero"
import Contact from "../components/Contact/Contact"
import BiggerLeftWithButtons from "../components/BiggerLeftWithButtons/BiggerLeftWithButtons"
import TextFullWidth from "../components/TextFullWidth/TextFullWidth"
import VideoSlider from "../components/VideoSlider/VideoSlider"
import BeforeAfter from "../components/BeforeAfter/BeforeAfter"
import TwoSidesLinks from "../components/TwoSidesLinks/TwoSidesLinks"
import LocationMap from "../components/LocationMap/LocationMap"
import TreatmentAreas2 from "../components/TreatmentAreas/TreatmentAreas2"
import LeftRightMultiple from "../components/LeftRightMultiple/LeftRightMultiple"
import Faqs from "../components/homeComponents/Faqs/Faqs"

export const query = graphql`
  {
    wpgraphql {
      page(id: "coolsculpting-toronto", idType: URI) {
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
            ... on WPGraphQL_Page_Sectionfields_Sections_Contact {
              fieldGroupName
            }
            ...BiggerLeftWithButtonsSection
            ...TextFullWidthSection
            ...VideoSliderSection
            ...BeforeAfterSection
            ...TwoSidesLinksSection
            ...LocationMapSection
            ...TreatmentAreas2Section
            ...LeftRightMultipleSection
            ...FaqsSection
          }
        }
      }
    }
  }
`

const Coolsculpting = ({ data, location }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  return (
    <Layout location={location}>
      <SEO isBlog data={data.wpgraphql.page} />
      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerhero":
            return <InnerHero key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Textfullwidth":
            return <TextFullWidth key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Biggerleftwithbuttons":
            return <BiggerLeftWithButtons key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Videoslider":
            return <VideoSlider key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_BeforeAfter":
            return <BeforeAfter key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Twosideslinks":
            return <TwoSidesLinks key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Locationsmap":
            return <LocationMap key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Treatmentareas2":
            return <TreatmentAreas2 key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Leftrightmultiple":
            return <LeftRightMultiple key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Faqs":
            return <Faqs key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default Coolsculpting
