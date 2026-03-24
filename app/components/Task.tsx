import { UserType } from "../data/types";

const Task = ({ user }: { user: UserType }) => {
  console.log(user);

  return (
    <div className="py-2">
      <h2>Tasks for {user?.name}</h2>
    </div>
  );
};

export default Task;
