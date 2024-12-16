import Navbar from "@/components/adminComponents/ui/Navbar/Navbar";
import { ReactNode } from "react";
 
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <div className="container mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
