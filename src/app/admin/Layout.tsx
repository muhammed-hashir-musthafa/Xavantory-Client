import AdminSidebar from "@/components/adminComponents/ui/Sidebar/Sidebar";
import Navbar from "../../components/adminComponents/ui/Navbar/Navbar";
 
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className="h-screen w-screen bg-gray-100">
        <div className="flex h-screen">
          <Navbar />
          <AdminSidebar />

          <div className="flex-grow p-6 ml-64 overflow-y-auto mt-16">{children}</div>
        </div>
      </body>
    </html>
  );
}
