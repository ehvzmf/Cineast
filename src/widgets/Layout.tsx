import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      {/*<Footer />*/}
    </div>
  );
}
