import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import InnerHero from "../components/InnerHero/InnerHero"
import Contact from "../components/Contact/Contact"
import BiggerLeftWithButtons from "../components/BiggerLeftWithButtons/BiggerLeftWithButtons"
import TextFullWidth from "../components/TextFullWidth/TextFullWidth"
import Faqs from "../components/homeComponents/Faqs/Faqs"
import BiggerRightWithButtons from "../components/BiggerRightWithButtons/BiggerRightWithButtons"
import BeforeAfter from "../components/BeforeAfter/BeforeAfter"
import SkinTypes from "../components/SkinTypes/SkinTypes"
import ThreeImageLinks from "../components/ThreeImageLinks/ThreeImageLinks"

export const query = graphql`
  {
    wpgraphql {
      page(id: "double-chin", idType: URI) {
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
            ...FaqsSection
            ...BeforeAfterSection
            ...BiggerRightWithButtonsSection
            ...SkinTypesSection
            ...ThreeImageLinksSection
          }
        }
      }
    }
  }
`

const CoolsculptingDoubleChin = ({ data, location }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  return (
    <Layout location={location}>
      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerhero":
            return <InnerHero key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} />

          case "WPGraphQL_Page_Sectionfields_Sections_Biggerleftwithbuttons":
            return <BiggerLeftWithButtons key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Textfullwidth":
            return <TextFullWidth key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Faqs":
            return <Faqs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Biggerrightwithbuttons":
            return <BiggerRightWithButtons key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_BeforeAfter":
            return <BeforeAfter key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Skintypes":
            return <SkinTypes key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Threeimagelinks":
            return <ThreeImageLinks key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default CoolsculptingDoubleChin
