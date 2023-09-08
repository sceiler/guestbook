import { authOptions } from "@/app/lib/AuthOptions";
import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const currentUserEmail =
    (session && session.user && session.user.email) || undefined;

  const data = await request.json();
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" });
  }

  const entry = await prisma.entry.create({
    data: {
      title: data.title,
      content: data.content,
      userId: user?.id,
    },
  });

  return NextResponse.json(entry);
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  const entries = await prisma.entry.findMany({
    where: { user: session?.user },
  });

  return NextResponse.json(entries);
}