import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../../components/ui/button";
import { Employee } from "./employee.type";
import { formatDate } from "../../utils/FormatDate";

// Définir les colonnes du tableau
export const columnsTable: ColumnDef<Employee>[] = [
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Prénom
      </Button>
    ),
  },
  {
    accessorKey: "lastName",
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