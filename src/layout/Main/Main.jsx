import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
      <div className="flex flex-col h-screen">
      <div>
          <Navbar/>
      </div>
      <div className="flex-1">
          <Outlet />
      </div>
      <div>
          Footer 
      </div>
  </div>
    );
};

export default Main;