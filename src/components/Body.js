import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import Header from "./Header";

const Body = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    { path: "/browse", element: <Browse /> },
  ]);

  return <RouterProvider router={appRoutes} />;
};
export default Body;
