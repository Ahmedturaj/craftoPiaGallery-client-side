import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";

const Main = () => {
    return (
      <div className="flex flex-col h-screen">
      <div className="mb-14">
          <Navbar/>
      </div>
      <div className="flex-1">
          <Outlet />
      </div>
      <div>
          <Footer></Footer>
      </div>
  </div>
    );
};

export default Main;