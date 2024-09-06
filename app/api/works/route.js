import connectMongoDB from "@/libs/mongodb";
import Work from "@/models/work";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Work.create({ title, description });

  return NextResponse.json(
    { message: "Work item created successfully" },
    { status: 201 }
  );
}
