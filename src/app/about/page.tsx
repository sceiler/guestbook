import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description: "This is a guestbook.",
};

export default async function About() {
  return (
    <main>
      <h1 className="mx-1 text-xl">About us</h1>
      <p className="mx-1">This is a guestbook.</p>
    </main>
  )
}