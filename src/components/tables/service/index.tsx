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
          <TableRow className="h-12">
            <TableHead className="pl-5 w-[388px] max-[388px]">
              Deskripsi Layanan
            </TableHead>
            <TableHead className="w-[120px] max-w-[120px]">Harga</TableHead>
            <TableHead className="w-[120px] max-w-[120px]">Diskon</TableHead>
            <TableHead className="w-[120px] max-w-[120px]">Pajak</TableHead>
            <TableHead className="w-[120px] max-w-[120px]">Subtotal</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.length ? (
            data?.map((invoice) => (
              <TableRow key={invoice.layanan} className="h-[72px]">
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
                  <div className="flex items-center justify-end pr-5 gap-2">
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
