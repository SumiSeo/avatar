import Link from "next/link";
import Image from "next/image";

const NavBar = (): JSX.Element => {
  return (
    <nav>
      {/*  <Image src={} alt = {}/> */}
      <Link href="/">Home</Link>
      <Link href="/education">Education</Link>
    </nav>
  );
};

export default NavBar;
