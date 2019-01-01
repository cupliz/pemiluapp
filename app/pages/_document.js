import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="static/css/materialize.min.css" />
          <link rel="stylesheet" href="static/css/style.css" />
        </Head>
        <Main />
        <NextScript />
        
        <script src="static/js/materialize.min.js"></script>
        <script> M.AutoInit() </script>
      </html>
    )
  }
}
