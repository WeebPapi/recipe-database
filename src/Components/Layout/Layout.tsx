import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../";

const Layout = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
