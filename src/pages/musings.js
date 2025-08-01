import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';

const Musings = ({ data }) => {
  const musings = data.allMdx.nodes;
  return (
    <Layout title='Musings'>
      <h1>💭 Musings</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {musings.map((musing) => (
          <li key={musing.id} style={{ marginBottom: '1.5rem' }}>
            <a href={musing.frontmatter.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ color: '#666', fontSize: '0.9em' }}>{musing.frontmatter.date}</div>
            </a>
            <a href={musing.frontmatter.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>{musing.excerpt}</div>
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Musings;

export const pageQuery = graphql`
  query MusingsQuery {
    allMdx(filter: { frontmatter: { slug: { regex: "/musings/" } } }, sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          date(formatString: "MMM DD, YYYY")
          slug
        }
        excerpt(pruneLength: 80)
      }
    }
  }
`;
