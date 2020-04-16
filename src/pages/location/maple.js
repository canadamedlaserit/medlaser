import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/particles/SEO"
import InnerHeroLocation from "../../components/InnerHeroLocation/InnerHeroLocation"
import LocationText from "../../components/LocationText/LocationText"
import OurServicesSlider from "../../components/OurServicesSlider/OurServicesSlider"
import LeftRightMultiple from "../../components/LeftRightMultiple/LeftRightMultiple"
import FullWidthImageRedBtn from "../../components/FullWidthImageRedBtn/FullWidthImageRedBtn"
import CategoryTabs from "../../components/CategoryTabs/CategoryTabs"
import Faqs from "../../components/homeComponents/Faqs/Faqs"
import ContactLocation from "../../components/Contact/ContactLocation"
export const query = graphql`
  {
    wpgraphql {
      page(id: "maple", idType: URI) {
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
            ...InnerHeroLocationSection
            ...LocationTextSection
            ...OurServicesSliderSection
            ...LeftRightMultipleSection
            ...FullWidthImageRedBtnSection
            ...CategoryTabsSection
            ...FaqsSection
            ...ContactLocationSection
          }
        }
      }
    }
  }
`

const Maple = ({ data, location }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  return (
    <Layout location={location}>
      <SEO data={data.wpgraphql.page} />

      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerherolocation":
            return <InnerHeroLocation key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Locationtext":
            return <LocationText key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Ourservicesslider":
            return <OurServicesSlider key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Leftrightmultiple":
            return <LeftRightMultiple key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Fullwidthimageredbtn":
            return <FullWidthImageRedBtn key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Categorytabs":
            return <CategoryTabs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Faqs":
            return <Faqs key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contactlocation":
            return <ContactLocation key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default Maple
