import React from "react";
import { BookOpen, ChevronRight, Clock, Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ShadCN/ui/card";
import { Progress } from "@/components/ShadCN/ui/progress";

const StudentHomePage = () => {
  const upcomingEvents = [
    { title: "Physics Mid-Term", date: "Tomorrow, 10:00 AM", type: "Exam" },
    {
      title: "Mathematics Assignment Due",
      date: "Friday, 11:59 PM",
      type: "Assignment",
    },
    {
      title: "Science Project Presentation",
      date: "Next Monday, 2:00 PM",
      type: "Presentation",
    },
  ];

  const announcements = [
    {
      title: "Holiday Notice",
      description: "School will be closed for Spring Break from March 15-22",
    },
    {
      title: "Parent-Teacher Meeting",
      description: "Scheduled for next Thursday. Please inform your parents.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, John!
          </h1>
          <p className="text-gray-600 mt-2">
            Class X-A | Roll Number: 2024-001
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Attendance Rate
              </CardTitle>
              <Clock className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <Progress value={92} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Class Rank
              </CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5th</div>
              <p className="text-sm text-gray-500 mt-1">Out of 45 students</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Pending Tasks
              </CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-sm text-gray-500 mt-1">Due this week</p>
            </CardContent>
          </Card>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>
                  Your schedule for the next few days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-500">{event.date}</p>
                      </div>
                      <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
                        {event.type}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Academic Calendar */}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Announcements */}
            <Card>
              <CardHeader>
                <CardTitle>Announcements</CardTitle>
                <CardDescription>Latest updates from school</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-600 pl-4 py-2"
                    >
                      <h3 className="font-medium text-gray-900">
                        {announcement.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {announcement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "View Attendance",
                    "Academic Record",
                    "School Calendar",
                    "Support",
                  ].map((link, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                    >
                      <span className="text-gray-700">{link}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentHomePage;
