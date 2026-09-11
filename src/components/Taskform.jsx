function TaskForm({ taskInput, setTaskInput, addTask }) {
  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a task..."
      />

      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskForm;