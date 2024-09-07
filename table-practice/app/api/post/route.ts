import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function GET() {
  try {
    const table = await db.posts.findMany();
    return NextResponse.json({ table });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      return NextResponse.json({ error: e.code });
    }
    throw e;
  }
}

export async function POST(req: NextRequest) {
  const requestBody = await req.json();
  await db.posts.create({
    data: requestBody,
  });
  return NextResponse.json(requestBody);
}
