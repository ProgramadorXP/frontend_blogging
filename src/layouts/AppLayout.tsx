import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AppLayout() {
  return (
    <div className="bg-gradient-to-b from-[#02020A] from-5% via-[#FCFF4B] via-50% to-[#02020A] to-95% min-h-screen flex flex-col justify-between">
      <Header />
      {/* Layout  */}
      <Outlet />
      <Footer />
    </div>
  );
}
