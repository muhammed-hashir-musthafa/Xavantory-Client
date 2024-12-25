import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, CardContent, CardHeader } from "@/components/ShadCN/ui/card";
import { Button } from "@/components/ShadCN/ui/button";

// Registering chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const AttendanceGraph: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>("user");
  const [selectedFilter, setSelectedFilter] = useState<string>("this-day");

  const colors = {
    present: "#16a34a", // Green
    absent: "#dc2626", // Red
    late: "#f59e0b", // Yellow
    presentHover: "#15803d", // Dark Green
    absentHover: "#b91c1c", // Dark Red
    lateHover: "#d97706", // Dark Yellow
    border: "#ffffff", // White border
  };

  const attendanceData = {
    user: {
      "this-day": [80, 15, 5],
      "last-day": [70, 20, 10],
      "this-week": [75, 10, 15],
      "last-7-days": [80, 12, 8],
      "this-month": [85, 10, 5],
      "last-month": [78, 15, 7],
      all: [80, 12, 8],
    },
    staff: {
      "this-day": [90, 5, 5],
      "last-day": [85, 10, 5],
      "this-week": [80, 15, 5],
      "last-7-days": [75, 20, 5],
      "this-month": [88, 7, 5],
      "last-month": [80, 15, 5],
      all: [85, 10, 5],
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
            `${tooltipItem.label}: ${tooltipItem.raw}%`,
        },
      },
      legend: {
        position: "top" as const,
      },
    },
  };

  const handleGroupChange = (group: string) => setSelectedGroup(group);
  const handleFilterChange = (filter: string) => setSelectedFilter(filter);

  return (
    <div className="bg-white p-6 rounded-lg ">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800">
            Attendance Overview
          </h2>
        </CardHeader>
        <CardContent className="mb-4">
          <div className="flex space-x-4 justify-center">
            {["user", "staff"].map((group) => (
              <Button
                key={group}
                onClick={() => handleGroupChange(group)}
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
              "this-day",
              "last-day",
              "this-week",
              "last-7-days",
              "this-month",
              "last-month",
              "all",
            ].map((filter) => (
              <Button
                key={filter}
                onClick={() => handleFilterChange(filter)}
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
