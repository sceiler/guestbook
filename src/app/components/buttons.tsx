'use client';

import {signIn, signOut, useSession} from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
    const {data: session, status} = useSession();
    console.log(session, status);

    if (status === 'loading') {
        return <>...</>;
    }

    if (status === 'authenticated') {
        return (
            <Link href={'/dashboard'}>
                <Image
                    src={session.user?.image ?? '/vercel.svg'}
                    width={48}
                    height={48}
                    alt='Your profile picture'
                />
            </Link>
        );
    }

    return <button onClick={() => signIn()}>Sign In</button>;
}

export function SignOutButton() {
    return <button onClick={() => signOut()}>Sign Out</button>;
}