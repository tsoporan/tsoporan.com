import "../styles/globals.css";

import Layout from "../components/layout";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default App;
