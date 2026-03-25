"use client";

import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
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
      <div className="w-full px-4 py-6 flex flex-col md:flex-row gap-5">
        <ul className="flex md:flex-col overflow-x-scroll gap-2 md:gap-0">
          {DUMMY_USERS.map((user, index) => {
            return (
              <li key={index} className="mx-2 md:mx-0">
                <User user={user} setSelectedUserId={setSelectedUserId} />
              </li>
            );
          })}
        </ul>

        <Tasks user={selectedUser()} />
      </div>
    </div>
  );
}
