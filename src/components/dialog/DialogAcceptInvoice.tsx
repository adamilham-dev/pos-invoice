import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { CircleCheck, Eye, EyeOff, TriangleAlert, XIcon } from "lucide-react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import Image from "next/image";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { useAccepetInvoiceDialogStore } from "@/stores/acceptInvoiceDialogStore";
import { useSignatureDialogStore } from "@/stores/signatueDialog";
import DialogSignature from "@/components/dialog/DialogSignature";
import { useState } from "react";

const DialogAcceptInvoice = () => {
  const {
    openAccepetInvoiceDialog,
    isAccepetInvoiceDialogOpen,
    closeAccepetInvoiceDialog,
  } = useAccepetInvoiceDialogStore();
  const { openSignatureDialog } = useSignatureDialogStore();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <DropdownMenuItem
        onSelect={(e) => e.preventDefault()}
        onClick={openAccepetInvoiceDialog}
        className="cursor-pointer"
      >
        <CircleCheck fill="black" color="white" />
        Setujui Invoice
      </DropdownMenuItem>

      <Dialog
        open={isAccepetInvoiceDialogOpen}
        onOpenChange={closeAccepetInvoiceDialog}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader className="flex-row items-center justify-between">
            <DialogTitle>Setujui Invoice</DialogTitle>
            <DialogClose asChild>
              <Button variant={"outline"}>
                <XIcon />
              </Button>
            </DialogClose>
          </DialogHeader>

          <div className="space-y-6 p-6 flex flex-col items-center">
            <div className="w-20 h-20">
              <Image
                src={"/assets/verif-pw.png"}
                alt="verif pw icon"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <p className="heading-6 text-neutral-100">Verifikasi Password</p>
              <p className="body-small-reguler text-neutral-80">
                Masukkan password akun Anda untuk menambahkan tanda tangan
                digital ke invoice berikut.
              </p>
            </div>
            <p className="body-small-bold text-neutral-100">
              09289/KCUBD/102025
            </p>
            <InputGroup>
              <InputGroupInput
                type={showPassword ? "password" : "text"}
                placeholder="Password"
              />
              <InputGroupAddon
                onClick={() => setShowPassword(!showPassword)}
                align="inline-end"
                className="cursor-pointer"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </InputGroupAddon>
            </InputGroup>
            <div className="bg-warning-surface border border-warning-border rounded p-4 flex items-start gap-3">
              <TriangleAlert className="w-20" stroke="#996a13" />
              <div className="body-small-reguler p-0 text-neutral-90">
                Setelah ditandatangani digital, invoice tidak dapat diubah.
                Tindakan selanjutnya hanya pencatatan pembayaran atau
                pembatalan.
              </div>
            </div>
            <div className="flex flex-col w-full gap-3">
              <Button onClick={openSignatureDialog}>Setujui invoice</Button>
              <Button onClick={openSignatureDialog} variant="outline">
                Batal
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <DialogSignature />
    </>
  );
};

export default DialogAcceptInvoice;
