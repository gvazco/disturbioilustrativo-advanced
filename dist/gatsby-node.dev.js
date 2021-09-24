"use strict";

var path = require("path");

var _require = require("gatsby-awesome-pagination"),
    paginate = _require.paginate;

exports.createPages = function _callee(_ref) {
  var actions, graphql, createPage, posts, portafolios, artes;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          actions = _ref.actions, graphql = _ref.graphql;
          createPage = actions.createPage;
          /* -------------------------------------------------------------------------- */

          /*                      Extraemos los datos desde graphql                     */

          /* -------------------------------------------------------------------------- */

          _context.next = 4;
          return regeneratorRuntime.awrap(graphql("\n    query {\n      allWpPost(sort: { fields: date, order: DESC }) {\n        nodes {\n          id\n          title\n          content\n          slug\n          date\n          categories {\n            nodes {\n              name\n            }\n          }\n          featuredImage {\n            node {\n              localFile {\n                publicURL\n              }\n            }\n          }\n        }\n      }\n    }\n  "));

        case 4:
          posts = _context.sent;
          console.log(posts.data.allWpPost.nodes);
          _context.next = 8;
          return regeneratorRuntime.awrap(graphql("\n    query {\n      allWpProyecto(sort: { fields: date, order: DESC }) {\n        nodes {\n          id\n          slug\n          Seo {\n            seodescription\n            seotitle\n          }\n          Proyectos {\n            cliente\n          }\n          author {\n            node {\n              name\n            }\n          }\n          content\n          excerpt\n          featuredImage {\n            node {\n              localFile {\n                publicURL\n              }\n            }\n          }\n          categories {\n            nodes {\n              slug\n              name\n            }\n          }\n        }\n      }\n    }\n  "));

        case 8:
          portafolios = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(graphql("\n    query {\n      allWpArte {\n        nodes {\n          content\n          excerpt\n          date\n          featuredImage {\n            node {\n              localFile {\n                publicURL\n              }\n            }\n          }\n          slug\n          title\n        }\n      }\n    }\n  "));

        case 11:
          artes = _context.sent;

          /* ------------------------------------------------------------- */

          /*                Crear paginación dinámica                      */

          /* ------------------------------------------------------------- */
          paginate({
            createPage: createPage,
            // The Gatsby `createPage` function
            items: posts.data.allWpPost.nodes,
            // An array of objects
            itemsPerPage: 22,
            // How many items you want per page
            pathPrefix: "/blog",
            // Creates pages like `/blog`, `/blog/2`, etc
            component: path.resolve("src/templates/blog.js") // Just like `createPage()`

          });
          paginate({
            createPage: createPage,
            // The Gatsby `createPage` function
            items: portafolios.data.allWpProyecto.nodes,
            // An array of objects
            itemsPerPage: 12,
            // How many items you want per page
            pathPrefix: "/portafolio",
            // Creates pages like `/blog`, `/blog/2`, etc
            component: path.resolve("src/templates/portafolio.js") // Just like `createPage()`

          });
          paginate({
            createPage: createPage,
            // The Gatsby `createPage` function
            items: artes.data.allWpArte.nodes,
            // An array of objects
            itemsPerPage: 12,
            // How many items you want per page
            pathPrefix: "/",
            // Creates pages like `/blog`, `/blog/2`, etc
            component: path.resolve("src/templates/artes.js") // Just like `createPage()`

          });
          /* -------------------------------------------------------------- */

          /*                  Crear ruta de pagina interna                  */

          /* -------------------------------------------------------------- */

          posts.data.allWpPost.nodes.forEach(function (post) {
            createPage({
              path: "/blog/".concat(post.slug),
              component: path.resolve("src/templates/post/post.js"),
              context: {
                data: post
              }
            });
          });
          portafolios.data.allWpProyecto.nodes.forEach(function (portafolio) {
            createPage({
              path: "/portafolio/".concat(portafolio.slug),
              component: path.resolve("src/templates/proyecto/proyecto.js"),
              context: {
                data: portafolio
              }
            });
          });
          artes.data.allWpArte.nodes.forEach(function (arte) {
            createPage({
              path: "/artes/".concat(arte.slug),
              component: path.resolve("src/templates/arte/arte.js"),
              context: {
                data: arte
              }
            });
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
};