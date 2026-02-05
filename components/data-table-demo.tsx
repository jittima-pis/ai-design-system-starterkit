"use client"

import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const payments = [
  {
    id: "1",
    status: "Success",
    email: "ken99@yahoo.com",
    amount: "$316.00",
  },
  {
    id: "2",
    status: "Success",
    email: "abe45@gmail.com",
    amount: "$242.00",
  },
  {
    id: "3",
    status: "Processing",
    email: "monserrat44@gmail.com",
    amount: "$837.00",
  },
  {
    id: "4",
    status: "Success",
    email: "silas22@gmail.com",
    amount: "$874.00",
  },
  {
    id: "5",
    status: "Failed",
    email: "carmella@hotmail.com",
    amount: "$721.00",
  },
]

export function DataTableDemo() {
  return (
    <div className="w-full">
      {/* Filter and Columns Controls */}
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Filter emails..."
          className="max-w-sm h-9"
        />
        <Button variant="outline" className="ml-auto h-9">
          Columns
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[32px]">
                <Checkbox />
              </TableHead>
              <TableHead className="w-[120px]">Status</TableHead>
              <TableHead>
                <div className="flex items-center">
                  Email
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="text-right w-[100px]">Amount</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{payment.status}</TableCell>
                <TableCell>{payment.email}</TableCell>
                <TableCell className="text-right">{payment.amount}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between py-4">
        <div className="text-sm text-muted-foreground">
          0 of 5 row(s) selected.
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
