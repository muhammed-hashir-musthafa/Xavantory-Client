"use client";

import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ShadCN/ui/table";
import { Button } from "@/components/ShadCN/ui/button";
import { Pencil, Trash2 } from "lucide-react";

// Reusable DataTable Component
type TableColumn = {
  header: string;
  accessor: string;
  render?: (value: any) => React.ReactNode;
};

type DataTableProps = {
  data: any[];
  columns: TableColumn[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export function DataTable({ data, columns, onEdit, onDelete }: DataTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column, idx) => (
            <TableCell key={idx}>{column.header}</TableCell>
          ))}
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((row, idx) => (
          <TableRow key={idx}>
            {columns.map((column, colIdx) => (
              <TableCell key={colIdx}>
                {column.render ? column.render(row[column.accessor]) : row[column.accessor]}
              </TableCell>
            ))}
            <TableCell>
              <Button variant="outline" size="icon" onClick={() => onEdit(row.id)}>
                <Pencil className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="text-red-500"
                onClick={() => onDelete(row.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
