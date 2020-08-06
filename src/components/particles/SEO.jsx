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
  const { title, metaDesc } = data.seo

  let newtitle = title.replace('&amp;', '&')

  const { date, modified } = data
  const pageTitle = data.title

  const featuredImage = data.featuredImage
    ? data.featuredImage.sourceUrl
    : false

  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    // defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    siteLanguage,
    ogLanguage,
    siteName,
    image,
  } = site.siteMetadata

  const seo = {
    title: newtitle || defaultTitle,
    description: metaDesc,
    image: featuredImage || `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }


  const webPage = {
    "@context": "http://schema.org/",
    "@type": "WebPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": seo.url,
    },
    headline: pageTitle,
    name: seo.title,
    image: featuredImage,
    description: seo.description,
    datePublished: date,
    dateModified: modified,
    url: seo.url,
    publisher: {
      "@type": "Organization",
      name: defaultTitle,
      logo: {
        "@type": "ImageObject",
        url: image,
      },
    },
    author: {
      "@type": "Person",
      name: "admin",
    },
    video: {
      "@context": "http://schema.org",
      "@type": "VideoObject",
      "@id": "https://www.youtube.com/watch?v=pWNuBg_QSNU",
      name: "Canada Medlaser - #Laser Clinic#laser hair removal#Botox clinic",
      description:
        "We have a goal to provide the ultimate treatment experience to our patients. In addition to compliance with uncompromising high professional standards of treatments, the clinic is characterized with a unique service approach, which puts our patients in the center of our attention.",
      uploadDate: "2015-04-13T16:40:32Z",
      thumbnailUrl: "https://i.ytimg.com/vi/pWNuBg_QSNU/sddefault.jpg",
      duration: "PT1M51S",
      interactionCount: "41599",
      embedUrl: "https://www.youtube.com/embed/pWNuBg_QSNU",
      contentUrl: "https://youtu.be/pWNuBg_QSNU",
      publisher: {
        "@type": "Organization",
        "@id": "https://www.youtube.com/channel/UCh-ujT1skgeh1dX5gZ64coQ",
        url: "https://www.youtube.com/channel/UCh-ujT1skgeh1dX5gZ64coQ",
        name: "Canada MedLaser Clinics",
        description:
          "Welcome to the YouTube Channel of Canada MedLaser laser clinics in Toronto! Please, browse our official channel to find out more about aesthetic laser medicine procedures provided in our clinic.\n\nCanada MedLaser Clinics offers innovative and effective solutions for skin resurfacing and rejuvenation. Watch our How To videos or visit our website to learn more about our laser stretch marks removal procedure, laser treatment for scars, laser hair removal procedures and laser nail fungus treatment. Get more information about the latest trends in skin rejuvenation, laser hair removal and body shaping and be aware of the groundbreaking innovations in cosmetic medical laser industry.",
        logo: {
          "@type": "ImageObject",
          url:
            "https://yt3.ggpht.com/a/AATXAJzHTwoiEUpg59mGpiBBD_FrY84amdXTr_wi=s800-c-k-c0xffffffff-no-rj-mo",
          width: 800,
          height: 800,
        },
      },
    },
  }

  const schemaOrgLocalBusiness = {
    "@context": "http://schema.org",
    "@type": "localBusiness",
    name: "Canada MedLaser Clinics",
    description:
      "Laser clinic provides skin treatments and laser hair removal in Toronto.",
    url: siteUrl,
    logo: image,
    image: image,
    priceRange: "$100",
    hasMap: "https://goo.gl/maps/igTk8LugHJv",
    telephone: "855-633-7721",
    email: "info@canadamedlaser.ca",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "249 Queen’s Quay W. #113",
        addressLocality: "Toronto",
        addressRegion: "Ontario",
        addressCountry: "Canada",
        postalCode: "M5J 2N5",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "2780, Highway 7, #110",
        addressLocality: "Vaughan",
        addressRegion: "Ontario",
        addressCountry: "Canada",
        postalCode: "L4K 3R9",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "1705 Lakeshore Road West Mississauga",
        addressLocality: "Mississauga",
        addressRegion: "Ontario",
        addressCountry: "Canada",
        postalCode: "L5J 1J4",
      },
    ],
    sameAs: [
      "https://www.facebook.com/canadamedlaser",
      "https://twitter.com/CanadaMedLaser",
      "https://www.youtube.com/channel/UCh-ujT1skgeh1dX5gZ64coQ",
      "https://www.instagram.com/canadamedlaser/",
    ],
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

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgLocalBusiness)}
      </script>

      {article ? (
        <script type="application/ld+json">{JSON.stringify(webPage)}</script>
      ) : (
        <script type="application/ld+json">{JSON.stringify(webPage)}</script>
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
        image
      }
    }
  }
`
