import * as React from 'react';
import { Helmet } from 'react-helmet';

interface ISEOProps {
  lang?: string;
  title?: string;
  metaDescription?: string;
  author?: string;
}
const SEO = ({ lang = 'en', title, metaDescription, author = 'The Freezar Nigeria' }: ISEOProps): JSX.Element => (
  <Helmet
    htmlAttributes={{ lang }}
    title={title}
    defaultTitle="The Freezar"
    titleTemplate={`%s | The Freezar`}
    meta={[
      {
        name: `description`,
        content: metaDescription,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: metaDescription,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: author,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: metaDescription,
      },
    ]}
  >
    <base target="_blank" href="/" />
  </Helmet>
);

export default SEO;
