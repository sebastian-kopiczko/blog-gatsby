module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "localhost",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
      },
    },
  ],
}
