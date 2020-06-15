// import React from "react"
// import Helmet from "react-helmet"

// const SEO = ({ data, isBlog }) => {
//   const {
//     title,
//     metaDesc,
//     // focuskw,
//     // metaKeywords,
//     // metaRobotsNoindex,
//     // metaRobotsNofollow,
//     // opengraphDescription,
//     opengraphTitle,
//     opengraphImage,
//     twitterTitle,
//     twitterDescription,
//     twitterImage,
//   } = data.seo

//   const { slug } = data

//   const slug_ = slug !== "home" ? slug : ""

//   return (
//     <Helmet>
//       {/* General tags */}
//       <title>{opengraphTitle ? opengraphTitle : title}</title>
//       <meta name="description" content={metaDesc ? metaDesc : ""} />
//       <meta
//         name="image"
//         content={opengraphImage !== null ? opengraphImage.sourceUrl : ""}
//       />
//       <link rel="canonical" href={`${process.env.GATSBY_DOMAIN}/${slug_}`} />

//       {/* Schema.org NOT SET yet */}

//       {/* OpenGraph tags */}
//       <meta property="og:site_name" content="Toronto Laser Clinics" />
//       <meta property="og:locale" content="en_US" />
//       <meta
//         property="og:url"
//         content={`${process.env.GATSBY_DOMAIN}/${slug_}`}
//       />
//       <meta property="og:type" content={isBlog ? "article" : "website"} />
//       <meta
//         property="og:title"
//         content={opengraphTitle ? opengraphTitle : title}
//       />
//       <meta property="og:description" content={metaDesc ? metaDesc : ""} />
//       <meta
//         property="og:image"
//         content={opengraphImage !== null ? opengraphImage.sourceUrl : null}
//       />

//       {/* Twitter Card tags */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta
//         name="twitter:url"
//         content={`${process.env.GATSBY_DOMAIN}/${slug_}`}
//       />
//       <meta
//         name="twitter:title"
//         content={
//           twitterTitle ? twitterTitle : opengraphTitle ? opengraphTitle : title
//         }
//       />

//       <meta
//         name="twitter:description"
//         content={
//           twitterDescription ? twitterDescription : metaDesc ? metaDesc : ""
//         }
//       />
//       <meta
//         name="twitter:image"
//         content={
//           twitterImage
//             ? twitterImage.sourceUrl
//             : opengraphImage
//             ? opengraphImage.sourceUrl
//             : ""
//         }
//       />
//     </Helmet>
//   )
// }

// export default SEO

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ data, article }) => {
  const {
    title,
    metaDesc,
    // focuskw,
    // metaKeywords,
    // metaRobotsNoindex,
    // metaRobotsNofollow,
    // opengraphDescription,
    // opengraphTitle,
    // opengraphImage,
    // twitterTitle,
    // twitterDescription,
    // twitterImage,
  } = data.seo

  const featuredImage = data.featuredImage ? data.featuredImage.sourceUrl : false

  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    siteLanguage,
    ogLanguage,
    siteName,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: metaDesc || defaultDescription,
    image: featuredImage || `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title}>
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.url} />

      {/* facebook meta */}
      {article ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}

      <meta property="og:locale" content={ogLanguage} />
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.url && <meta property="og:url" content={seo.url} />}
      <meta property="og:site_name" content={siteName} />
      {seo.image && <meta property="og:image" content={seo.image} />}

      {/* twitter meta */}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
    </Helmet>
  )
}
export default SEO

SEO.defaultProps = {
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
        defaultImage: image
        twitterUsername
        siteLanguage
        ogLanguage
        siteName
      }
    }
  }
`
