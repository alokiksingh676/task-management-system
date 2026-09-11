import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  filter,
  toggleTask,
  editTask,
  deleteTask
}) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>
          {filter === "completed"
            ? "No completed tasks."
            : filter === "pending"
            ? "No pending tasks."
            : "No tasks available."}
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;