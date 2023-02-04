import Link from "next/link";

function Home() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/log", label: "Log" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <div>
      <ul>
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
