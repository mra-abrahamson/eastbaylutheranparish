import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import { H1 } from '../../components/headers';
import Breadcrumbs from '../../components/Breadcrumbs';

const title = 'Meet the Pastor';

const Image = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const Page = ({ data }) => (
  <Layout>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'About' }]}
      title={title}
    />
    <H1>{title}</H1>

    <Image>
      <Img sizes={data.heltonFamily.childImageSharp.sizes} />
    </Image>

    <p>
      Rev. Ned O'Donnell
    </p>

    <p>
      EBLP
    </p>

    <p>
     EBLP{' '}
      <a href="https://www.elca.org/" target="_blank" rel="noopener noreferrer">
        ELCA
      </a>
    </p>
  </Layout>
);

export default Page;

export const query = graphql`
  query PastorQuery {
    heltonFamily: file(relativePath: { eq: "pages/about/helton-family.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
