import Link from "next/link";

const NavBar = () => {
  return (
    <div className="max-w-screen-md">
      <nav className=" flex items-center justify-between flex-wrap p-6 ">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto bord font-mono">
          <div className="text-sm lg:flex-grow">
            <Link legacyBehavior href="/">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10 ">
                About
              </a>
            </Link>
            <Link legacyBehavior href="/mint">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
                Mint
              </a>
            </Link>
            <Link legacyBehavior href="/contract">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10">
                Contract
              </a>
            </Link>
            <Link legacyBehavior href="/check-sbtn">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Check SBTn
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
