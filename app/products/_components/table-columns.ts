"use client";

import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
// import { Badge } from "../../_components/ui/badge";

// const getStatusLabel = (status: string) => {
//   if (status === "IN_STOCK") {
//     return "Em estoque";
//   }
//   return "Fora de estoque";
// };

export const productTableColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    // cell: (row) => {
    //   const product = row.row.original;
    //   const label = getStatusLabel(product.status);
    //   return <Badge>{label}</Badge>
    // },
  },
];
