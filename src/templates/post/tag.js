import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import LocationMap from "../../components/LocationMap/LocationMap"
import Contact from "../../components/Contact/Contact"
import CategoriesMain from "../../components/BlogMain/CategoriesMain"
import CategoryPageHero from "../../components/BlogMain/CategoryPageHero"
import SEO from "../../components/particles/SEO"


export const query = graphql`
  {
    wpgraphql {
      page(id: "knowledge-base", idType: URI) {
        sectionFields {
          sections {
            __typename
            ...InnerHeroImageFullWidthSection2

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

const TagPage = ({ data, location, pageContext }) => {
  const {cat, slug, posts, pageName } = pageContext
  const sections = data.wpgraphql.page.sectionFields.sections
  

// console.log(pageContext)

  return (
    <Layout location={location}>
      <SEO article="true" data={cat}/>
    

      {sections.map((section, index) => {
        const typeName = section.__typename

        switch (typeName) {
          case "WPGraphQL_Page_Sectionfields_Sections_Innerheroimagefullwidth":
            return (
              <CategoryPageHero
                pageName={pageName}
                slug="Tag"
                key={index}
                {...section}
              />
            )

          case "WPGraphQL_Page_Sectionfields_Sections_Blogmain":
            return (
              <CategoriesMain
                posts={posts}
                slug={slug}
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

export default TagPage