import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import ListingDetailsPage from "@/pages/ListingDetailsPage";
import NotFoundPage from "@/pages/NotFoundPage";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/listings/:listingId",
        element: <ListingDetailsPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
