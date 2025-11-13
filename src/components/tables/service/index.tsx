import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatIDR } from "@/lib/formatIDR";
import { Button } from "@/components/ui/button";
import { Pen, PlusCircle } from "lucide-react";
import { TypeServices } from "@/types/services";
import DialogRightService from "@/components/dialog/DialogRightService";
import { useServiceDialogStore } from "@/stores/serviceDialogStore";
import { DeleteIcon } from "@/components/icon/DeleteIcon";
import { EmptyIcon } from "@/components/icon/EmptyIcon";

interface ITableServices {
  handleDelete: (layanan: string) => void;
  data: TypeServices[];
}

const TableServices = ({ handleDelete, data }: ITableServices) => {
  const openServiceDialog = useServiceDialogStore(
    (state) => state.openServiceDialog
  );

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="pl-5">Deskripsi Layanan</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead>Diskon</TableHead>
            <TableHead>Pajak</TableHead>
            <TableHead>Subtotal</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.length ? (
            data?.map((invoice) => (
              <TableRow key={invoice.layanan}>
                <TableCell className="pl-5">
                  <div className="flex flex-col">
                    <p>{invoice.layanan}</p>
                    <p className="caption-large-reguler text-neutral-80">
                      {invoice.kiriman}
                    </p>
                  </div>
                </TableCell>
                <TableCell>{formatIDR(invoice.harga)}</TableCell>
                <TableCell>{invoice.diskon + "%"}</TableCell>
                <TableCell>{invoice.pajak + "%"}</TableCell>
                <TableCell>{formatIDR(invoice.harga)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <Pen size={20} fill="black" className="cursor-pointer" />
                    <DeleteIcon
                      className="cursor-pointer transition-colors"
                      onClick={() => handleDelete(invoice.layanan)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="h-[200px] w-full">
                <div className="flex flex-col items-center justify-center">
                  <EmptyIcon />
                  <p className="body-small-medium">
                    Tambahkan layanan ke dalam list
                  </p>
                  <Button variant={"ghost"} onClick={openServiceDialog}>
                    <PlusCircle fill="black" color="white" />
                    Tambah Layanan
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <DialogRightService />
    </>
  );
};

export default TableServices;
