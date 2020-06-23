import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

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
        <br />
        <div dangerouslySetInnerHTML={{ __html: post.frontmatter.body }} />
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
        body
      }
    }
  }
`;
