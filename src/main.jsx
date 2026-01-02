import ReactDOM from "react-dom/client";

import { seedLocalDatabase } from "@/api/data/seed";
import ThemeProvider from "@/components/ThemeProvider";
import Router from "./Router";

import App from "./App";

import "./index.css";

// DO NOT REMOVE: Seeds the local storage database with data
seedLocalDatabase();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);
