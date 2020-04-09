import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/particles/SEO"
import InnerHeroClean from "../components/InnerHeroClean/InnerHeroClean"
import PrivacyPolicyContainer from "../components/PrivacyPolicyContainer/PrivacyPolicyContainer"

export const query = graphql`
  {
    wpgraphql {
      page(id: "privacy-policy", idType: URI) {
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
            ...PrivacyPolicyContainerSection
          }
        }
      }
    }
  }
`

const PrivacyPolicy = ({ data, location }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  return (
    <Layout location={location}>
      <SEO data={data.wpgraphql.page} />

      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerheroclean":
            return <InnerHeroClean key={index} {...section} />
            
          case "WPGraphQL_Page_Sectionfields_Sections_Privacypolicycontainer":
            return <PrivacyPolicyContainer key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default PrivacyPolicy
