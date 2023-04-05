import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />

          <meta
            name="description"
            content="Creators & Entrepreneurs use Mainstack to showcase their incredible works without writing codes."
          />
          <link
            rel="icon"
            href="https://res.cloudinary.com/codeleaf/image/upload/v1668525892/mainstack_logo.jpg"
          />
          <meta
            itemProp="name"
            content="Mainstack®︁ - Showcase your works with one-page site."
          />
          <meta
            itemProp="description"
            content="Creators & Entrepreneurs use Mainstack to showcase their incredible works without writing codes."
          />
          <meta
            itemProp="image"
            content="https://res.cloudinary.com/codeleaf/image/upload/v1668525892/mainstack_logo.jpg"
          />
          <meta property="og:url" content="http://mainstack.me" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Mainstack®︁ - Showcase your works with one-page site."
          />
          <meta
            property="og:description"
            content="Creators & Entrepreneurs use Mainstack to showcase their incredible works without writing codes."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/mainstack-co/image/upload/v1657122127/mainstack%20logo/favico_new.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Mainstack®︁ - Showcase your works with one-page site."
          />
          <meta
            name="twitter:description"
            content="Creators & Entrepreneurs use Mainstack to showcase their incredible works without writing codes."
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/mainstack-co/image/upload/v1657122127/mainstack%20logo/favico_new.jpg"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <div>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;600&display=swap"
              rel="stylesheet"
            />
          </div>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
