import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { CreateItemSchema } from "@/lib/validations";

export async function GET() {
  try {
    const items = await prisma.item.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(items);
  } catch {
    return NextResponse.json({ error: "Failed to fetch items" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = CreateItemSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }
    const item = await prisma.item.create({ data: parsed.data });
    return NextResponse.json(item, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create item" }, { status: 500 });
  }
}
