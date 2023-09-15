import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Contact us",
    description: "This is how to contact us: my-email@gmail.com",
};

export default async function Contact() {
    return (
        <main>
            <h1 data-testid={'contact-us'} id={'contact-us'} className="mx-1 text-xl">Contact us</h1>
            <p data-testid={'contact-us-paragraph'} id={'contact-us-paragraph'} className="mx-1">This is how to contact
                us: my-email@gmail.com</p>
        </main>
    )
}