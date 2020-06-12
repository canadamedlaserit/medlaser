import React from "react"
import { graphql } from "gatsby"
import Layout from "../../../components/Layout"
import SEO from "../../../components/particles/SEO"
import InnerHero from "../../../components/InnerHero/InnerHero"
import BiggerLeftWithButtons from "../../../components/BiggerLeftWithButtons/BiggerLeftWithButtons"
import TextFullWidth from "../../../components/TextFullWidth/TextFullWidth"
import BiggerRightWithButtons from "../../../components/BiggerRightWithButtons/BiggerRightWithButtons"
import Contact from "../../../components/Contact/Contact"
import MoreInfoAnchor from "../../../components/MoreInfoAnchor/MoreInfoAnchor"

export const query = graphql`
  {
    wpgraphql {
      page(id: "toenail-fungus-removal-mississauga", idType: URI) {
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
            ...TextFullWidthSection
            ...BiggerRightWithButtonsSection
            ... on WPGraphQL_Page_Sectionfields_Sections_Contact {
              fieldGroupName
            }
            ... on WPGraphQL_Page_Sectionfields_Sections_MoreInfoAnchor {
              fieldGroupName
            }
          }
        }
      }
    }
  }
`

const ToenailMississauga = ({ data, location }) => {
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

          case "WPGraphQL_Page_Sectionfields_Sections_Biggerrightwithbuttons":
            return <BiggerRightWithButtons key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_MoreInfoAnchor":
            return <MoreInfoAnchor key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Textfullwidth":
            return <TextFullWidth key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default ToenailMississauga
