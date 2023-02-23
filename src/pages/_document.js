import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.svg" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.svg" />
        <meta name="theme-color" content="#ffffff"></meta>

        <link href="/font/stylesheet.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap" rel="stylesheet"></link>

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.min.css" rel="stylesheet"></link>
      </Head>
      <body data-layout="detached" data-topbar="colored">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
