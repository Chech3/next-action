import React from 'react'
import { Table, TableCell, TableHead, TableBody, TableRow } from "@/components/ui/table";
import {Task } from "@prisma/client";

interface TableTestProps {
    data: Task[];
}

const TableTest = ({data}: TableTestProps) => {
  return (
    <div className="overflow-x-auto">
    <Table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      
      {/* Table Header */}
      <TableHead className="bg-gray-200">
        <TableRow>
          <th className="px-4 py-2 font-semibold">ID</th>
          <th className="px-4 py-2 font-semibold">Nombre</th>
          <th className="px-4 py-2 font-semibold">Descripción</th>
          <th className="px-4 py-2 font-semibold">Prioridad</th>
        </TableRow>
      </TableHead>

      {/* Table Body */}
      <TableBody>
        {data.map((task) => (
          <TableRow key={task.id} className="hover:bg-gray-100">
            <TableCell className="px-4 py-2">{task.id}</TableCell>
            <TableCell className="px-4 py-2">{task.name}</TableCell>
            <TableCell className="px-4 py-2">{task.description || "Sin descripción"}</TableCell>
            <TableCell className="px-4 py-2">{task.priority}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default TableTest