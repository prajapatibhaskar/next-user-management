"use client";

import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

const UpdateUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      alert("Please provide user id");
      return;
    }

    const requestedUserData = { id };

    if (name) {
      requestedUserData.name = name;
    }
    if (email) {
      requestedUserData.email = email;
    }
    if (password) {
      requestedUserData.password = password;
    }

    try {
      const response = await fetch("/api/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestedUserData),
      });

      if (response.ok) {
        alert("User info successfully updated");
        clearForm();
      } else {
        const data = await response.json();
        alert(data.result || "Something went wron while updating user info.");
      }
    } catch (error) {
      alert(error);
    }
  };

  const clearForm = () => {
    setId("");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          label="ID"
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <Input
          label="Name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button className="mt-2" type="submit">
          Update User
        </Button>
      </form>
    </div>
  );
};
export default UpdateUser;
