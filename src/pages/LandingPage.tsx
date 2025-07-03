// src/pages/LandingPage.tsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Task Manager</h1>
      <p className="text-lg mb-8 max-w-md">
        Organize your day, manage your tasks, and stay productive — all in one place.
      </p>

      <div className="space-x-4">
        <button
          onClick={() => loginWithRedirect()}
          className="bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
        >
          Log In
        </button>

        <button
          onClick={() => loginWithRedirect({ authorizationParams: { screen_hint: "signup" } })}
          className="bg-green-500 px-6 py-2 rounded hover:bg-green-600 transition"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-transparent border border-white px-6 py-2 rounded hover:bg-white hover:text-blue-600 transition"
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
// This component serves as the landing page for the Task Manager application.
// It provides options for users to log in, create an account, or continue as a guest
// using Auth0 for authentication.
// The page is styled with a gradient background and includes a welcoming message.
// The `loginWithRedirect` function is used to initiate the login process, and the `screen_hint: "signup"`
// parameter is passed to the `loginWithRedirect` function to direct users to the signup page
// when they click the "Create Account" button.
// The "Continue as Guest" button allows users to navigate to the main application without logging in
// or creating an account, providing a seamless user experience.
// The component is designed to be visually appealing and user-friendly, encouraging users to engage with the