import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/particles/SEO"
import InnerHeroImageFullWidth from "../../components/InnerHeroImageFullWidth/InnerHeroImageFullWidth"
import LocationMap from "../../components/LocationMap/LocationMap"
import Contact from "../../components/Contact/Contact"
import BlogMain from "../../components/BlogMain/BlogMain"
import { graphql } from "gatsby"

export const query = graphql`
  {
    wpgraphql {
      page(id: "blog", idType: URI) {
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
    }
  }
`

const Blog = ({ data, pageContext, location }) => {
  const { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts } = pageContext
  const numPages = Math.ceil(allPosts.length / itemsPerPage)
  const sections = data.wpgraphql.page.sectionFields.sections


  return (
    <Layout location={location}>
      <SEO data={data.wpgraphql.page} />

      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerheroimagefullwidth":
            return <InnerHeroImageFullWidth key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Blogmain":
            return (
              <BlogMain
                key={index}
                {...section}
                nodes={nodes}
                pageNumber={pageNumber}
                hasNextPage={hasNextPage}
                numPages={numPages}
              />
            )

          case "WPGraphQL_Page_Sectionfields_Sections_Contact":
            return <Contact key={index} {...section} />

          case "WPGraphQL_Page_Sectionfields_Sections_Locationsmap":
            return <LocationMap key={index} {...section} />

          default:
            return console.log("You done. Default thing")
        }
      })}
    </Layout>
  )
}

export default Blog
