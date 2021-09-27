const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  /* -------------------------------------------------------------------------- */
  /*                      Extraemos los datos desde graphql                     */
  /* -------------------------------------------------------------------------- */

  const posts = await graphql(`
    query {
      allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
          id
          title
          content
          slug
          date
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  console.log(posts.data.allWpPost.nodes)

  const portafolios = await graphql(`
    query {
      allWpProyecto(sort: { fields: date, order: DESC }) {
        nodes {
          id
          slug
          title
          Seo {
            seodescription
            seotitle
          }
          Proyectos {
            cliente
          }
          author {
            node {
              name
            }
          }
          content
          excerpt
          featuredImage {
            node {
              localFile {
                publicURL
              }
            }
          }
          categories {
            nodes {
              slug
              name
            }
          }
        }
      }
    }
  `)

  const artes = await graphql(`
    query {
      allWpArte {
        nodes {
          Artes {
            url
          }
          id
          slug
          Seo {
            seodescription
            seotitle
          }
          author {
            node {
              name
            }
          }
          content
          excerpt
          date
          featuredImage {
            node {
              localFile {
                publicURL
              }
            }
          }
          slug
          title
        }
      }
    }
  `)

  /* ------------------------------------------------------------- */
  /*                Crear paginación dinámica                      */
  /* ------------------------------------------------------------- */
  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts.data.allWpPost.nodes, // An array of objects
    itemsPerPage: 22, // How many items you want per page
    pathPrefix: "/blog", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/blog.js`), // Just like `createPage()`
  })

  paginate({
    createPage, // The Gatsby `createPage` function
    items: portafolios.data.allWpProyecto.nodes, // An array of objects
    itemsPerPage: 12, // How many items you want per page
    pathPrefix: "/portafolio", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/portafolio.js`), // Just like `createPage()`
  })

  paginate({
    createPage, // The Gatsby `createPage` function
    items: artes.data.allWpArte.nodes, // An array of objects
    itemsPerPage: 3, // How many items you want per page
    pathPrefix: "/", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/artes.js`), // Just like `createPage()`
  })

  /* -------------------------------------------------------------- */
  /*                  Crear ruta de pagina interna                  */
  /* -------------------------------------------------------------- */
  posts.data.allWpPost.nodes.forEach(post => {
    createPage({
      path: `/blog/${post.slug}`,
      component: path.resolve(`src/templates/post/post.js`),
      context: {
        data: post,
      },
    })
  })

  portafolios.data.allWpProyecto.nodes.forEach(portafolio => {
    createPage({
      path: `/portafolio/${portafolio.slug}`,
      component: path.resolve(`src/templates/proyecto/proyecto.js`),
      context: {
        data: portafolio,
      },
    })
  })

  artes.data.allWpArte.nodes.forEach(arte => {
    createPage({
      path: `/artes/${arte.slug}`,
      component: path.resolve(`src/templates/arte/arte.js`),
      context: {
        data: arte,
      },
    })
  })
}
