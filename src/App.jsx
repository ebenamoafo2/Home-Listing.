import { Outlet } from "react-router-dom";

import Devbar from "@/components/Devbar/Devbar";
import Navbar from "@/components/Navbar";

const App = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 top-0">
        <Devbar />
      </div>
      <div className="ml-[700px]">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default App;
