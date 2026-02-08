import { Outlet } from "react-router";
import Header from "./component/header/header.jsx";
import Footer from "./component/footer/footer.jsx";


const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </> 
);

export default Layout;
