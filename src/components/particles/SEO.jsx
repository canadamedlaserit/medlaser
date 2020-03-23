import React from "react"
import Helmet from "react-helmet"

const SEO = ({ data, isBlog }) => {
  const {
    title,
    metaDesc,
    // focuskw,
    // metaKeywords,
    // metaRobotsNoindex,
    // metaRobotsNofollow,
    // opengraphDescription,
    opengraphTitle,
    opengraphImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
  } = data.seo

  const { slug } = data

  const slug_ = slug !== "home" ? slug : ""

  return (
    <Helmet>
      {/* General tags */}
      <title>{opengraphTitle ? opengraphTitle : title}</title>
      <meta name="description" content={metaDesc ? metaDesc : ""} />
      <meta
        name="image"
        content={opengraphImage !== null ? opengraphImage.sourceUrl : ""}
      />
      <link rel="canonical" href={`${process.env.GATSBY_DOMAIN}/${slug_}`} />

      {/* Schema.org NOT SET yet */}

      {/* OpenGraph tags */}
      <meta property="og:site_name" content="Toronto Laser Clinics" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:url"
        content={`${process.env.GATSBY_DOMAIN}/${slug_}`}
      />
      <meta property="og:type" content={isBlog ? "article" : "website"} />
      <meta
        property="og:title"
        content={opengraphTitle ? opengraphTitle : title}
      />
      <meta property="og:description" content={metaDesc ? metaDesc : ""} />
      <meta
        property="og:image"
        content={opengraphImage !== null ? opengraphImage.sourceUrl : null}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:url"
        content={`${process.env.GATSBY_DOMAIN}/${slug_}`}
      />
      <meta
        name="twitter:title"
        content={
          twitterTitle ? twitterTitle : opengraphTitle ? opengraphTitle : title
        }
      />

      <meta
        name="twitter:description"
        content={
          twitterDescription ? twitterDescription : metaDesc ? metaDesc : ""
        }
      />
      <meta
        name="twitter:image"
        content={
          twitterImage
            ? twitterImage.sourceUrl
            : opengraphImage
            ? opengraphImage.sourceUrl
            : ""
        }
      />

      {/* {image && <meta property="og:image" content={image} />} */}

      {/* <meta name="twitter:creator" content={post.author.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />} */}
    </Helmet>
  )
}

export default SEO
