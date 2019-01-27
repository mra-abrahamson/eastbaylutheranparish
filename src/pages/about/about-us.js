import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import { H1, H2 } from '../../components/headers';
import BibleQuote from '../../components/BibleQuote';
import Breadcrumbs from '../../components/Breadcrumbs';

const title = 'About Us';

const Image = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const AboutUs = ({ data }) => (
  <Layout>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'About' }]}
      title={title}
    />
    <H1>{title}</H1>

    <p>
     EBLP
    </p>

    <Image>
      <Img sizes={data.worship.childImageSharp.sizes} />
    </Image>

    <H2>   EBLP</H2>

    <BibleQuote reference="1 John 5:12">
      “Whoever has the Son has life; whoever does not have God’s Son does not
      have life.”
    </BibleQuote>

    <p>
      <b>Mission</b>: “Jesus came and told his disciples, “I have been given all
      authority in heaven and on earth. Therefore, go and make disciples of all
      the nations, baptizing them in the name of the Father and the Son and the
      Holy Spirit. Teach these new disciples to obey all the commands I have
      given you. And be sure of this: I am with you always, even to the end of
      the age.” Matthew 28:18-20
    </p>

    <p>
      <b>Mission Motto</b>:  EBLP
    </p>

    <p>
      <b>Vision</b>:    EBLP
    </p>

    <p>
      <b>Strategy</b>:
    </p>
    <ul>
      <li>   EBLP</li>
      <li>   EBLP</li>
      <li>GET GOING! Serve, support, meet needs & share Jesus.</li>
    </ul>

    <p>
      <b>Values</b>:
    </p>

    <ul>
      <li>
        <b>Focus</b> – We will be guided by focusing on the mission Jesus gave
        His followers and the callings of the church to Evangelism, Ministry,
        Worship, Discipleship, and Fellowship, aware of our natural tendency to
        focus on self, those reached, and to slip in to maintenance mode, or
        busy church programming.
      </li>
      <li>
        <b>Grace</b> – We will humbly serve and love one another and both the
        easy to love and difficult outside our church family. We will humbly
        submit and support the imperfect leadership of the church and put others
        first.
      </li>
      <li>
        <b>Joy</b> – As we celebrate Jesus and live a life in God’s family our
        lives should be full of authentic joy than is attractive to those
        without God’s peace and forgiveness. We will have fun as a church
        family.
      </li>
    </ul>

    <p>
      We are partnered with the{' '}
      <a href="https://www.elca.org" target="_blank" rel="noopener noreferrer">
      ELCA
      </a>, the{' '}
      <a href="https://www.elca.org" target="_blank" rel="noopener noreferrer">
      ELCA
      </a>, and the{' '}
      <a href="https://www.elca.org" target="_blank" rel="noopener noreferrer">
      ELCA
      </a>.
    </p>
  </Layout>
);

export default AboutUs;

export const query = graphql`
  query AboutUsQuery {
    worship: file(relativePath: { eq: "pages/about/worship.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
