import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/particles/SEO"

import InnerHero from "../components/InnerHero/InnerHero"
import BiggerLeftWithButtons from "../components/BiggerLeftWithButtons/BiggerLeftWithButtons"
import EqualTextLeftImageRight from "../components/EqualTextLeftImageRight/EqualTextLeftImageRight"
import CategoryTabs from "../components/CategoryTabs/CategoryTabs"
import TextFullWidthListsButton from "../components/TextFullWidthListsButton/TextFullWidthListsButton"
import LeftRightMultiple from "../components/LeftRightMultiple/LeftRightMultiple"
import TextFullWidthFont from "../components/TextFullWidthFont/TextFullWidthFont"
import BeforeAfter from "../components/BeforeAfter/BeforeAfter"
import Contact from "../components/Contact/Contact"
import LinkSlider from "../components/LinkSlider/LinkSlider"

export const query = graphql`
  {
    wpgraphql {
      page(id: "acne-treatment", idType: URI) {
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
            ...EqualTextLeftImageRightSection
            ...CategoryTabsSection
            ...TextFullWidthListsButtonSection
            ...LeftRightMultipleSection
            ...TextFullWidthFontSection
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

const Acne = ({ data, location }) => {
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

          case "WPGraphQL_Page_Sectionfields_Sections_Equaltextleftimageright":
            return <EqualTextLeftImageRight key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Categorytabs":
            return <CategoryTabs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Textfullwidthlistsbutton":
            return <TextFullWidthListsButton key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Leftrightmultiple":
            return <LeftRightMultiple key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Textfullwidthfont":
            return <TextFullWidthFont key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_BeforeAfter":
            return <BeforeAfter key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Linkslider":
            return <LinkSlider key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default Acne
