"use client";
import Image from "next/image";
import Link from "next/link";
import {
  MdDashboard,
  // MdPerson,
  // MdMessage,
  MdPeople,
  MdExitToApp,
  MdSchool,
  // MdGroup,
} from "react-icons/md";

const StaffSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-50 via-gray-100 to-gray-200 fixed top-0 shadow-lg flex flex-col z-10 overflow-y-auto">
      {/* Logo Section */}
      <div className="flex items-center justify-between p-5 border-b bg-gray-100 shadow-sm">
        <div className="flex items-center">
          <Image
            width={100}
            height={100}
            src="/logo.png"
            alt="Logo"
            className="h-12 w-auto"
          />
          <div className="ml-3">
            <h3 className="font-semibold text-xl text-rose-600">Xavantory</h3>
            <p className="text-sm text-gray-500">Staff Dashboard</p>
          </div>
        </div>
      </div>

       <nav className="flex-grow mt-5">
        {/* Dashboard */}
        <Link href="/staff" passHref>
          <div className="flex items-center p-4 text-gray-700 hover:bg-rose-100 hover:text-rose-600 cursor-pointer transition duration-300 rounded-lg">
            <MdDashboard className="mr-3 text-xl" />
            Dashboard
          </div>
        </Link>

        {/* Profile */}
        {/* <Link href="/admin/profile" passHref>
          <div className="flex items-center p-4 text-gray-700 hover:bg-rose-100 hover:text-rose-600 cursor-pointer transition duration-300 rounded-lg">
            <MdPerson className="mr-3 text-xl" />
            Profile
          </div>
        </Link> */}

        {/* Messages */}
        {/* <Link href="/admin/messages" passHref>
          <div className="flex items-center p-4 text-gray-700 hover:bg-rose-100 hover:text-rose-600 cursor-pointer transition duration-300 rounded-lg">
            <MdMessage className="mr-3 text-xl" />
            Messages
          </div>
        </Link> */}

        {/* User Management */}
        <Link href="/staff/students" passHref>
          <div className="flex items-center p-4 text-gray-700 hover:bg-rose-100 hover:text-rose-600 cursor-pointer transition duration-300 rounded-lg">
            <MdPeople className="mr-3 text-xl" />
            Students Management
          </div>
        </Link>

        {/* Staff Management */}
        {/* <Link href="/staff/staffs" passHref>
          <div className="flex items-center p-4 text-gray-700 hover:bg-rose-100 hover:text-rose-600 cursor-pointer transition duration-300 rounded-lg">
            <MdGroup className="mr-3 text-xl" />
            Staff Management
          </div>
        </Link> */}

        {/* Attendance Management */}
        <Link href="/staff/attendances" passHref>
          <div className="flex items-center p-4 text-gray-700 hover:bg-rose-100 hover:text-rose-600 cursor-pointer transition duration-300 rounded-lg">
            <MdSchool className="mr-3 text-xl" />
            Attendance Management
          </div>
        </Link>
        {/* Logout */}
        <Link href="/staff/logout" passHref>
          <div className="flex items-center p-4 text-gray-700 hover:bg-rose-100 hover:text-rose-600 cursor-pointer transition duration-300 rounded-lg">
            <MdExitToApp className="mr-3 text-xl" />
            Logout
          </div>
        </Link>
      </nav>

      {/* Footer Section */}
      <div className="p-4 text-xs text-center text-gray-500 border-t mt-auto">
        &copy; {new Date().getFullYear()} Xavantory. All rights reserved.
      </div>
    </aside>
  );
};

export default StaffSidebar;
