import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    var props = await Document.getInitialProps(ctx)
    return { ...props }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/static/bread.png"/>
          
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument