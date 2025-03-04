import { createBrowserRouter } from "react-router-dom";
import Layout from "@/widgets/Layout";
import Home from "@/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "post", element: <PostPage /> },
      // { path: "profile", element: <ProfilePage /> },
    ],
  },
]);
