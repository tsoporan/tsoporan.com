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
          <a
            className="text-green-600"
            title="Goodwater Capital"
            href="https://goodwatercap.com"
          >
            Goodwater Capital
          </a>
          , a VC firm focused on empowering entrepreneurs to change the world
          for good!
        </p>

        <p className="my-4">
          My interests tend to orbit around: startups, distributed systems,
          programming, security, and data. I'm also a huge fan of open source
          software, some of my favorites include: (Arch)Linux, Git, GPG (
          <a className="text-green-600 text-xs" href="/pubkey.asc">
            <code>0x59D03D532467C916</code>
          </a>
          ) , Python 🐍 and Vim.
        </p>

        <p className="my-4">
          When I'm not at the computer I enjoy{" "}
          <a
            href="https://www.goodreads.com/user/show/6979374-titus-soporan"
            title="Goodreads"
          >
            reading a good book
          </a>
          , taking hikes with my{" "}
          <a
            className="text-green-600"
            title="Zoto, my mini golden doodle"
            href=""
          >
            dog
          </a>
          , and strumming my{" "}
          <a
            title="Gibson Les Paul"
            className="text-green-600"
            href="https://en.wikipedia.org/wiki/Gibson_Les_Paul"
          >
            guitars
          </a>
          .
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
        <a
          className="text-green-600"
          href="https://github.com/tsoporan/tsoporan.com"
        >
          GitHub
        </a>
        .
      </div>
    </>
  );
}

export default Home;
