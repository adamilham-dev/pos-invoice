import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatIDR } from "@/lib/formatIDR";

const ServicesTable = () => (
  <Table>
    <TableHeader>
      <TableRow className="h-12">
        <TableHead className="px-0 w-[344px]">Deskripsi Layanan</TableHead>
        <TableHead className="px-0 w-40 pl-3">Harga</TableHead>
        <TableHead className="px-0 w-40 pl-3">Diskon</TableHead>
        <TableHead className="px-0 w-40 pl-3">Pajak</TableHead>
        <TableHead className="px-0 w-40 pl-3">Subtotal</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow className="h-[72px]">
        <TableCell className="pl-0">
          <div className="flex flex-col">
            <p>Pengiriman Bulanan</p>
            <p className="caption-large-reguler text-neutral-80">
              Dokumen/Barang
            </p>
          </div>
        </TableCell>
        <TableCell>{formatIDR(3047000)}</TableCell>
        <TableCell>0</TableCell>
        <TableCell>0</TableCell>
        <TableCell>{formatIDR(3047000)}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export default ServicesTable;
