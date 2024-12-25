"use client";

import { DataTable } from "@/components/baseComponents/containers/DataTable/DataTable";

   
// Sample Data for Staff
const staffData = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    position: "Manager",
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    position: "Assistant",
    status: "Inactive",
  },
];

// Columns configuration
const columns = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Position", accessor: "position" },
  {
    header: "Status",
    accessor: "status",
    render: (value: string) => (
      <span
        className={`px-3 py-1 rounded-full text-sm ${
          value === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
        }`}
      >
        {value}
      </span>
    ),
  },
];

export default function StaffTable() {
  const handleEdit = (id: number) => {
    console.log(`Edit Staff with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete Staff with ID: ${id}`);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Staff Management</h2>

      {/* Pass the staff data, columns, and action handlers to the DataTable component */}
      <DataTable
        data={staffData}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
