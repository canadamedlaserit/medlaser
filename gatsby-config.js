module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: `http://canadamedlaser.wptestprev.icu/graphql`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WordPress',
        fieldName: 'wordPress',
        url: 'http://canadamedlaser.wptestprev.icu/graphql',
        refetchInterval: 60
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Playfair Display:400,400i, 700', 'Open Sans:400,600,800']
        }
      }
    },
    `gatsby-plugin-catch-links`
  ]
}
