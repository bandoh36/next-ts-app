import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="icon"
            type="image/ico"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link rel="shortcut icon" href="/favicons/portfolioFavicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap"
            rel="stylesheet"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-config"
            content="/favicons/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
