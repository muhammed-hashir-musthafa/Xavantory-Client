"use client";

import { MdAddCircle } from "react-icons/md";
import { Button } from "@/components/ShadCN/ui/button";
import { Users, BadgeCheck, Shield } from "lucide-react";
import { Card } from "@/components/ShadCN/ui/card";
import { Text } from "@/components/ShadCN/ui/text";
import { Badge } from "@/components/ShadCN/ui/badge";
import { useState } from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ShadCN/ui/alert-dialog";
import DashboardCard from "@/components/ShadCN/DashboardCard/DashboardCard";
import AttendanceGraph from "@/components/baseComponents/ui/RevenueGraph/RevenueGraph";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  profilePic: string;
  bio: string;
};

type RealTimeUpdate = {
  type: "user" | "staff" | "admin";
  message: string;
  time: string;
};

const unacceptedUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "User",
    profilePic: "/profile-pic/john.jpg",
    bio: "A software engineer from NY.",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    profilePic: "/profile-pic/jane.jpg",
    bio: "Loves design and photography.",
  },
];

const unacceptedStaff: User[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Staff",
    profilePic: "/profile-pic/alice.jpg",
    bio: "Experienced teacher with a passion for mathematics.",
  },
  {
    id: 2,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    role: "Staff",
    profilePic: "/profile-pic/bob.jpg",
    bio: "History teacher with 5 years of experience.",
  },
];

const Dashboard: React.FC = () => {
  const recentUpdates: RealTimeUpdate[] = [
    { type: "user", message: "User 'John Doe' logged in.", time: "5 mins ago" },
    {
      type: "staff",
      message: "Staff 'Alice Johnson' updated attendance records.",
      time: "15 mins ago",
    },
    {
      type: "admin",
      message: "Admin 'Sara Lee' created a new course.",
      time: "20 mins ago",
    },
  ];

  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isStaffModalOpen, setIsStaffModalOpen] = useState(false);
  const [unacceptedUserList, setUnacceptedUserList] =
    useState<User[]>(unacceptedUsers);
  const [unacceptedStaffList, setUnacceptedStaffList] =
    useState<User[]>(unacceptedStaff);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedStaff, setSelectedStaff] = useState<User | null>(null);

  const handleAcceptUser = (id: number) => {
    setUnacceptedUserList((prev) => prev.filter((user) => user.id !== id));
  };

  const handleAcceptStaff = (id: number) => {
    setUnacceptedStaffList((prev) => prev.filter((staff) => staff.id !== id));
  };

  const handleViewUserDetails = (user: User) => setSelectedUser(user);
  const handleViewStaffDetails = (staff: User) => setSelectedStaff(staff);

  return (
    <div className="bg-white text-black p-8 flex h-full w-full flex-col sm:p-4 rounded-lg">
      <div className="flex items-center justify-between mb-8 flex-col sm:flex-row">
        <div className="text-center sm:text-right mt-4 sm:mt-0">
          <h1 className="text-4xl font-bold text-blue-900 text-start">
            Admin Dashboard
          </h1>
          <p className="text-lg text-gray-500">
            Manage and monitor all activities in the LMS
          </p>
        </div>

        <div className="flex items-center gap-4">
          <AlertDialog open={isUserModalOpen} onOpenChange={setIsUserModalOpen}>
            <AlertDialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <MdAddCircle />
                Add Students
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Unaccepted Users</AlertDialogTitle>
              </AlertDialogHeader>
              <div className="space-y-2 p-4">
                {unacceptedUserList.length > 0 ? (
                  unacceptedUserList.map((user) => (
                    <div
                      key={user.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={user.profilePic}
                          alt={user.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <Text>
                          {user.name} - {user.email}
                        </Text>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleAcceptUser(user.id)}
                        >
                          Accept
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleViewUserDetails(user)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <Text>No unaccepted users</Text>
                )}
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog
            open={isStaffModalOpen}
            onOpenChange={setIsStaffModalOpen}
          >
            <AlertDialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <MdAddCircle />
                Add Staff
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Unaccepted Staff</AlertDialogTitle>
              </AlertDialogHeader>
              <div className="space-y-2 p-4">
                {unacceptedStaffList.length > 0 ? (
                  unacceptedStaffList.map((staff) => (
                    <div
                      key={staff.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={staff.profilePic}
                          alt={staff.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <Text>
                          {staff.name} - {staff.email}
                        </Text>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleAcceptStaff(staff.id)}
                        >
                          Accept
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleViewStaffDetails(staff)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <Text>No unaccepted staff</Text>
                )}
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {selectedUser && (
        <AlertDialog
          open={!!selectedUser}
          onOpenChange={() => setSelectedUser(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{selectedUser.name} - Profile</AlertDialogTitle>
            </AlertDialogHeader>
            <div className="p-4">
              <div className="flex items-center gap-4">
                <Image
                  src={selectedUser.profilePic}
                  alt={selectedUser.name}
                  width={96}
                  height={96}
                  className="rounded-full"
                />
                <div>
                  <Text>Name: {selectedUser.name}</Text>
                  <Text>Email: {selectedUser.email}</Text>
                  <Text>Bio: {selectedUser.bio}</Text>
                </div>
              </div>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      {selectedStaff && (
        <AlertDialog
          open={!!selectedStaff}
          onOpenChange={() => setSelectedStaff(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {selectedStaff.name} - Profile
              </AlertDialogTitle>
            </AlertDialogHeader>
            <div className="p-4">
              <div className="flex items-center gap-4">
                <Image
                  src={selectedStaff.profilePic}
                  alt={selectedStaff.name}
                  width={96}
                  height={96}
                  className="rounded-full"
                />
                <div>
                  <Text>Name: {selectedStaff.name}</Text>
                  <Text>Email: {selectedStaff.email}</Text>
                  <Text>Bio: {selectedStaff.bio}</Text>
                </div>
              </div>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        <DashboardCard
          icon={Users}
          value="1024"
          label="Total Users"
          color="text-blue-500"
        />
        <DashboardCard
          icon={BadgeCheck}
          value="120"
          label="Total Staff"
          color="text-green-500"
        />
        <DashboardCard
          icon={Shield}
          value="5"
          label="Total Admins"
          color="text-yellow-500"
        />
      </div>

      <Card className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <Text size="xl" weight="semibold" className="mb-4">
          Recent Updates
        </Text>
        <div className="divide-y divide-gray-200">
          {recentUpdates.map((update, index) => (
            <div
              key={index}
              className="flex justify-between py-3 hover:bg-gray-50"
            >
              <Text className="text-gray-600">{update.message}</Text>
              <Badge variant="secondary" size="sm" className="text-gray-400">
                {update.time}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      <div className="mb-8">
        <AttendanceGraph role="admin" />
      </div>
    </div>
  );
};

export default Dashboard;
