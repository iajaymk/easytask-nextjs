"use client";

import { useEffect, useState } from "react";
import { dummyTasks } from "../data/dummy_data";
import { UserType } from "../data/types";
import Task from "./Task";

const Tasks = ({ user }: { user: UserType }) => {
  const [currentUserTasks, setCurrentUserTasks] = useState(
    dummyTasks.filter((task) => task.userId === user.id),
  );

  const completeTask = (taskId: string) => {
    setCurrentUserTasks(currentUserTasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    setCurrentUserTasks(dummyTasks.filter((task) => task.userId === user.id));
  }, [user.id]);

  return (
    <section className="py-2">
      <header>
        <h2>
          <strong>{user.name}</strong>&apos;s tasks
        </h2>
        <menu>
          <button>Add Task</button>
        </menu>
      </header>
      <ul>
        {currentUserTasks.map((task) => {
          return (
            <li
              key={task.id}
              className="bg-[#bf9ee5] text-[#25113d] my-2 p-2 rounded-lg"
            >
              <Task task={task} completeTask={completeTask} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Tasks;
