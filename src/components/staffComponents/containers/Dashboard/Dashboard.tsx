'use client'

import { MdAddCircle } from "react-icons/md";
import AttendanceGraph from "@/components/baseComponents/ui/RevenueGraph/RevenueGraph";
import { Button } from "@/components/ShadCN/ui/button";
import DashboardCard from "@/components/ShadCN/DashboardCard/DashboardCard";
import { UserPlus, ClipboardCheck, AlertTriangle } from "lucide-react";
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

type RealTimeUpdate = {
  type: "student" | "leave" | "attendance";
  message: string;
  time: string;
};

type Student = {
  id: number;
  name: string;
  email: string;
  profilePic: string;
  bio: string;
};

const unacceptedStudents: Student[] = [
  {
    id: 1,
    name: "Jake White",
    email: "jake.white@example.com",
    profilePic: "/profile-pic/jake.jpg",
    bio: "High school student interested in sports.",
  },
  {
    id: 2,
    name: "Sophia Black",
    email: "sophia.black@example.com",
    profilePic: "/profile-pic/sophia.jpg",
    bio: "Passionate about coding and robotics.",
  },
];

const StaffDashboard: React.FC = () => {
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [unacceptedStudentList, setUnacceptedStudentList] =
    useState<Student[]>(unacceptedStudents);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const recentUpdates: RealTimeUpdate[] = [
    {
      type: "student",
      message: "Student 'Emily Brown' attendance updated.",
      time: "10 mins ago",
    },
    {
      type: "leave",
      message: "Leave request from 'Michael Johnson' approved.",
      time: "30 mins ago",
    },
    {
      type: "attendance",
      message: "Attendance issue flagged for 'Grade 9B'.",
      time: "1 hour ago",
    },
  ];

  const handleAcceptStudent = (id: number) => {
    setUnacceptedStudentList((prev) => prev.filter((student) => student.id !== id));
  };

  const handleViewStudentDetails = (student: Student) => setSelectedStudent(student);

  return (
    <div className="bg-white text-black p-8 flex h-full w-full flex-col sm:p-4 rounded-lg">
      <div className="flex items-center justify-between mb-8 flex-col sm:flex-row">
        <div className="text-center sm:text-right mt-4 sm:mt-0">
          <h1 className="text-4xl font-bold text-blue-900 text-start">
            Staff Dashboard
          </h1>
          <p className="text-lg text-gray-500">Manage and monitor students efficiently</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Add Student Button */}
          <AlertDialog open={isStudentModalOpen} onOpenChange={setIsStudentModalOpen}>
            <AlertDialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <MdAddCircle />
                Add Student
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Unaccepted Students</AlertDialogTitle>
              </AlertDialogHeader>

              <div className="space-y-2 p-4">
                {unacceptedStudentList.length > 0 ? (
                  unacceptedStudentList.map((student) => (
                    <div key={student.id} className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <Image
                          src={student.profilePic}
                          alt={student.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <Text>
                          {student.name} - {student.email}
                        </Text>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleAcceptStudent(student.id)}
                        >
                          Accept
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleViewStudentDetails(student)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <Text>No unaccepted students</Text>
                )}
              </div>

              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        <DashboardCard
          icon={UserPlus}
          value="200"
          label="Total Students"
          color="text-blue-500"
        />
        <DashboardCard
          icon={ClipboardCheck}
          value="12"
          label="Leave Requests"
          color="text-green-500"
        />
        <DashboardCard
          icon={AlertTriangle}
          value="3"
          label="Attendance Issues"
          color="text-red-500"
        />
      </div>

      {/* Real-Time Updates */}
      <Card className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <Text size="xl" weight="semibold" className="mb-4">
          Recent Updates
        </Text>
        <div className="divide-y divide-gray-200">
          {recentUpdates.map((update, index) => (
            <div key={index} className="flex justify-between py-3 hover:bg-gray-50">
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
        <AttendanceGraph role="staff" /> {/* Pass role as staff */}
      </div>

      {/* Student Details Modal */}
      {selectedStudent && (
        <AlertDialog open={!!selectedStudent} onOpenChange={() => setSelectedStudent(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{selectedStudent.name} - Profile</AlertDialogTitle>
            </AlertDialogHeader>
            <div className="p-4">
              <div className="flex items-center gap-4">
                <Image
                  src={selectedStudent.profilePic}
                  alt={selectedStudent.name}
                  width={96}
                  height={96}
                  className="rounded-full"
                />
                <div>
                  <Text>Name: {selectedStudent.name}</Text>
                  <Text>Email: {selectedStudent.email}</Text>
                  <Text>Bio: {selectedStudent.bio}</Text>
                </div>
              </div>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default StaffDashboard;
