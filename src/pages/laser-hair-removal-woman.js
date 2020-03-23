import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import InnerHero from "../components/InnerHero/InnerHero"
import VideoSection from "../components/homeComponents/VideoSection/VideoSection"
import EqualTextLeftImageRight from "../components/EqualTextLeftImageRight/EqualTextLeftImageRight"
import Contact from "../components/Contact/Contact"
import TextFullWidth from "../components/TextFullWidth/TextFullWidth"
import Faqs from "../components/homeComponents/Faqs/Faqs"
import BeforeAfter from "../components/BeforeAfter/BeforeAfter"

export const query = graphql`
  {
    wpgraphql {
      page(id: "laser-hair-removal-for-woman", idType: URI) {
        id
        title
        sectionFields {
          sections {
            __typename
            ...InnerHeroSection
            ...VideoSection
            ...EqualTextLeftImageRightSection
            ... on WPGraphQL_Page_Sectionfields_Sections_Contact {
              fieldGroupName
            }
            ...TextFullWidthSection
            ...BeforeAfterSection
            ...FaqsSection
          }
        }
      }
    }
  }
`

const LaserHairRemovalWoman = ({ data, location }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  return (
    <Layout location={location}>
      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerhero":
            return <InnerHero key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Fullsizevideo":
            return <VideoSection key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Equaltextleftimageright":
            return <EqualTextLeftImageRight key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Textfullwidth":
            return <TextFullWidth key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Faqs":
            return <Faqs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_BeforeAfter":
            return <BeforeAfter key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default LaserHairRemovalWoman
