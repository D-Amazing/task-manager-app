// src/pages/TaskForm.tsx
import React, { useState, useEffect } from "react";
import { Task } from "../types/Task";

interface Props {
  initialTask?: Task;
  onSubmit: (task: Task) => void;
}

const TaskForm: React.FC<Props> = ({ initialTask, onSubmit }) => {
  const [title, setTitle] = useState(initialTask?.title || "");
  const [description, setDescription] = useState(initialTask?.description || "");
  const [dueDate, setDueDate] = useState(initialTask?.dueDate || "");
  const [status, setStatus] = useState<Task["status"]>(initialTask?.status || "pending");


// ✅ useEffect to prefill the form if editing
  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setDescription(initialTask.description);
      setDueDate(initialTask.dueDate);
      setStatus(initialTask.status);
    }
  }, [initialTask]);

  // ✅ Handle form submission
  // This function is called when the form is submitted.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: initialTask?.id || crypto.randomUUID(),
      title,
      description,
      dueDate,
      status,
    };

    onSubmit(newTask);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className="border p-2 w-full"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 w-full"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as Task["status"])}
        className="border p-2 w-full"
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {initialTask ? "Update Task" : "Create Task"}
      </button>
    </form>
  );
};

export default TaskForm;

// This component renders a form for creating or editing a task.
// It accepts an optional initialTask prop for editing and an onSubmit callback to handle form submission
// The form includes fields for the task title, description, due date, and status.
// The handleSubmit function validates the input and constructs a Task object, which is then passed to the onSubmit callback.
// The component uses local state to manage the form inputs and updates them as the user types.
// The form is styled using Tailwind CSS classes for a clean and responsive design.
// The component is reusable for both creating new tasks and editing existing ones, depending on whether initial
// task data is provided. If initialTask is provided, the form will pre-fill with that task's data.
// If not, it will create a new task with a generated ID using crypto.randomUUID()