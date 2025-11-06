import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Table } from "@tanstack/react-table";
import { SearchIcon } from "lucide-react";

interface ITableToolbar<TData> {
  table: Table<TData>;
}

export function TableToolbarCustomer<TData>({ table }: ITableToolbar<TData>) {
  return (
    <InputGroup className="w-1/2">
      <InputGroupInput
        placeholder="Cari berdasarkan nama customer, no. telp, email, alamat... "
        value={(table.getState().globalFilter as string) ?? ""}
        onChange={(e) => table.setGlobalFilter(e.target.value)}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
