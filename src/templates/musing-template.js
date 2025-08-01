import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';

const MusingTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx;
  return (
    <Layout>
      <div style={{ color: '#666', fontSize: '0.9em', marginBottom: '1.5rem' }}>{frontmatter.date}</div>
      {body}
    </Layout>
  );
};

export default MusingTemplate;

export const pageQuery = graphql`
  query MusingBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMM DD, YYYY")
      }
      body
    }
  }
`;
