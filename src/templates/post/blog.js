import { graphql } from "gatsby"
import React from "react"
import BlogMain from "../../components/BlogMain/BlogMain"
import Contact from "../../components/Contact/Contact"
import InnerHeroImageFullWidth from "../../components/InnerHeroImageFullWidth/InnerHeroImageFullWidth"
import Layout from "../../components/Layout"
import LocationMap from "../../components/LocationMap/LocationMap"
import SEO from "../../components/particles/SEO"

export const query = graphql`
  {
    wpgraphql {
      page(id: "knowledge-base", idType: URI) {
        id
        featuredImage {
          sourceUrl
        }
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

  // console.log(data)

  // console.log('allPosts', allPosts)



  return (
    <Layout location={location}>
      <SEO article="true" data={data.wpgraphql.page} />

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
                allPosts={allPosts}
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
