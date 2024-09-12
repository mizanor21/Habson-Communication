import connectToDatabase from "@/lib/mongoose";
import Work from "@/models/work";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();

    const data = await Work.find({});

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("myFirstDatabase");

    const body = await request.json();

    const result = await db.collection("works").insertOne(body);

    return NextResponse.json(
      { message: "Data inserted", result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error inserting data:", error);

    return NextResponse.json(
      { error: "Failed to insert data" },
      { status: 500 }
    );
  }
}
