import { useState } from "react";
import {
  DialogRight,
  DialogRightClose,
  DialogRightContent,
  DialogRightFooter,
  DialogRightHeader,
  DialogRightTitle,
} from "../ui/dialog-right";
import { Button } from "../ui/button";
import { Banknote, XIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { Checkbox } from "../ui/checkbox";

const DialogRightRecordPayment = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <DropdownMenuItem
        onSelect={(e) => e.preventDefault()}
        onClick={() => setOpenDialog(true)}
        className="cursor-pointer"
      >
        <Banknote />
        Catat Pembayaran
      </DropdownMenuItem>

      <DialogRight open={openDialog} onOpenChange={setOpenDialog}>
        <DialogRightContent className="max-w-lg">
          <DialogRightHeader className="flex-row items-center justify-between">
            <DialogRightTitle>Catat Pembayaran</DialogRightTitle>
            <DialogRightClose asChild>
              <Button variant={"outline"}>
                <XIcon />
              </Button>
            </DialogRightClose>
          </DialogRightHeader>

          <div className="mt-4 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <Label>Jumlah yang Sudah Dibayarkan</Label>
                <Input type="number" placeholder="0" />
                <p className="caption-large-reguler text-neutral-90">
                  Sisa: 3.047.000
                </p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-neutral-60">
                  Tandai sudah lunas
                </Label>
              </div>
            </div>
            <DialogRightFooter>
              <Button>Simpan</Button>
              <Button variant="outline" onClick={() => setOpenDialog(false)}>
                Batal
              </Button>
            </DialogRightFooter>
          </div>
        </DialogRightContent>
      </DialogRight>
    </>
  );
};

export default DialogRightRecordPayment;
