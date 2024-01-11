import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";

// 1. Get all users data
export async function GET() {
  const data = await users;

  return NextResponse.json({ data }, { status: 200 });
}

// 4. Create new user
export async function POST(req, res) {
  const { id, name, email, password } = await req.json();

  //check if data is provided
  if (!id || !name || !email || !password) {
    return NextResponse.json(
      { result: "Fill all missing fields" },
      { status: 400 }
    );
  }
  // add new user to in-memory array
  users.push({ id, name, email, password });

  // extract just user array from the updated data\
  const updatedUsersArray = users;

  // convert updated users array to JSON string
  const updatedData = JSON.stringify(updatedUsersArray, null, 2);

  // Write updated users array to a db.js file
  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData}`,
    "utf-8"
  );

  return NextResponse.json({ success: "User successfully created." });
}

// 5. Update User
export async function PUT(req, res) {
  const { id, name, email, password } = await req.json();

  // find if user exists in db.js
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return NextResponse.json({ result: "User not found" }, { status: 404 });
  }

  if (name) {
    users[userIndex].name = name;
  }
  if (email) {
    users[userIndex].email = email;
  }
  if (password) {
    users[userIndex].password = password;
  }

  // extract just user array from the updated data\
  const updatedUsersArray = users;

  // convert updated users array to JSON string
  const updatedData = JSON.stringify(updatedUsersArray, null, 2);

  // Write updated users array to a db.js file
  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData}`,
    "utf-8"
  );

  return NextResponse.json({ success: "User successfully updated." });
}
