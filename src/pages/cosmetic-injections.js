import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/particles/SEO"
import InnerHero from "../components/InnerHero/InnerHero"
import BiggerLeftWithButtons from "../components/BiggerLeftWithButtons/BiggerLeftWithButtons"
import BeforeAfter from "../components/BeforeAfter/BeforeAfter"
import Contact from "../components/Contact/Contact"
import LocationMap from "../components/LocationMap/LocationMap"
import EqualTextWithStrip from "../components/EqualTextWithStrip/EqualTextWithStrip"
import MoreInfoAnchor from "../components/MoreInfoAnchor/MoreInfoAnchor"

export const query = graphql`
  {
    wpgraphql {
      page(id: "cosmetic-injections", idType: URI) {
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
            ...BeforeAfterSection
            ... on WPGraphQL_Page_Sectionfields_Sections_Contact {
              fieldGroupName
            }
            ...LocationMapSection
            ...EqualTextWithStripSection
            ... on WPGraphQL_Page_Sectionfields_Sections_MoreInfoAnchor {
              fieldGroupName
            }
          }
        }
      }
    }
  }
`

const CosmeticInjections = ({ data, location }) => {
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

          case "WPGraphQL_Page_Sectionfields_Sections_BeforeAfter":
            return <BeforeAfter key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Locationsmap":
            return <LocationMap key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Equaltextwithstrip":
            return <EqualTextWithStrip key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_MoreInfoAnchor":
            return <MoreInfoAnchor key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default CosmeticInjections
