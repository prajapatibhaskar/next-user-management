import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

// 2. Get specific user by id
export async function GET(req, res) {
  const { id } = await res.params;

  const user = users.filter((user) => user.id === id);

  return NextResponse.json({ user });
}

// 3. Login
export async function POST(req, res) {
  const { name, email, password } = await req.json();
  const { id } = await res.params;

  const { name: uName, email: uEmail, password: uPassword } = users.find((user) => user.id === id);

  if (uName === name && uEmail === email && uPassword === password) {
    return NextResponse.json({ result: "Successfully Logged In" });
  } else if (!name || !email || !password) {
    return NextResponse.json({ result: "Missing required Fields" });
  } else {
    return NextResponse.json({ result: "Invalid Credentials" });
  }
}
