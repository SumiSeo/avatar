import Link from "next/link";

const NavBar = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/education">Education</Link>
    </nav>
  );
};

export default NavBar;
