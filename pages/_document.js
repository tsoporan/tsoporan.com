import { Head, Html, Main, NextScript } from "next/document";

const linearGradient = `
linear-gradient(196deg, rgb(255, 255, 255) 0%, rgb(255 255 255) 4%, rgb(252, 252, 252) 15%, rgb(252, 252, 252) 5%, rgb(238 238 238) 26%, rgb(255 255 255) 54%, rgb(218 218 218) 78%, rgb(127 202 126) 113%, rgb(247, 247, 247) 95%, rgb(245, 245, 245) 100%)
`;

const styles = {
  backgroundImage: linearGradient,
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
