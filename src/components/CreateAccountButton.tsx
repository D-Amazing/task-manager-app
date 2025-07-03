// src/components/CreateAccountButton.tsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CreateAccountButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <button
      onClick={handleSignUp}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Create Account
    </button>
  );
};

export default CreateAccountButton;
// This component provides a button for users to create a new account using Auth0.
// It uses the `useAuth0` hook to access the `loginWithRedirect` function