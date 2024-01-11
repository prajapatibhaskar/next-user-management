import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

// 1. Get all users data
export async function GET() {
  const data = await users;

  return NextResponse.json({ data }, { status: 200 });
}
