"use client";

import { useState } from "react";
import Header from "./components/Header";
import Task from "./components/Task";
import User from "./components/User";
import { DUMMY_USERS } from "./data/dummy_data";
import { UserType } from "./data/types";

export default function Home() {
  const [selectedUserId, setSelectedUserId] = useState("u1");

  const selectedUser = (): UserType => {
    return DUMMY_USERS.find((user) => user.id === selectedUserId)!;
  };

  return (
    <div>
      <Header />
      <div className="w-full px-4 py-6 flex gap-2">
        <ul>
          {DUMMY_USERS.map((user, index) => {
            return (
              <li key={index}>
                <User user={user} setSelectedUserId={setSelectedUserId} />
              </li>
            );
          })}
        </ul>

        <Task user={selectedUser()} />
      </div>
    </div>
  );
}
