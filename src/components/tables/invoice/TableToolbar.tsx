import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Download,
  SearchIcon,
  SlidersHorizontal,
} from "lucide-react";

interface ITableToolbar<TData> {
  table: Table<TData>;
}

export function TableToolbarInvoice<TData>({ table }: ITableToolbar<TData>) {
  return (
    <div className="flex items-center gap-4 px-4 h-[72] overflow-x-auto">
      <InputGroup>
        <InputGroupInput
          placeholder="Cari berdasarkan transaksi, customer, no. invoice..."
          value={(table.getState().globalFilter as string) ?? ""}
          onChange={(e) => table.setGlobalFilter(e.target.value)}
          className="placeholder:text-sm placeholder:lg:text-base"
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Tahun ini" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="2025">2025</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
            <SelectItem value="2020">2020</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button className="w-[117px]" variant={"outline"}>
        <SlidersHorizontal />
        Filter
      </Button>
      <Button className="w-[117px]" variant={"outline"}>
        <ArrowUpDown />
        Sort
      </Button>
      <Button className="w-[117px]" variant={"outline"}>
        <Download />
        Export
      </Button>
    </div>
  );
}
