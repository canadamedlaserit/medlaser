import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/particles/SEO"

import InnerHero from "../components/InnerHero/InnerHero"
import VideoSection from "../components/homeComponents/VideoSection/VideoSection"
import EqualTextLeftImageRight from "../components/EqualTextLeftImageRight/EqualTextLeftImageRight"
import Contact from "../components/Contact/Contact"
import TextFullWidth from "../components/TextFullWidth/TextFullWidth"
import Faqs from "../components/homeComponents/Faqs/Faqs"
import BeforeAfter from "../components/BeforeAfter/BeforeAfter"
import ThreeImageLinks from "../components/ThreeImageLinks/ThreeImageLinks"
import TreatmentAreas from "../components/TreatmentAreas/TreatmentAreas"
import SkinTypes from "../components/SkinTypes/SkinTypes"
import EqualTextWithStrip from "../components/EqualTextWithStrip/EqualTextWithStrip"
import GetPricing from "../components/GetPricing/GetPricing"

export const query = graphql`
  {
    wpgraphql {
      page(id: "laser-hair-removal-for-woman", idType: URI) {
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
            ...EqualTextLeftImageRightSection
            ... on WPGraphQL_Page_Sectionfields_Sections_Contact {
              fieldGroupName
            }
            ...TextFullWidthSection
            ...BeforeAfterSection
            ...FaqsSection
            ...ThreeImageLinksSection
            ...TreatmentAreasSection
            ...SkinTypesSection
            ...EqualTextWithStripSection
            ...GetPricingSection
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
      <SEO data={data.wpgraphql.page} />

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

          case "WPGraphQL_Page_Sectionfields_Sections_Threeimagelinks":
            return <ThreeImageLinks key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Treatmentareas":
            return <TreatmentAreas key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Skintypes":
            return <SkinTypes key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Equaltextwithstrip":
            return <EqualTextWithStrip key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Getpricing":
            return <GetPricing key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default LaserHairRemovalWoman
