import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./components/PrivateRoute"; 
import AuthButtons from "./components/AuthButtons"; 
import React from "react"; 
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TaskDetail from "./pages/TaskDetail";
import CreateTask from "./components/CreateTask";
import EditTask from "./pages/EditTask";
import LandingPage from "./pages/LandingPage";

const App: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading authentication...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <AuthButtons />
      </header>

      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <PrivateRoute component={Dashboard} />
            ) : (
              <LandingPage />
            )
          }
        />
        <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
        <Route path="/task/:id" element={<PrivateRoute component={TaskDetail} />} />
        <Route path="/create" element={<PrivateRoute component={CreateTask} />} />
        <Route path="/edit/:id" element={<PrivateRoute component={EditTask} />} />
        <Route path="*" element={<div>404 - Not Found</div>} /> 
      </Routes>
    </div>
  );
};


export default App; 
// This is the main application component for the Task Manager.
// It sets up the routing for the application using React Router.
// The `Routes` component defines the different routes available in the application.
// The `Route` components specify which component to render for each path.