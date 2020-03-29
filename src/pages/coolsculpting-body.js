import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import InnerHero from "../components/InnerHero/InnerHero"
import Contact from "../components/Contact/Contact"
import BiggerLeftWithButtons from "../components/BiggerLeftWithButtons/BiggerLeftWithButtons"
import TextFullWidth from "../components/TextFullWidth/TextFullWidth"
import BeforeAfter from "../components/BeforeAfter/BeforeAfter"
import VideoSlider from "../components/VideoSlider/VideoSlider"
import ThreeImageLinks from "../components/ThreeImageLinks/ThreeImageLinks"
import LeftRightMultiple from "../components/LeftRightMultiple/LeftRightMultiple"

export const query = graphql`
  {
    wpgraphql {
      page(id: "coolsculpting-body", idType: URI) {
        id
        title
        sectionFields {
          sections {
            __typename
            ...InnerHeroSection
            ... on WPGraphQL_Page_Sectionfields_Sections_Contact {
              fieldGroupName
            }
            ...BiggerLeftWithButtonsSection
            ...TextFullWidthSection
            ...BeforeAfterSection
            ...VideoSliderSection
            ...ThreeImageLinksSection
            ...LeftRightMultipleSection
          }
        }
      }
    }
  }
`

const CoolsculptingBody = ({ data, location }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  return (
    <Layout location={location}>
      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerhero":
            return <InnerHero key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Biggerleftwithbuttons":
            return <BiggerLeftWithButtons key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Textfullwidth":
            return <TextFullWidth key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Videoslider":
            return <VideoSlider key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_BeforeAfter":
            return <BeforeAfter key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Threeimagelinks":
            return <ThreeImageLinks key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Leftrightmultiple":
            return <LeftRightMultiple key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default CoolsculptingBody
