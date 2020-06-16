// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../../components/Layout"
// import LocationMap from "../../components/LocationMap/LocationMap"
// import Contact from "../../components/Contact/Contact"
// import CategoriesMain from "../../components/BlogMain/CategoriesMain"
// import CategoryPageHero from "../../components/BlogMain/CategoryPageHero"
// import SEO from "../../components/particles/SEO"
// import FullWidthImageGeneral from "../../components/FullWidthImageGeneral/FullWidthImageGeneral"
// import BeforeAfterImage from "../../components/BeforeAfterImage/BeforeAfterImage"

// const PageTempl = ({ data, location, pageContext }) => {
//   const { id } = pageContext

//   const sections = data.wpgraphql.page.sectionFields.sections

//   console.log(pageContext)
//   // console.log(data)

//   return (
//     <Layout location={location}>
//       asd
//       {sections.map((section, index) => {
//         const typeName = section.__typename

//         switch (typeName) {
//           case "WPGraphQL_Page_Sectionfields_Sections_Contact":
//             return <Contact key={index} {...section} />

//           case "WPGraphQL_Page_Sectionfields_Sections_Beforeafterimage":
//             return <BeforeAfterImage key={index} {...section} />

//           default:
//             return ""
//         }
//       })}
//     </Layout>
//   )
// }

// export default PageTempl

// export const pageQuery = graphql`
//   query($id: ID!) {
//     wpgraphql {
//       page(id: $id) {
//         id
//         sectionFields {
//           sections {
//             ...BeforeAfterImageSection
//           }
//         }
//       }
//     }
//   }
// `
