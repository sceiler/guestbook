export const dynamic = 'force-dynamic';
export const revalidate = 400;

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

export async function generateStaticParams() {
    const entries: Entry[] = await fetch('/api/content')
    .then(res => res.json());

    return entries.map(entry => ({
        id: entry.id,
    }));
}

export default async function EntryPage( { params }: Props ) {
    const entries: Entry[] = await fetch('/api/content')
        .then(res => res.json());

    const entry = entries.find(entry => entry.id === params.id)!;

    return (
        <div>
            <h1>Title: {entry.title}</h1>
            <p>Content: {entry.content}</p>
            <p>Username: {entry.username}</p>
            <p>Written: {entry.createdAt}</p>
        </div>
    )
}
