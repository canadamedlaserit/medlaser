require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://medlaser.netlify.app`,
    title: `Canada MedLaser Clinics`,
    description: `Laser clinics in Toronto offers laser hair removal, Brazilian and permanent facial hair removal, Botox injections, CoolSculpting and lip augmentation.`,
    author: `@Medlaser`,
    image: `/icons/icon.png`,
    siteName: "Toronto Laser Clinics",
    siteLanguage: "en-CA",
    ogLanguage: "en_US",
    twitterUsername: "@CanadaMedLaser",
    icon: `/icons/icon.png`,
    icons: [
      {
        src: `/favicons/icon-48x48.png`,
        sizes: `48x48`,
        type: `image/png`,
      },
      {
        src: `/favicons/icon-72x72.png`,
        sizes: `72x72`,
        type: `image/png`,
      },
      {
        src: `/favicons/icon-96x96.png`,
        sizes: `96x96`,
        type: `image/png`,
      },
      {
        src: `/favicons/icon-144x144.png`,
        sizes: `144x14`,
        type: `image/png`,
      },
      {
        src: `/favicons/icon-192x192.png`,
        sizes: `192x192`,
        type: `image/png`,
      },
      {
        src: `/favicons/icon-256x256.png`,
        sizes: `256x256`,
        type: `image/png`,
      },
      {
        src: `/favicons/icon-512x512.png`,
        sizes: `512x512`,
        type: `image/png`,
      },
    ], // Add or remove icon sizes as desired
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Canada Medlaser`,
        short_name: `CML`,
        description: "Canada Medlaser Clinics",
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#9c1a3b`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: `https://canadamed.2marketing.ca/graphql`,
        refetchInterval: 30
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WordPress",
        fieldName: "wordPress",
        url: "https://canadamed.2marketing.ca/graphql",
        // refetchInterval: 30
      },
    },
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        fonts: {
          google: [
            {
              family: "Playfair Display",
              variants: ["400", "400i", "800"],
              fontDisplay: "swap",
              strategy: "selfHosted", // 'base64' || 'cdn'
            },
            // {
            //   family: "Open Sans",
            //   variants: ["400", "600", "800"],
            //   fontDisplay: 'swap',
            //   strategy: 'selfHosted'
            // },
            {
              family: "Roboto",
              variants: ["400", "500", "700"],
              fontDisplay: "swap",
              strategy: "selfHosted",
            },
          ],
        },
        usePreload: true,
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -120,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
