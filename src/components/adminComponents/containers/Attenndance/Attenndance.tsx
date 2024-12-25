"use client";

import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ShadCN/ui/table";
import { Button } from "@/components/ShadCN/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ShadCN/ui/select";
import { Input } from "@/components/ShadCN/ui/input";
import { Calendar } from "lucide-react";

// Types for Attendance data
interface AttendanceRecord {
  id: number;
  name: string;
  status: string;
  date: string;
  class: string;
}

const initialAttendanceData: AttendanceRecord[] = [
  { id: 1, name: "John Doe", status: "Present", date: "2024-12-24", class: "Class A" },
  { id: 2, name: "Jane Smith", status: "Absent", date: "2024-12-24", class: "Class B" },
  { id: 3, name: "Alice Johnson", status: "Present", date: "2024-12-24", class: "Class A" },
  { id: 4, name: "Bob Brown", status: "Late", date: "2024-12-24", class: "Class C" },
];

const attendanceStatusOptions = ["Present", "Absent", "Late", "Excused"];

// Types for filters
interface Filters {
  date: string;
  class: string;
  status: string;
}

export default function AttendanceManagement() {
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>(initialAttendanceData);
  const [filters, setFilters] = useState<Filters>({
    date: "",
    class: "",
    status: "",
  });

  // Update filters
  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Update record status
  const handleStatusChange = (id: number, newStatus: string) => {
    setAttendanceData((prevData) =>
      prevData.map((record) =>
        record.id === id ? { ...record, status: newStatus } : record
      )
    );
  };

  // Filter data based on current filters
  const filteredData = attendanceData.filter((record) => {
    const matchesDate = !filters.date || record.date === filters.date;
    const matchesStatus = !filters.status || filters.status === "All" || record.status === filters.status;
    const matchesClass = !filters.class || filters.class === "All" || record.class === filters.class;
    return matchesDate && matchesStatus && matchesClass;
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Attendance Management</h1>
        <p className="text-gray-600">Manage attendance records for your classes.</p>
      </header>

      {/* Filters Section */}
      <div className="flex items-center gap-4 mb-6">
        {/* Date Picker */}
        <div className="flex items-center gap-2">
          <Input
            type="date"
            className="w-48"
            value={filters.date}
            onChange={(e) => handleFilterChange("date", e.target.value)}
          />
          <Button variant="outline" size="sm" onClick={() => handleFilterChange("date", "")}>
            Clear
          </Button>
          <Calendar className="text-gray-500" />
        </div>

        {/* Class Selector */}
        <Select onValueChange={(value) => handleFilterChange("class", value)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select Class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Class A">Class A</SelectItem>
            <SelectItem value="Class B">Class B</SelectItem>
            <SelectItem value="Class C">Class C</SelectItem>
          </SelectContent>
        </Select>

        {/* Status Filter */}
        <Select onValueChange={(value) => handleFilterChange("status", value)}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            {attendanceStatusOptions.map((status, idx) => (
              <SelectItem key={idx} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Export Button */}
        <Button variant="default" className="ml-auto">
          Export Attendance
        </Button>
      </div>

      {/* Attendance Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredData.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.name}</TableCell>
              <TableCell>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    record.status === "Present"
                      ? "bg-green-100 text-green-800"
                      : record.status === "Absent"
                      ? "bg-red-100 text-red-800"
                      : record.status === "Late"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {record.status}
                </span>
              </TableCell>
              <TableCell>{record.date}</TableCell>
              <TableCell>{record.class}</TableCell>
              <TableCell>
                <Select
                  onValueChange={(value) => handleStatusChange(record.id, value)}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Change Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {attendanceStatusOptions.map((status, idx) => (
                      <SelectItem key={idx} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
