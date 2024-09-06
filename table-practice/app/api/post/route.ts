import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const table = await db.posts.findMany();
  return NextResponse.json({ table });
}

export async function POST(req: NextRequest) {
  const requestBody = await req.json();
  await db.posts.create({
    data: requestBody,
  });
  return NextResponse.json(requestBody);
}
