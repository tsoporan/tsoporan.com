import { Head, Html, Main, NextScript } from "next/document";

const styles = {
  backgroundImage:
    "linear-gradient(  200deg, hsl(0deg 0% 100%) 0%, hsl(344deg 0% 100%) 4%, hsl(344deg 0% 99%) 9%, hsl(344deg 0% 99%) 15%, hsl(344deg 0% 98%) 26%, hsl(344deg 0% 98%) 54%, hsl(344deg 0% 97%) 78%, hsl(344deg 0% 97%) 88%, hsl(344deg 0% 97%) 95%, hsl(0deg 0% 96%) 100%)",
};

export default function Document() {
  return (
    <Html lang="en" style={styles}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
