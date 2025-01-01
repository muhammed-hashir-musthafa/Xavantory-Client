'use client'
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, CardContent, CardHeader } from "@/components/ShadCN/ui/card";
import { Button } from "@/components/ShadCN/ui/button";

// Registering chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

type Group = "user" | "staff" | "admin"; 
type Filter =
  | "all"
  | "this-day"
  | "last-day"
  | "this-week"
  | "last-7-days"
  | "this-month"
  | "last-month"; // The available filters

type AttendanceData = {
  user: Record<Filter, number[]>;
  staff: Record<Filter, number[]>;
};

type AttendanceGraphProps = {
  role: Group; // The role prop type
};

const AttendanceGraph: React.FC<AttendanceGraphProps> = ({ role }) => {
  const [selectedGroup, setSelectedGroup] = useState<Group>("user");
  const [selectedFilter, setSelectedFilter] = useState<Filter>("all");

  const colors = {
    present: "#16a34a", // Green
    absent: "#dc2626", // Red
    late: "#f59e0b", // Yellow
    presentHover: "#15803d", // Dark Green
    absentHover: "#b91c1c", // Dark Red
    lateHover: "#d97706", // Dark Yellow
    border: "#ffffff", // White border
  };

  const attendanceData: AttendanceData = {
    user: {
      all: [80, 12, 8],
      "this-day": [80, 15, 5],
      "last-day": [70, 20, 10],
      "this-week": [75, 10, 15],
      "last-7-days": [80, 12, 8],
      "this-month": [85, 10, 5],
      "last-month": [78, 15, 7],
    },
    staff: {
      all: [85, 10, 5],
      "this-day": [90, 5, 5],
      "last-day": [85, 10, 5],
      "this-week": [80, 15, 5],
      "last-7-days": [75, 20, 5],
      "this-month": [88, 7, 5],
      "last-month": [80, 15, 5],
    },
  };

  const chartData = {
    labels: ["Present", "Absent", "Late"],
    datasets: [
      {
        data: attendanceData[selectedGroup][selectedFilter],
        backgroundColor: [colors.present, colors.absent, colors.late],
        hoverBackgroundColor: [
          colors.presentHover,
          colors.absentHover,
          colors.lateHover,
        ],
        borderColor: colors.border,
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) =>
            `${tooltipItem.label}: ${tooltipItem.raw}%`, // Typing tooltipItem as `any` for now
        },
      },
      legend: {
        position: "top" as const,
      },
    },
  };

  const handleGroupChange = (group: Group) => setSelectedGroup(group);
  const handleFilterChange = (filter: Filter) => setSelectedFilter(filter);

  return (
    <div className="bg-white p-6 rounded-lg ">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">Attendance Overview</h2>
        </CardHeader>
        <CardContent className="mb-4">
          <div className="flex space-x-4 justify-center">
            {/* Conditionally render group buttons based on the role */}
            {(role === "admin" ? ["user", "staff"] : ["user"]).map((group) => (
              <Button
                key={group}
                onClick={() => handleGroupChange(group as Group)} // Cast group to `Group`
                className={`${
                  selectedGroup === group
                    ? "bg-primary text-white"
                    : "bg-neutral text-gray-800 hover:text-white"
                }`}
              >
                {group.charAt(0).toUpperCase() + group.slice(1)}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardContent className="mb-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "all",
              "this-day",
              "last-day",
              "this-week",
              "last-7-days",
              "this-month",
              "last-month",
            ].map((filter) => (
              <Button
                key={filter}
                onClick={() => handleFilterChange(filter as Filter)} // Cast filter to `Filter`
                className={`${
                  selectedFilter === filter
                    ? "bg-primary text-white"
                    : "bg-neutral text-gray-800 hover:text-white"
                }`}
              >
                {filter.split("-").join(" ").toUpperCase()}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardContent className="h-80">
          <Pie data={chartData} options={chartOptions} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendanceGraph;
