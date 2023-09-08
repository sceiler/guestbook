import { getServerSession } from 'next-auth';
import UserCard from '../components/UserCard/UserCard';
import { prisma } from '../lib/prisma';
import { redirect } from 'next/navigation';
import { authOptions } from '../lib/AuthOptions';

export default async function Users() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }
  
  const users = await prisma.user.findMany();

  return (
    <div className="grid">
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </div>
  );
}