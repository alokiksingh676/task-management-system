import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: taskInput,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };
  const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
};
  const toggleTask = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  );
};
  const [filter, setFilter] = useState("all");
  const filteredTasks = tasks.filter((task) => {
  if (filter === "completed") return task.completed;
  if (filter === "pending") return !task.completed;
  return true;
});
  const completedTasks = tasks.filter((task)=> task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;
  const editTask = (id) => {
  const task = tasks.find((task) => task.id === id);

  const newTitle = prompt("Edit task:", task.title);

  if (!newTitle || newTitle.trim() === "") return;

  setTasks(
    tasks.map((task) =>
      task.id === id
        ? { ...task, title: newTitle }
        : task
    )
  );
};
return (
    <div>
      <h1>Task Manager</h1>

      <TaskForm
  taskInput={taskInput}
  setTaskInput={setTaskInput}
  addTask={addTask}
/>
<div>
  <p>Total: {tasks.length}</p>
  <p>Pending: {pendingTasks}</p>
  <p>Completed: {completedTasks}</p>
</div>
    

     <FilterButtons
  filter={filter}
  setFilter={setFilter}
/>

      <TaskList
  tasks={filteredTasks}
  toggleTask={toggleTask}
  filter={filter}
  editTask={editTask}
  deleteTask={deleteTask}
/>
    </div>
  );
}

export default App;