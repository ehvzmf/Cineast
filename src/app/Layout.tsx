import { Outlet } from "react-router-dom";
import Header from "../widgets/Header";
import Sidebar from "../widgets/Sidebar";
import Footer from "../widgets/Footer";

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
      <Footer />
    </div>
  );
}
