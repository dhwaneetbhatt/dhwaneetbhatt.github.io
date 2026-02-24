/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';

const MusingTemplate = ({ data, children }) => {
  const { frontmatter } = data.mdx;
  return (
    <Layout>
      <div style={{ color: '#666', fontSize: '0.9em', marginBottom: '1.5rem' }}>{frontmatter.date}</div>
      <section sx={{ variant: 'layout.content' }}>
        {children}
      </section>
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
    }
  }
`;
