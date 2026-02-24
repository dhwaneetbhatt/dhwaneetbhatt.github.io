const path = require('path');

const musingTemplate = path.resolve('./src/templates/musing-template.js');

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
          internal {
            contentFilePath
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
      component: `${musingTemplate}?__contentFilePath=${musing.internal.contentFilePath}`,
      context: {
        slug: musing.frontmatter.slug,
      },
    });
  });
};
