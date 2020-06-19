import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import LocationMap from "../../components/LocationMap/LocationMap"
import Contact from "../../components/Contact/Contact"
import CategoryPageHero from "../../components/BlogMain/CategoryPageHero"
import SEO from "../../components/particles/SEO"
import MemberMain from "../../components/BlogMain/MemberMain"

const MemberPage = ({ data, location, pageContext }) => {
  const sections = data.wpgraphql.page.sectionFields.sections

  const member = data.wpgraphql.team

  return (
    <Layout location={location}>
      <SEO article="true" data={member}/>

      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerheroimagefullwidth":
            return (
              <CategoryPageHero
                pageName={member.teamMembersDescription.name}
                slug="Team Member"
                key={index}
                {...section}
              />
            )

          case "WPGraphQL_Page_Sectionfields_Sections_Blogmain":
            return (
              <MemberMain
                data={member.teamMembersDescription}
                key={index}
                {...section}
              />
            )

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Locationsmap":
            return <LocationMap key={index} {...section} />

          default:
            return ""
        }
      })}
    </Layout>
  )
}

export default MemberPage

export const memberQuery = graphql`
  query MemberByID($id: ID!) {
    wpgraphql {
      page(id: "knowledge-base", idType: URI) {
        id
        sectionFields {
          sections {
            __typename
            ...InnerHeroImageFullWidthSection
            ... on WPGraphQL_Page_Sectionfields_Sections_Blogmain {
              fieldGroupName
            }
            ... on WPGraphQL_Page_Sectionfields_Sections_Contact {
              fieldGroupName
            }
            ...LocationMapSection
          }
        }
      }
      team(id: $id, idType: ID) {
        id
        slug
        featuredImage {
          sourceUrl
        }
        title
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
        teamMembersDescription {
          description
          name
          position
          image {
            sourceUrl
            altText
            imageFile {
              childImageSharp {
                fluid(quality: 100, maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
