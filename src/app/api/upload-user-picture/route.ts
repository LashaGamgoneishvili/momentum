// import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";
export const revalidate = 0;

export async function POST(request: NextRequest) {
  const { blobUrl, userSub } = await request.json();
  const lastFiveCharacters = userSub.slice(-5);

  try {
    if (!blobUrl || !userSub) {
      throw new Error("Name, email, and age are required");
    }
    await sql`UPDATE Users SET image = ${blobUrl}  WHERE user_id = ${lastFiveCharacters};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users }, { status: 200 });
}
