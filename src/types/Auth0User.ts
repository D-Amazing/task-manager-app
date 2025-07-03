export interface AuthUser {
  name: string;
  email: string;
  picture?: string;
  sub: string; // Auth0 unique ID
}
// This interface defines the structure of an authenticated user object in the application.
// It includes properties for the user's name, email, optional picture URL, and a unique identifier
// (sub) provided by Auth0. This structure is used to manage user authentication and profile information.
// The 'sub' property is particularly important as it serves as a unique identifier for the user
// across the application, allowing for consistent user management and session handling.
// The 'picture' property is optional, allowing for flexibility in user profiles where a picture may
// not always be available. This interface can be extended in the future to include additional user-related
// properties as needed, such as roles or permissions, to support more complex user management scenarios.