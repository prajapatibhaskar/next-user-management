import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

// 2. Get specific user by id
export async function GET(req, res) {
  const { id } = await res.params;

  const user = users.filter((user) => user.id === id);

  return NextResponse.json({ user });
}
