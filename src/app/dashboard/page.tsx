import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../lib/AuthOptions";
import { prisma } from "../lib/prisma";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for signed in users.",
};

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const entries = await prisma.entry.findMany({
    where: {
      user: session?.user,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="mx-2 my-2">
      {entries.map((entry) => {
        return (
          <>
            <h1>Title: {entry.title}</h1>
            <p>Content: {entry.content}</p>
            <hr></hr>
          </>
        );
      })}
    </div>
  );
}
