import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../../components/layout';
import { H1 } from '../../../components/headers';
import Breadcrumbs from '../../../components/Breadcrumbs';
import GoogleMap from '../../../components/GoogleMap';

const title = 'Visit';

const Image = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const MapContainer = styled.div`
  max-width: 900px;
`;

const Visit = ({ data }) => (
  <Layout>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'About' }]}
      title={title}
    />
    <H1>{title}</H1>

    <Image>
      <Img sizes={data.cafeImage.childImageSharp.sizes} />
    </Image>

    <p>
    EBLP
    </p>

    <p>
    EBLP
    </p>

    <p>
      <b>Dress</b>: EBLP
    </p>

    <p>
      <b>Time frame</b>: EBLP.{' '}
    </p>

    <p>
      <b>Arriving</b>: EBLP
    </p>

    {/* <p>
      <b>Kid’s Life</b>: We encourage you to bring your kiddos (infants through
      5th graders) to participate in our fun, safe, kid-friendly activities
      while you attend the adult service. Kids are very important to us here at
      Lifestone, and our goal is to teach them about Jesus’ love in a way that
      they will understand and enjoy!
    </p> */}

    {/* <p>For more information on our children’s program, click here.</p> */}

    {/* <p>
      <b>Breakfast</b>: For your convenience, a simple breakfast with donuts,
      coffee, tea, and hot chocolate will be set up for you outside the worship
      area.
    </p>

    <p>
      <b>Music</b>: Come enjoy contemporary praise songs as well as some old
      hymns with modern arrangements.
    </p>

    <p>
      <b>Teaching</b>: Be encouraged by biblical teaching that is useful in
      every day living.
    </p> */}

    <p>
      <b>Directions</b>:
    </p>

    <p>650 Alma Ave, Oakland, CA 94610</p>

    <MapContainer>
      <GoogleMap />
    </MapContainer>
  </Layout>
);

export default Visit;

export const query = graphql`
  query VisitQuery {
    cafeImage: file(relativePath: { eq: "pages/about/visit/cafe.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
