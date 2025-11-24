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
    <InputGroup className="w-[518px]">
      <InputGroupInput
        placeholder="Cari berdasarkan nama customer, no. telp, email, alamat... "
        value={(table.getState().globalFilter as string) ?? ""}
        onChange={(e) => table.setGlobalFilter(e.target.value)}
        className="text-sm lg:text-base leading-6 font-normal"
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}
