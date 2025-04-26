/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

// const path = require('path')

// // Create category pages
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const categoryTemplate = path.resolve(`src/templates/category-template.js`)

//   const result = await graphql(`
//     query {
//       dataJson {
//         quotes {
//           author
//           text
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     throw result.errors
//   }

//   // Since our sample data doesn't have categories, we'll create a single "Wisdom" category
//   // Alternatively, you could skip category page creation altogether
//   createPage({
//     path: `/category/wisdom`,
//     component: categoryTemplate,
//     context: {
//       category: 'Wisdom',
//     },
//   })
// } 