import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Adventure = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <section>
        <Helmet titleTemplate="%s | Adventure">
          <title>{post.frontmatter.title}</title>
          <meta name="description" content={post.frontmatter.description} />
        </Helmet>

        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.description}</h2>
        <br />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
    </Layout>
  );
};

export default Adventure;

export const pageQuery = graphql`
  query AdventureByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
