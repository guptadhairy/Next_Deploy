"use client";
import { useState } from "react";
export default function Home() {
  const [email, setEmail] = useState("");
  return (
    <div className="border p-8 rounded">
      <div>
        <div>Email</div>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type={"text"}
          placeholder={"Email"}
        />
      </div>

      <div>
        <button
          onClick={async () => {
            await fetch("/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email,
              }),
            });

            alert("Registered!");
          }}
          type="button"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
