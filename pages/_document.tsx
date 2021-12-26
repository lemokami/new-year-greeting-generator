import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      {/*  Primary Meta Tags  */}
      <meta name='title' content='Greetings Generator' />
      <meta
        name='description'
        content='Create greetings, to your loved ones with ease'
      />

      {/*  Open Graph / Facebook  */}
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content='https://greetings-generator.vercel.app'
      />

      <meta
        property='og:image'
        content='https://res.cloudinary.com/lemodrive/image/upload/v1640504612/greetings-generator/seo-banner-image.png'
      />

      {/*  Twitter  */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta
        property='twitter:url'
        content='https://greetings-generator.vercel.app'
      />
      <meta property='twitter:title' content='Greetings Generator' />
      <meta
        property='twitter:description'
        content='Create greetings, to your loved ones with ease'
      />
      <meta
        property='twitter:image'
        content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
