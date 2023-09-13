import Link from 'next/link';

interface Props {
    id: string;
    name: string | null;
    age: number | null;
    image: string | null;
}

export default function UserCard({id, name, age, image}: Props) {
    return (
        <div className="card mx-2 my-2 border-solid border-2">
            <img
                src={image ?? '/vercel.svg'}
                alt={`${name}'s profile`}
                className="cardImage"
            />
            <div className="cardContent">
                <h3>
                    <Link href={`/users/${id}`}>{name}</Link>
                </h3>
                <p>Age: {age}</p>
            </div>
        </div>
    );
}