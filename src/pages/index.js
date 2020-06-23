import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/first">First</Link> <br />
    <Link to="/lorem-ipsum-01">Lorem Ipsum 01</Link>
  </Layout>
);

export default IndexPage;
