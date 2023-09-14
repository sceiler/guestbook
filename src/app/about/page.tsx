import {Metadata} from "next";

export const metadata: Metadata = {
    title: "About us",
    description: "This is a guestbook.",
};

export default async function About() {
    return (
        <main>
            <h1 data-testid={'about-us'} id={'about-us'} className="mx-1 text-xl">About us</h1>
            <p data-testid={'about-us-paragraph'} id={'about-us-paragraph'} className="mx-1">This is a guestbook.</p>
        </main>
    )
}