import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/particles/SEO"

import InnerHeroImageFullWidth from "../components/InnerHeroImageFullWidth/InnerHeroImageFullWidth"
import PhoneEmailSocials from "../components/PhoneEmailSocials/PhoneEmailSocials"
import Injury from "../components/Contact/Injury"
import LocationsMapWithOptions from "../components/LocationsMapWithOptions/LocationsMapWithOptions"

export const query = graphql`
  {
    wpgraphql {
      page(id: "contact-us", idType: URI) {
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
            ...InnerHeroImageFullWidthSection
            ...PhoneEmailSocialsSection
            ... on WPGraphQL_Page_Sectionfields_Sections_Injury {
              fieldGroupName
            }
            ...LocationsMapWithOptionsSection
          }
        }
      }
    }
  }
`

const ContactUs = ({ data, location }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  return (
    <Layout location={location}>
      <SEO data={data.wpgraphql.page} />

      {/* <div style={{ marginTop: " 100px" }}></div> */}

      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerheroimagefullwidth":
            return <InnerHeroImageFullWidth key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Phoneemailsocials":
            return <PhoneEmailSocials key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Injury":
            return <Injury key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Locationsmapwithoptions":
            return <LocationsMapWithOptions key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default ContactUs
