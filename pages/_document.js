import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  componentDidUpdate(){
    console.log("DOC", this.props)
  }

  render() {
    return (
      <html>
        <Head>
          <title>Seed Tracker Technology</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:100,300"
            rel="stylesheet"
          />
          <link
            href="../static/fonts/Hominis/stylesheet.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
         
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
// <link rel="icon" href="static/images/favicon.png"/>