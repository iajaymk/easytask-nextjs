type Task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
};

const Task = ({
  task,
  completeTask,
}: {
  task: Task;
  completeTask: (id: string) => void;
}) => {
  return (
    <article className="p-2">
      <h2>{task?.title}</h2>
      <p className="text-[#3c2c50]">Due: {task?.dueDate}</p>
      <p>{task?.summary}</p>
      <div className="text-right mt-2">
        <button
          className=" bg-[#380774] text-white p-2 rounded-sm text-[14px] hover:bg-[#4a0774]"
          onClick={() => completeTask(task.id)}
        >
          Complete
        </button>
      </div>
    </article>
  );
};

export default Task;
