import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/particles/SEO"
import InnerHero from "../components/InnerHero/InnerHero"
import BiggerLeftWithButtons from "../components/BiggerLeftWithButtons/BiggerLeftWithButtons"
import VideoSlider from "../components/VideoSlider/VideoSlider"
import FullWidthImageGeneral from "../components/FullWidthImageGeneral/FullWidthImageGeneral"
import LeftRightMultiple from "../components/LeftRightMultiple/LeftRightMultiple"
import Faqs from "../components/homeComponents/Faqs/Faqs"
import BeforeAfter from "../components/BeforeAfter/BeforeAfter"
import Contact from "../components/Contact/Contact"
import LinkSlider from "../components/LinkSlider/LinkSlider"

export const query = graphql`
  {
    wpgraphql {
      page(id: "aqua-facial", idType: URI) {
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
            ...FullWidthImageGeneralSection
            ...LeftRightMultipleSection
            ...FaqsSection
            ...BeforeAfterSection
            ... on WPGraphQL_Page_Sectionfields_Sections_Contact {
              fieldGroupName
            }
            ...LinkSliderSection
          }
        }
      }
    }
  }
`

const AquapureFacial = ({ data, location }) => {
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

          case "WPGraphQL_Page_Sectionfields_Sections_Fullwidthimagegeneral":
            return <FullWidthImageGeneral key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Leftrightmultiple":
            return <LeftRightMultiple key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Faqs":
            return <Faqs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_BeforeAfter":
            return <BeforeAfter key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Linkslider":
            return <LinkSlider key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default AquapureFacial
