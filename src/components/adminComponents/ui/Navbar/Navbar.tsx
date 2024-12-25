"use client";

import { Button } from "@/components/ShadCN/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";
import { MdNotifications } from "react-icons/md";
import Link from "next/link";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ShadCN/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ShadCN/ui/dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const role = "admin";

  return (
    <header className="bg-gray-100 dark:bg-gray-900 shadow-md fixed w-full mb-52">
      <div className="container mx-auto flex items-center justify-between px-4 h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          {/* <Link href="#">MyApp</Link> */}
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <MdNotifications className="text-3xl text-gray-600 cursor-pointer hover:text-rose-600 transition duration-300" />
            <div className="absolute -top-1 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </div>
          </div>

          {/* Avatar with Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="cursor-pointer border border-gray-700">
                <AvatarImage
                  src="https://i.pravatar.cc/150?img=7"
                  alt="User Avatar"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Profile</DropdownMenuLabel>
              <DropdownMenuItem>
                <Link
                  href={`/${role}/profile`}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
                >
                  View Profile
                </Link>
              </DropdownMenuItem>
              {/* <DropdownMenuItem>
                <Link href="/settings" className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors">
                  Settings
                </Link>
              </DropdownMenuItem> */}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors">
                  Logout
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-gray-100 dark:bg-gray-800 md:hidden shadow-lg">
          <nav className="flex flex-col space-y-3 p-4">
            <Link
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
