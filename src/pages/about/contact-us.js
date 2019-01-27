import React from 'react';

import Layout from '../../components/layout';
import { H1 } from '../../components/headers';
import Breadcrumbs from '../../components/Breadcrumbs';
import EmbedForm from '../../components/EmbedForm';

const title = 'Contact Us';

const Page = () => (
  <Layout>
    <Breadcrumbs
      path={[{ title: 'Home', url: '/' }, { title: 'About' }]}
      title={title}
    />
    <H1>{title}</H1>

    <p>
      EBLP
    </p>
    <p>
      Email us at{' '}
      <a href="eastbaylutheranparish@gmail.com">
      eastbaylutheranparish@gmail.com
      </a>{' '}
      {/* or fill out the form below. */}
    </p>

    <br />

    {/* <EmbedForm src="https://lifestonechurch.breezechms.com/form/39150e" /> */}
  </Layout>
);

export default Page;
