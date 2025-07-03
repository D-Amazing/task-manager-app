// src/pages/TaskDetail.tsx
import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

const TaskDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks, deleteTask } = useContext(TaskContext)!;

  const task = tasks.find(t => t.id === id);
  if (!task) return <p>Task not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p className="mt-2">{task.description}</p>
      <p className="mt-2">Due: {task.dueDate}</p>
      <p className="mt-2">Status: {task.status}</p>

      <div className="space-x-4 mt-4">
        <Link to={`/edit/${task.id}`} className="text-blue-600 underline">
          Edit
        </Link>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-600 underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskDetail;
// This component displays the details of a specific task.
// It retrieves the task ID from the URL parameters and uses the TaskContext to find the task
// If the task is found, it displays the task's title, description, due date, and status.
// It also provides links to edit the task and delete it.
// The edit link navigates to the task editing page, while the delete button calls the deleteTask function
// from the context to remove the task from the list when clicked.
// The component is styled using Tailwind CSS classes for a clean and responsive design.
// The useContext hook is used to access the TaskContext, which provides the tasks and deleteTask function.
// The component is wrapped in a div with padding and includes a heading for the task title.
// The task details are displayed in a structured format, with each detail on a new line.
// The edit link and delete button are styled for better visibility and user interaction.
// The component is designed to be user-friendly, allowing users to view task details easily.
// The component can be extended in the future to include additional task properties or actions,
// such as marking the task as complete or adding comments.
// The component is reusable and can be integrated into the task management application to display task details.
// The component can also handle cases where the task is not found, displaying a message to the
// user indicating that the task does not exist.
// The component is designed to be responsive and works well on different screen sizes.
// The component can be easily modified to include additional features, such as task history or activity logs,
// depending on the application's requirements.
// The component is a crucial part of the task management system, providing users with a clear view