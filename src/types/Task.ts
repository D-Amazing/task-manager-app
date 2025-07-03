// Task.ts 

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed';
}
// Additional properties can be added as needed
// This interface defines the structure of a Task object in the task manager application.   
// It includes properties for the task ID, title, description, due date, and status.
// The status can be one of three values: 'pending', 'in-progress', or '