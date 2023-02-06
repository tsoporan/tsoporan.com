import Link from "next/link";

function Sidebar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/log", label: "Log" },
  ];

  return (
    <div className="sidebar text-slate-700 h-60">
      <div className="flex gap-2 items-center">
        <img
          className="avatar rounded-full w-12"
          src="https://gravatar.com/avatar/44e31647c391b0991aeb810757a9e6f8"
          alt="tsoporan avatar"
        />

        <div className="flex-auto">
          <h1 className="text-lg font-semibold">Titus Soporan</h1>
          <p className="text-xs text-slate-500">Senior Software Developer</p>
        </div>
      </div>

      <div className="links my-8">
        <ul>
          {links.map((link) => (
            <li className="my-2" key={link.href}>
              <Link href={link.href} key={link.label} title={link.label}>
                <button className="py-2 px-2 rounded-md bg-gray-600 text-gray-100 hover:bg-gray-800 hover:text-white">
                  {link.label}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
