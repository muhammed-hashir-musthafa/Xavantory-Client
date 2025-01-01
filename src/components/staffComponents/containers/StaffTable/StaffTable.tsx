"use client";

import { useState } from "react";
import { DataTable } from "@/components/baseComponents/containers/DataTable/DataTable";
import { Button } from "@/components/ShadCN/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogTrigger,
} from "@/components/ShadCN/ui/alert-dialog";

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

export default function StaffTable() {
  const [selectedStaffId, setSelectedStaffId] = useState<number | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // Handle Edit action
  const handleEdit = (id: number) => {
    console.log(`Edit Staff with ID: ${id}`);
  };

  // Handle Delete action
  const handleDelete = (id: number) => {
    console.log(`Delete Staff with ID: ${id}`);
    setIsDeleteDialogOpen(false); // Close the dialog after delete action
  };

  // Open the delete confirmation dialog
  const openDeleteConfirmation = (id: number) => {
    setSelectedStaffId(id);
    setIsDeleteDialogOpen(true);
  };

  // Close the modal
  const closeDeleteConfirmation = () => {
    setIsDeleteDialogOpen(false);
    setSelectedStaffId(null);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Staff Management</h2>

      {/* Pass the staff data, columns, and action handlers to the DataTable component */}
      <DataTable
        data={staffData}
        columns={columns}
        onEdit={handleEdit}
        onDelete={openDeleteConfirmation} // Open delete confirmation dialog on delete click
      />

      {/* Delete Confirmation Alert Dialog */}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogTrigger />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              You are about to delete this staff member. This action cannot be
              undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-between mt-4">
            <AlertDialogCancel onClick={closeDeleteConfirmation}>
              <Button variant="ghost">Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleDelete(selectedStaffId as number)}
              className="text-white bg-red-500 hover:bg-red-600 "
            >
              <Button variant="destructive" className="hover:bg-red-600">Delete</Button>
              </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
