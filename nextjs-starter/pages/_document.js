import Document, { Head, Main, NextScript } from "next/document";

export default class DefaultDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    /**
     * Here we use _document.js to add a "lang" propery to the HTML object if
     * one is set on the page.
     **/
    return (
      <html lang={this.props.__NEXT_DATA__.props.lang || "en"}>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            // TODO: hardcoding a link to the widget's built css here. Wrong approach
            // The widget script should be loading his own css!
            href="http://localhost:5000/static/css/main.c17080f1.css"
          />
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
