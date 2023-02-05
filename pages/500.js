import Head from "next/head";

export default function Custom404() {
  return (
    <div className="container">
      <Head>
        <title>tsoporan.com | 500</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-xl">500</h1>
        <p className="text-sm text-slate-500">
          Something is borked, please try again later.
        </p>
      </main>
    </div>
  );
}
