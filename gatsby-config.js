module.exports = {
    siteMetadata: {
        title: "Caldwell Bagels & more",
    },
    plugins: [
        {
            resolve: `gatsby-source-drupal`,
            options: {
                baseUrl: `https://dev-caldwell-bagels.pantheonsite.io`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            }
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-glamor`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },

    ]
}