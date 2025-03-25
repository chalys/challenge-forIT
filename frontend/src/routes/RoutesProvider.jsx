import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root";
import TaskList from "../components/Tasks/TaskList";
import TaskForm from "../components/Tasks/TaskForm.jsx";
import Tasks from "../pages/Tasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "tareas",
        element: <Tasks/>,
        children: [
          { index: true, element: <TaskList /> },
          { path: "nueva", element: <TaskForm /> },
          { path: "editar/:id", element: <TaskForm /> },
        ],
      },
    ],
  },
]);

export const RouterProvider_ = () => <RouterProvider router={router} />;
