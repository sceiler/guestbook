import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignOutButton } from "./components/buttons";
import AuthCheck from "./components/AuthCheck";

export default function NavMenu() {
  return (
    <nav className="nav">
      <Link href={"/"}>
        <nav className="logo">
          <Image src="/logo.svg" alt="logo" width={80} height={80} />
          <span className="title">Guestbook</span>
        </nav>
      </Link>
      <ul className="nav links">
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/random"}>Random</Link>
        </li>
        <AuthCheck>
          <li>
            <SignOutButton />
          </li>
        </AuthCheck>
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
}
