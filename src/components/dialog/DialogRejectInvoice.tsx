import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { FileText, X, XIcon } from "lucide-react";
import { useState } from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { useOpenPdf } from "@/hooks/use-openPdf";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const DialogRejectInvoice = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <DropdownMenuItem
        onSelect={(e) => e.preventDefault()}
        onClick={() => setOpenDialog(true)}
        className="cursor-pointer"
      >
        <X />
        Tolak Invoice
      </DropdownMenuItem>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-lg flex flex-col gap-10">
          <DialogHeader className="flex-row items-center justify-between">
            <DialogTitle>Tolak Invoice</DialogTitle>
            <DialogClose asChild>
              <Button variant={"outline"}>
                <XIcon />
              </Button>
            </DialogClose>
          </DialogHeader>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1 text-neutral-100">
                <p className="body-small-reguler">No. Invoice</p>
                <p className="body-large-bold">09289/KCUBD/102025</p>
              </div>
              <Button variant={"outline"} onClick={useOpenPdf}>
                <FileText /> Lihat PDF
              </Button>
            </div>

            <div className="flex flex-col gap-3 body-small-reguler text-neutral-80">
              <p>
                Pilih jenis penolakan dan berikan alasan agar admin dapat
                menindaklanjuti dengan tepat.
              </p>
              <RadioGroup defaultValue="comfortable">
                <div className="flex gap-3">
                  <RadioGroupItem value="default" id="r1" />
                  <div className="space-y-2">
                    <Label
                      htmlFor="r1"
                      className="body-small-semibold text-neutral-100"
                    >
                      Default
                    </Label>
                    <p className="">
                      Gunakan opsi ini jika invoice perlu diperbaiki dan bisa
                      dikirim ulang.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <div className="space-y-2">
                    <Label
                      htmlFor="r2"
                      className="body-small-semibold text-neutral-100"
                    >
                      Comfortable
                    </Label>
                    <p className="">
                      Gunakan opsi ini jika invoice perlu diperbaiki dan bisa
                      dikirim ulang.
                    </p>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="flex flex-col w-full gap-3">
              <Button>Tolak invoice</Button>
              <Button onClick={() => setOpenDialog(false)} variant="outline">
                Batal
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogRejectInvoice;
