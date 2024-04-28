import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";

const Main = () => {
    return (
      <div className="flex flex-col h-screen bg-base-200">
      <div className="mb-14">
          <Navbar/>
      </div>
      <div className="flex-1 bg-base-200">
          <Outlet />
      </div>
      <div className="bg-base-200">
          <Footer></Footer>
      </div>
  </div>
    );
};

export default Main;