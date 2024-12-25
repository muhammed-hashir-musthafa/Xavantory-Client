"use client";

import { DataTable } from "@/components/baseComponents/containers/DataTable/DataTable";

// Sample Data for Users
const usersData = [
  {
    id: 1,
    name: "John Doe",
    batch: 25,
    email: "john.doe@example.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    batch: 26,
    email: "jane.smith@example.com",
    status: "Inactive",
  },
];

// Columns configuration
const columns = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Batch", accessor: "batch" },
  {
    header: "Status",
    accessor: "status",
    render: (value: string) => (
      <span
        className={`px-3 py-1 rounded-full text-sm ${
          value === "Active"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {value}
      </span>
    ),
  },
];

export default function StudentsTable() {
  const handleEdit = (id: number) => {
    console.log(`Edit User with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete User with ID: ${id}`);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>

      {/* Pass the user data, columns, and action handlers to the DataTable component */}
      <DataTable
        data={usersData}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
