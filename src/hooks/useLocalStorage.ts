// src/hooks/useLocalStorage.ts
import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    const json = localStorage.getItem(key);
    return json ? JSON.parse(json) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
// This custom hook provides a way to manage state that is persisted in local storage.
// It initializes the state with a value from local storage or a default value, 
// and updates local storage whenever the state changes.
// The hook returns a tuple containing the current value and a function to update it.
// Usage example:
// const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
// This allows components to read and write tasks while ensuring that the tasks are saved in local storage,
// making them persistent across page reloads or browser sessions.