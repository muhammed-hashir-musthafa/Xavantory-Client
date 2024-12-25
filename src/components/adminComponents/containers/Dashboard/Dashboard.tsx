"use client";
import { MdAddCircle } from "react-icons/md";
import AttendanceGraph from "@/components/baseComponents/ui/RevenueGraph/RevenueGraph";
import { Button } from "@/components/ShadCN/ui/button";
import DashboardCard from "@/components/ShadCN/DashboardCard/DashboardCard";
import { Users, BadgeCheck, Shield } from "lucide-react";
import { Card } from "@/components/ShadCN/ui/card";
import { Text } from "@/components/ShadCN/ui/text";
import { Badge } from "@/components/ShadCN/ui/badge";

// type Statistic = {
//   label: string;
//   count: number;
//   icon: JSX.Element;
// };

type RealTimeUpdate = {
  type: "user" | "staff" | "admin";
  message: string;
  time: string;
};

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

  return (
    <div className="bg-white text-black p-8 flex h-full w-full flex-col sm:p-4 rounded-lg">
      <div className="flex items-center justify-between mb-8 flex-col sm:flex-row">
        <div className="text-center sm:text-right mt-4 sm:mt-0">
          <h1 className="text-4xl font-bold text-blue-900">
            Dashboard Overview
          </h1>
          <p className="text-lg text-gray-500">
            Manage and monitor all activities in the LMS
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button className="flex items-center gap-2">
            <MdAddCircle />
            Add User
          </Button>
          <Button className="flex items-center gap-2">
            <MdAddCircle />
            Add Staff
          </Button>
        </div>
      </div>

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
      {/* Real-Time Data Updates */}
      <Card className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <Text size="xl" weight="semibold" className="mb-4">
          Recent Updates
        </Text>
        <div className="divide-y divide-gray-200">
          {recentUpdates.map((update, index) => (
            <div key={index} className="flex justify-between py-3">
              <Text className="text-gray-600">{update.message}</Text>
              <Badge variant="secondary" size="sm" className="text-gray-400">
                {update.time}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Attendance Graph */}
      <div className="mb-8">
        <AttendanceGraph />
      </div>
    </div>
  );
};

export default Dashboard;
