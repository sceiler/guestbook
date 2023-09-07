import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer links">
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </footer>
  );
}
