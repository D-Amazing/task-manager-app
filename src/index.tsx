import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter,  } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider"; // 👈 Clean import
import { TaskProvider } from "./context/TaskContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// This is the main entry point of the React application.
// It imports necessary dependencies, styles, and components.
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement); 

root.render(
  <React.StrictMode>
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <App />
          <ToastContainer position="top-center" autoClose={3000} />
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  </React.StrictMode>
);



// This is the entry point of the React application.
// It renders the App component wrapped in a TaskProvider and BrowserRouter.
// The TaskProvider provides the task management context to the entire application,
// allowing components to access and manage tasks.  
// The BrowserRouter enables client-side routing, allowing the application to navigate between different pages without reloading the entire page.
// The global styles are imported from index.css to apply consistent styling across the application.
// The React.StrictMode is used to highlight potential problems in the application during development.
// It helps identify unsafe lifecycles, legacy API usage, and other issues that may affect
// the performance and maintainability of the application.
// The ReactDOM.createRoot method is used to create a root for the React application,
// which is then rendered into the HTML element with the ID "root".
// This setup is typical for modern React applications, providing a clean and efficient way to manage state
// and routing while ensuring a responsive and user-friendly interface.   
// The application can be extended with additional features such as authentication, task filtering, and sorting,
// making it a robust task management solution.
