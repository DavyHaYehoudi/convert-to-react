import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../../components/ui/button";
import { Employee } from "./employee.type";
import { formatDate } from "../../utils/FormatDate";
import { ArrowUpDown } from "lucide-react"

// Définir les colonnes du tableau
export const columnsTable: ColumnDef<Employee>[] = [
  {
    accessorKey: "firstName",
    enableSorting: true,
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Prénom
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("firstName")}</div>
  },
  {
    accessorKey: "lastName",
    enableSorting: true,
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Nom
      </Button>
    ),
  },
  {
    accessorKey: "dateOfBirth",
    enableSorting: true,
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date de Naissance
      </Button>
    ),
    cell: ({ row }) => <span>{formatDate(row.original.dateOfBirth)}</span>,
  },
  {
    accessorKey: "startDate",
    enableSorting: true,
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date de Début
      </Button>
    ),
    cell: ({ row }) => <span>{formatDate(row.original.startDate)}</span>,
  },
  {
    accessorKey: "street",
    enableSorting: true,
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Rue
      </Button>
    ),
  },
  {
    accessorKey: "city",
    enableSorting: true,
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Ville
      </Button>
    ),
  },
  {
    accessorKey: "region",
    enableSorting: true,
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Région
      </Button>
    ),
  },
  {
    accessorKey: "zipCode",
    enableSorting: true,
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Code Postal
      </Button>
    ),
  },
  {
    accessorKey: "department",
    enableSorting: true,
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Département
      </Button>
    ),
  },
];
