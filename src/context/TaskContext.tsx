import React, { createContext, useEffect, useState } from "react";
import { Task } from "../types/Task";

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // ✅ Load tasks from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("task-list");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  // ✅ Save tasks to localStorage when they change
  useEffect(() => {
    localStorage.setItem("task-list", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const updateTask = (updated: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updated.id ? updated : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// This context provides a way to manage tasks in the application.
// It includes functions to add, update, and delete tasks, as well as the current list
// of tasks. The TaskProvider component wraps the application to provide this context to all components.
// The TaskContext is created using React's createContext function, and it is typed to ensure
// that the context value includes the tasks array and the task management functions.

// The TaskProvider component uses the useState hook to manage the tasks state.
// It initializes the tasks state as an empty array and provides functions to add, update, and
// delete tasks. The addTask function appends a new task to the tasks array, the updateTask function
// replaces an existing task with the updated task, and the deleteTask function filters out a task
// by its ID. These functions are passed down through the TaskContext.Provider, allowing any component
// that consumes this context to access and manipulate the tasks state.
// The TaskContext is exported for use in other components, allowing them to access the tasks
// and the task management functions. Components can use the useContext hook to consume the TaskContext
// and perform operations on the tasks, such as adding a new task, updating an existing task,
// or deleting a task. This pattern promotes a clean separation of concerns and makes it easy to