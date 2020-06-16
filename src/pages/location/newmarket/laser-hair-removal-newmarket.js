import React from "react"
import { graphql } from "gatsby"
import Layout from "../../../components/Layout"
import InnerHero from "../../../components/InnerHero/InnerHero"
import VideoSection from "../../../components/homeComponents/VideoSection/VideoSection"
import Contact from "../../../components/Contact/Contact"
import BiggerLeftWithButtons from "../../../components/BiggerLeftWithButtons/BiggerLeftWithButtons"
import BiggerRightWithButtons from "../../../components/BiggerRightWithButtons/BiggerRightWithButtons"
import TextFullWidth from "../../../components/TextFullWidth/TextFullWidth"
import Faqs from "../../../components/homeComponents/Faqs/Faqs"
import VideoSlider from "../../../components/VideoSlider/VideoSlider"
import BeforeAfter from "../../../components/BeforeAfter/BeforeAfter"
import TwoSidesLinks from "../../../components/TwoSidesLinks/TwoSidesLinks"
import LocationMap from "../../../components/LocationMap/LocationMap"
import SEO from "../../../components/particles/SEO"
import MoreInfoAnchor from "../../../components/MoreInfoAnchor/MoreInfoAnchor"
import BeforeAfterImage from "../../../components/BeforeAfterImage/BeforeAfterImage"

export const query = graphql`
  {
    wpgraphql {
      page(id: "location/newmarket/laser-hair-removal-newmarket", idType: URI) {
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
            ...VideoSection
            ... on WPGraphQL_Page_Sectionfields_Sections_MoreInfoAnchor {
              fieldGroupName
            }
            ... on WPGraphQL_Page_Sectionfields_Sections_Contact {
              fieldGroupName
            }
            ...BiggerLeftWithButtonsSection
            ...TextFullWidthSection
            ...FaqsSection
            ...BiggerRightWithButtonsSection
            ...BeforeAfterSection
            ...VideoSliderSection
            ...TwoSidesLinksSection
            ...LocationMapSection
            ...BeforeAfterImageSection
          }
        }
      }
    }
  }
`

const LaserHairRemovalNewmarket = ({ data, location }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  return (
    <Layout location={location}>
      <SEO data={data.wpgraphql.page} />

      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerhero":
            return <InnerHero key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Fullsizevideo":
            return <VideoSection key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_MoreInfoAnchor":
            return <MoreInfoAnchor key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Biggerleftwithbuttons":
            return <BiggerLeftWithButtons key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Textfullwidth":
            return <TextFullWidth key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Faqs":
            return <Faqs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Biggerrightwithbuttons":
            return <BiggerRightWithButtons key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Videoslider":
            return <VideoSlider key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_BeforeAfter":
            return <BeforeAfter key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Twosideslinks":
            return <TwoSidesLinks key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Locationsmap":
            return <LocationMap key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Beforeafterimage":
            return <BeforeAfterImage key={index} {...section} />

          default:
            return console.log("")
        }
      })}
    </Layout>
  )
}

export default LaserHairRemovalNewmarket
