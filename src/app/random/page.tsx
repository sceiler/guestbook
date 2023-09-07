export const dynamic = 'force-dynamic';

interface Entry {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    username: string;
    language: string;
}

interface Props {
    params: { id: string };
}

export default async function RandomEntryPage( { params }: Props ) {
    const entries: Entry[] = await fetch('http://localhost:3000/api/content')
        .then(res => res.json());

    // Choose a random index from the entries array
    const randomIndex = Math.floor(Math.random() * entries.length);
    const entry = entries[randomIndex];

    return (
        <div>
            <h1>Title: {entry.title}</h1>
            <p>Content: {entry.content}</p>
            <p>Username: {entry.username}</p>
            <p>Written: {entry.createdAt}</p>
        </div>
    )
}
