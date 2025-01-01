import React from "react";
import { Check, X, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ShadCN/ui/card";
import { Progress } from "@/components/ShadCN/ui/progress";

const AttendancePage = () => {
  const monthlyAttendance = [
    { month: "January", present: 22, total: 24, percentage: 91.6 },
    { month: "February", present: 20, total: 22, percentage: 90.9 },
    { month: "March", present: 23, total: 23, percentage: 100 },
  ];

  const recentAttendance = [
    { date: "2025-01-15", status: "present", subject: "All Classes" },
    { date: "2025-01-14", status: "present", subject: "All Classes" },
    {
      date: "2025-01-13",
      status: "absent",
      subject: "All Classes",
      reason: "Medical Leave",
    },
    { date: "2025-01-12", status: "present", subject: "All Classes" },
    { date: "2025-01-11", status: "present", subject: "All Classes" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Attendance Overview
        </h1>
        <p className="text-gray-600 mt-2">
          Track your attendance records and statistics
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Overall Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">94.2%</div>
            <Progress value={94.2} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Present Days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">65/69</div>
            <p className="text-sm text-gray-500 mt-1">Academic Year 2024-25</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Leave Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8 Days</div>
            <p className="text-sm text-gray-500 mt-1">
              Remaining medical leaves
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Statistics */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Monthly Statistics</CardTitle>
          <CardDescription>Attendance breakdown by month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {monthlyAttendance.map((month) => (
              <div key={month.month} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{month.month}</h3>
                    <p className="text-sm text-gray-500">
                      {month.present} out of {month.total} days
                    </p>
                  </div>
                  <span className="font-semibold">{month.percentage}%</span>
                </div>
                <Progress value={month.percentage} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Attendance */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Attendance</CardTitle>
          <CardDescription>Last 5 school days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAttendance.map((day) => (
              <div
                key={day.date}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  {day.status === "present" ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                  <div>
                    <p className="font-medium">
                      {new Date(day.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-sm text-gray-500">{day.subject}</p>
                  </div>
                </div>
                {day.reason && (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <AlertCircle className="h-4 w-4" />
                    {day.reason}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendancePage;
