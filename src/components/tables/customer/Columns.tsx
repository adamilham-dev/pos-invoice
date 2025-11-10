"use client";

import { DeleteIcon } from "@/components/icon/DeleteIcon";
import { Button } from "@/components/ui/button";
import { TypeCustomer } from "@/types/customer";
import { ColumnDef } from "@tanstack/react-table";
import { Pen } from "lucide-react";

export const columnsCustomer: ColumnDef<TypeCustomer>[] = [
  {
    accessorKey: "name",
    header: "Customer/Perusahaan",
    filterFn: "includesString",
  },
  {
    accessorKey: "noTlp",
    header: "Informasi Kontak",
    cell: ({ row }) => {
      const noTlp = row.original.noTlp;
      const email = row.original.email;

      return (
        <div className="flex flex-col gap-1">
          <p className="body-small-reguler text-neutral-100">{noTlp}</p>
          <p className="caption-large-reguler text-neutral-80">{email}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "address",
    header: "Alamat Billing",
    cell: ({ row }) => (
      <p className="caption-large-reguler w-[272px] text-wrap">
        {row.original.address}
      </p>
    ),
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: ({ row }) => (
      <p className="caption-large-reguler text-neutral-80 w-[220px] text-wrap">
        {row.original.notes}
      </p>
    ),
  },
  {
    accessorKey: "action",
    header: "",
    cell: () => {
      return (
        <div className="flex items-center gap-3">
          <Button variant={"outline"}>
            <Pen fill="black" />
          </Button>
          <Button variant={"outline"}>
            <DeleteIcon />
          </Button>
        </div>
      );
    },
  },
];
