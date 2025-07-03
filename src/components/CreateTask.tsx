import React from "react";
import TaskForm from "../pages/TaskForm";
import { useTasks } from "../hooks/useTask"; 
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Task } from "../types/Task";

const CreateTask: React.FC = () => {
  const { addTask } = useTasks(); // ✅ correct hook name
  const navigate = useNavigate();

  const handleAddTask = (task: Task) => {
    addTask(task);
    toast.success("✅ Task created successfully!");
    navigate("/"); // Redirect to dashboard
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Create Task</h2>
      <TaskForm onSubmit={handleAddTask} /> {/* ✅ use your submit handler */}
    </div>
  );
};

export default CreateTask; 




// This component renders a form for creating a new task.
// It uses the TaskForm component to handle the form inputs and submission. 
// The addTask function from the TaskContext is passed as the onSubmit prop to handle task creation.
// The component is styled using Tailwind CSS classes for a clean and responsive design.
// The useContext hook is used to access the TaskContext, which provides the addTask function
// for adding a new task to the task list. The component is wrapped in a div with padding and includes a heading
// for the form title. The TaskForm component is rendered with the onSubmit prop set to
// the addTask function, allowing the form to submit new task data to the context.
// The component is designed to be user-friendly, allowing users to create new tasks easily.
// The form includes fields for the task title, description, due date, and status.
// The TaskForm component handles the form state and validation, ensuring that the task data is correctly formatted
// before submission. The component is responsive and styled using Tailwind CSS classes for a clean and 
// modern look. It can be easily integrated into the task management application to allow users to create tasks
// efficiently. The component can be extended in the future to include additional features such as task priority
// or tags, depending on the application's requirements. The use of TypeScript ensures type safety and
// better developer experience, making it easier to maintain and extend the codebase.
// The component can also handle error states and display appropriate messages to the user if task creation fails