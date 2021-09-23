module.exports = {
  siteMetadata: {
    title: "Disturbio Ilustrativo",
    description: `Grupo de diseñadores y creativos unidos por el arte, la cultura y los negocios.`,
    author: `@disturbioilustrativo`,
    image: "",
    url: `https://disturbioilustrativo.com`,
    siteUrl: `https://disturbioilustrativo.com`,
  },
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DEV_WEBPACK_CACHE: true,
    PARALLEL_SOURCING: true,
    FUNCTIONS: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://disturbio-gatsby.disturbioilustrativo.com/graphql",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/icons/, // See below to configure properly
        },
      },
    },
  ],
}
