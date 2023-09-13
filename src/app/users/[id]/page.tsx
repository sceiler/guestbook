import {prisma} from '../../lib/prisma';
import {Metadata} from 'next';

interface Props {
    params: {
        id: string;
    };
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const user = await prisma.user.findUnique({where: {id: params.id}});
    return {title: `User profile of ${user?.name}`};
}

export default async function UserProfile({params}: Props) {
    const user = await prisma.user.findUnique({where: {id: params.id}});
    const {name, email, image, id} = user ?? {};

    return (
        <div className='mx-4 my-2'>
            <h1>{name}</h1>

            <img
                width={300}
                src={image ?? '/vercel.svg'}
                alt={`${name}'s profile`}
            />

            <h3>E-Mail</h3>
            <p>{email}</p>

        </div>
    );
}