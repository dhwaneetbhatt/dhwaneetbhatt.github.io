const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx(filter: { frontmatter: { slug: { regex: "/musings/" } } }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const musings = result.data.allMdx.nodes;

  musings.forEach((musing) => {
    createPage({
      path: musing.frontmatter.slug,
      component: path.resolve('./src/templates/musing-template.js'),
      context: {
        slug: musing.frontmatter.slug,
      },
    });
  });
};
