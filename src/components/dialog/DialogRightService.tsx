import {
  DialogRight,
  DialogRightClose,
  DialogRightContent,
  DialogRightFooter,
  DialogRightHeader,
  DialogRightTitle,
} from "@/components/ui/dialog-right";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";
import { useServiceDialogStore } from "@/stores/serviceDialogStore";
import { useValidasiFormDialogStore } from "@/stores/validasiFormDialogStore";

const DialogRightService = () => {
  const { isServiceDialogOpen, closeServiceDialog } = useServiceDialogStore();
  const { openValidasiFormDialog } = useValidasiFormDialogStore();

  return (
    <DialogRight open={isServiceDialogOpen} onOpenChange={closeServiceDialog}>
      <DialogRightContent className="max-w-lg">
        <DialogRightHeader className="flex-row items-center justify-between">
          <DialogRightTitle>Tambah Layanan</DialogRightTitle>
          <DialogRightClose asChild>
            <Button variant={"outline"}>
              <XIcon />
            </Button>
          </DialogRightClose>
        </DialogRightHeader>

        <div className="mt-4 h-full flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label>Deskripsi layanan</Label>
              <Input placeholder="Cth: Pengiriman Bulan Oktober 2025" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Spesifikasi Kiriman</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih spesifikasi kiriman" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Dokumen/Barang">
                      Dokumen/Barang
                    </SelectItem>
                    <SelectItem value="Makanan">Makanan</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <div className="flex flex-col gap-2">
                  <Label>Harga</Label>
                  <div className="flex items-center">
                    <Input placeholder="0" className="rounded-r-none" />
                    <Select>
                      <SelectTrigger className="w-auto rounded-l-none">
                        <SelectValue placeholder="Dengan Pajak" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Dengan Pajak">
                            Dengan Pajak
                          </SelectItem>
                          <SelectItem value="Tanpa Pajak">
                            Tanpa Pajak
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col gap-2">
                  <Label>Pajak</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="PPN" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="1%">1%</SelectItem>
                        <SelectItem value="2%">2%</SelectItem>
                        <SelectItem value="3%">3%</SelectItem>
                        <SelectItem value="4%">4%</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex flex-col gap-2">
                  <Label>Diskon</Label>
                  <div className="flex items-center">
                    <Input placeholder="0" className="rounded-r-none" />
                    <Select>
                      <SelectTrigger className="w-auto rounded-l-none">
                        <SelectValue placeholder="%" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="%">%</SelectItem>
                          <SelectItem value="Nominal">Nominal</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogRightFooter>
            <Button>Tambah Layanan</Button>
            <Button
              variant="outline"
              onClick={() => openValidasiFormDialog(closeServiceDialog)}
            >
              Batal
            </Button>
          </DialogRightFooter>
        </div>
      </DialogRightContent>
    </DialogRight>
  );
};

export default DialogRightService;
