import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/particles/SEO"

import InnerHeroClean from "../components/InnerHeroClean/InnerHeroClean"
import NotAlignedTitle from "../components/NotAlignedTitle/NotAlignedTitle"
import EqualTextWithStrip from "../components/EqualTextWithStrip/EqualTextWithStrip"
import BeforeAfter from "../components/BeforeAfter/BeforeAfter"
import Contact from "../components/Contact/Contact"

export const query = graphql`
  {
    wpgraphql {
      page(id: "community", idType: URI) {
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
            ...InnerHeroCleanSection
            ...EqualTextWithStripSection
            ...NotAlignedTitleSection
            ...BeforeAfterSection
            ... on WPGraphQL_Page_Sectionfields_Sections_Contact {
              fieldGroupName
            }
          }
        }
      }
    }
  }
`

const Community = ({ data, location }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  return (
    <Layout location={location}>
      <SEO data={data.wpgraphql.page} />

      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerheroclean":
            return <InnerHeroClean key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Equaltextwithstrip":
            return <EqualTextWithStrip key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Notalignedtitle":
            return <NotAlignedTitle key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_BeforeAfter":
            return <BeforeAfter key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default Community
