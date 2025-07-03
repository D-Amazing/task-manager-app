// src/hooks/useTasks.ts
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
// This custom hook provides access to the TaskContext, allowing components to easily access
// the tasks and task management functions without needing to use the useContext hook directly.
// It ensures that the hook is used within a TaskProvider, throwing an error if it is not.
// This pattern promotes better code organization and reusability, making it easier to manage tasks
// throughout the application. Components can import this hook and use it to get the tasks,
// add new tasks, update existing tasks, or delete tasks without needing to directly interact with