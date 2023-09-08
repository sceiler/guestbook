import { authOptions } from "@/app/lib/AuthOptions";
import { prisma } from "@/app/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email;

    const data = await request.json();
    
    const entry = await prisma.entry.create({
        data: {
            title: data.title,
            content: data.content,
            userId: 'clm9kypg90000ugcnnz13a6ov'
        },});

    return NextResponse.json(entry);
}

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    const entries = await prisma.entry.findMany({ where: { user: session?.user}});

    return NextResponse.json(entries);
}