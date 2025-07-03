// src/pages/Dashboard.tsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import { Task } from "../types/Task";
import { toast } from "react-toastify"; 

const Dashboard: React.FC = () => {
  const { tasks, deleteTask } = useContext(TaskContext)!;

toast.success("Task created!");
toast.error("Something went wrong."); 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Task Dashboard</h1>
      <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded">
        + New Task
      </Link>

      <ul className="mt-6 space-y-4">
        {tasks.map((task: Task) => (
          <li key={task.id} className="border p-4 rounded shadow-md bg-white">
            <Link to={`/task/${task.id}`}>
              <h2 className="text-xl font-semibold">{task.title}</h2>
            </Link>
            <p>{task.status}</p>
            <div className="space-x-2 mt-2">
              <Link to={`/edit/${task.id}`} className="text-blue-500 underline">
                Edit
              </Link>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul> 
    </div>
  );
};

export default Dashboard;
// This component renders the task dashboard, displaying a list of tasks with options to create, edit, and delete tasks.
// It uses the TaskContext to access the tasks and the deleteTask function.
// The tasks are displayed in a list, with each task showing its title and status.
// The component also includes a link to create a new task, which navigates to the task
// creation page, and links to edit each task, which navigates to the task editing page.
// The delete button calls the deleteTask function from the context to remove the task from the list
// when clicked. The component is styled using Tailwind CSS classes for a clean and responsive design.
// The useContext hook is used to access the TaskContext, which provides the tasks and deleteTask function.
// The component is wrapped in a div with padding and includes a heading for the dashboard.
// The tasks are mapped over to create a list of task items, each with a link to view the task details,
// an edit link, and a delete button. The delete button calls the deleteTask function with
// the task ID to remove the task from the context state.
// The component is designed to be responsive and user-friendly, allowing users to manage their tasks efficiently