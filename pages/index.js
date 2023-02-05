import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Titus Soporan | Software Engineering @ Goodwater Capital</title>
      </Head>
      <div className="text-slate-700 subpixel-antialiased leading-relaxed">
        <p className="my-4">
          Heya 👋! Welcome to my little slice of the web. I solve problems using
          software. I'm currently at{" "}
          <a className="text-green-600" href="https://goodwatercap.com">
            Goodwater Capital
          </a>
          , a VC firm focused on empowering entrepreneurs to change the world
          for good!
        </p>

        <p className="my-4">
          My interests tend to orbit around: formal languages, software
          architecture, distributed systems, security, and data. I'm also a huge
          fan of open source software, some of my favorites include:
          (Arch)Linux, Git, GPG, Python and Vim.
        </p>

        <p className="my-4">
          When I'm not at the computer I enjoy reading a good book, playing with
          the pup, fiddling on my guitar, and adventuring in the "outside
          world".
        </p>
      </div>
      <div className="text-xs">
        This site is built with{" "}
        <a className="text-green-600" href="https://nextjs.org">
          Next.js
        </a>{" "}
        and{" "}
        <a className="text-green-600" href="https://tailwindcss.com">
          TailwindCSS
        </a>
        . The source code is available on{" "}
        <a className="text-green-600" href="https://github.com/tso/tso.dev">
          GitHub
        </a>
        .
      </div>
    </>
  );
}

export default Home;
