import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import ListingDetailsPage from "@/pages/ListingDetailsPage";
import ListingFavoritesPage from "@/pages/ListingFavoritesPage";
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
      {
        path: "/favorites",
        element: <ListingFavoritesPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
