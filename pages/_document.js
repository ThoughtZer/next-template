import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    // 获取 ctx 本来的 renderPage 重写
    const originRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () => originRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        // enhanceComponent: (Component) => Component,
      });

      const props = await Document.getInitialProps(ctx);
      return {
        ...props,
        styles: (
          <>
            { props.styles }
            { sheet.getStyleElement() }
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
