import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/particles/SEO"

import InnerHeroStripFullWidth from "../components/InnerHeroStripFullWidth/InnerHeroStripFullWidth"
import BiggerLeftWithButtonsStyle2 from "../components/BiggerLeftWithButtonsStyle2/BiggerLeftWithButtonsStyle2"
import NotAlignedTitle from "../components/NotAlignedTitle/NotAlignedTitle"
import HalfImageRedBtn from "../components/HalfImageRedBtn/HalfImageRedBtn"
import BeforeAfter from "../components/BeforeAfter/BeforeAfter"
import Contact from "../components/Contact/Contact"
import VideoSection from "../components/homeComponents/VideoSection/VideoSection"
import EqualTextLinks from "../components/EqualTextLinks/EqualTextLinks"
import BeforeAfterImage from '../components/BeforeAfterImage/BeforeAfterImage'

export const query = graphql`
  {
    wpgraphql {
      page(id: "about", idType: URI) {
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
            ...InnerHeroStripFullWidthSection
            ...BiggerLeftWithButtonsStyle2Section
            ...NotAlignedTitleSection
            ...HalfImageRedBtnSection
            ...BeforeAfterSection
            ...VideoSection
            ...EqualTextLinksSection
            ... on WPGraphQL_Page_Sectionfields_Sections_Contact {
              fieldGroupName
            }
            ...BeforeAfterImageSection

          }
        }
      }
    }
  }
`

const AboutCML = ({ data, location }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  return (
    <Layout location={location}>
      <SEO data={data.wpgraphql.page} />

      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerherostripfullwidth":
            return <InnerHeroStripFullWidth key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Biggerleftwithbuttonsstyle2":
            return <BiggerLeftWithButtonsStyle2 key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Fullsizevideo":
            return <VideoSection key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Notalignedtitle":
            return <NotAlignedTitle key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Halfimageredbtn":
            return <HalfImageRedBtn key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Equaltextlinks":
            return <EqualTextLinks key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_BeforeAfter":
            return <BeforeAfter key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} {...section} />

            case "WPGraphQL_Page_Sectionfields_Sections_Beforeafterimage":
              return <BeforeAfterImage key={index} {...section} />
  

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default AboutCML
