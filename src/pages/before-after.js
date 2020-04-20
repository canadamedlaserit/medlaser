import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/particles/SEO"
import InnerHeroClean from "../components/InnerHeroClean/InnerHeroClean"
import BeforeAfterTabs from "../components/BeforeAfterTabs/BeforeAfterTabs"

export const query = graphql`
  {
    wpgraphql {
      page(id: "before-after", idType: URI) {
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
            ... on WPGraphQL_Page_Sectionfields_Sections_Beforeaftertabs {
              fieldGroupName
            }
          }
        }
      }
    }
  }
`

const BeforeAfter = ({ data, location }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  return (
    <Layout location={location}>
      <SEO data={data.wpgraphql.page} />

      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerheroclean":
            return <InnerHeroClean key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Beforeaftertabs":
            return <BeforeAfterTabs key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default BeforeAfter
