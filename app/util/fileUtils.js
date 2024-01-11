import fs from "fs";

export function writeUsersToFile(updatedUsersArray) {
  const updatedData = JSON.stringify(updatedUsersArray, null, 2);

  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData}`,
    "utf-8"
  );
}
