module.exports = {
  siteMetadata: {
    title: "Functions-Test",
  },
  plugins: ["gatsby-plugin-theme-ui", {
    resolve: "gatsby-plugin-functions",
      options: {
        path: `${__dirname}/src/functions`,
      },
  }],
};
