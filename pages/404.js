import Head from "next/head";

export default function Custom404() {
  return (
    <div className="container">
      <Head>
        <title>tsoporan.com | 404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-xl">404</h1>
        <p className="text-sm text-slate-500">
          This is not the page you are looking for.
        </p>
      </main>
    </div>
  );
}
