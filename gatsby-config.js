require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  plugins: [
    `gatsby-plugin-netlify`,
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

      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WordPress',
        fieldName: 'wordPress',
        url: 'https://canadamed.2marketing.ca/graphql',
        refetchInterval: 30
      }
    },
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: ['Playfair Display:400,400i,700', 'Open Sans:400,600,800']
    //     }
    //   }
    // },
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: "Playfair Display",
              variants: ["400", "400i", "800"], 
              fontDisplay: 'swap',
              strategy: 'selfHosted' // 'base64' || 'cdn'
            },
            {
              family: "Open Sans",
              variants: ["400", "600", "800"], 
              fontDisplay: 'swap',
              strategy: 'selfHosted' // 'base64' || 'cdn'
            },
          ],
        },
        //formats: ['woff2', 'woff'],
        //useMinify: true,
        usePreload: true,
        //usePreconnect: false,
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -120
      }
    }
  ]
}
