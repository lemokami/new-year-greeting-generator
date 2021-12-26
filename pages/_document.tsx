import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      {/*  Primary Meta Tags  */}
      <meta name='title' content='New year greetings Generator' />
      <meta
        name='description'
        content='Create new year greetings to your loved ones with ease'
      />

      {/*  Open Graph / Facebook  */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://newyear-gen.vercel.app/' />

      <meta
        property='og:image'
        content='https://res.cloudinary.com/lemodrive/image/upload/v1640504612/greetings-generator/seo-banner-image.png'
      />

      {/*  Twitter  */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://newyear-gen.vercel.app/' />
      <meta property='twitter:title' content='New year greetings Generator' />
      <meta
        property='twitter:description'
        content='Create greetings, to your loved ones with ease'
      />
      <meta
        property='twitter:image'
        content='https://res.cloudinary.com/lemodrive/image/upload/v1640504612/greetings-generator/seo-banner-image.png'
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
