// src/pages/EditTask.tsx
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "./TaskForm"; // Importing TaskForm from the pages directory to handle task editing
// This import assumes TaskForm is a form component that handles both creating and editing tasks.
import { TaskContext } from "../context/TaskContext"; // Importing TaskContext to access task management functions

const EditTask: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { tasks, updateTask } = useContext(TaskContext)!;

  const task = tasks.find((t) => t.id === id);
  if (!task) return <p>Task not found</p>;

  const handleUpdate = (updatedTask: typeof task) => {
    updateTask(updatedTask);
    navigate("/");
  };
    // This function handles the task update by calling the updateTask function from the context
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Edit Task</h2>
      <TaskForm initialTask={task} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditTask;
// This component allows users to edit an existing task.
// It retrieves the task ID from the URL parameters and uses the TaskContext to find the task