module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matthew Davenport | Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#434343`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon-96x96.png',
      },
    },
  ],
};
