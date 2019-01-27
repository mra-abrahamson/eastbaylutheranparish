import React from 'react';

import Layout from '../../components/layout';
import { H1 } from '../../components/headers';
import BibleQuote from '../../components/BibleQuote';
import Breadcrumbs from '../../components/Breadcrumbs';

const title = 'What We Believe';

const Page = () => (
  <Layout>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'About' }]}
      title={title}
    />
    <H1>{title}</H1>

    <BibleQuote reference="Romans 6:23">
      "For the wages of sin is death, but the free gift of God is eternal life
      through Christ Jesus our Lord."
    </BibleQuote>

    <p>
      EBLP
    </p>

    <p>
    EBLP
    </p>

    <p>
    EBLP
    </p>

    <p>
    EBLP
    </p>

    <p>
      <a
        href="https://www.elca.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        EBLP
      </a>
    </p>
  </Layout>
);

export default Page;
