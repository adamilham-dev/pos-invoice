import { useValidasiFormDialogStore } from "@/stores/validasiFormDialogStore";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const DialogValidasiForm = () => {
  const {
    isValidasiFormDialogOpen,
    closeValidasiFormDialog,
    onConfirm,
    executeConfirm,
  } = useValidasiFormDialogStore();
  const router = useRouter();

  return (
    <Dialog
      open={isValidasiFormDialogOpen}
      onOpenChange={closeValidasiFormDialog}
    >
      <DialogContent className="w-[320px]">
        <DialogHeader className="flex-row items-center justify-between">
          <DialogTitle className="text-center body-small-reguler">
            Perubahan belum disimpan. Apakah Anda yakin ingin keluar?
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={() => {
              onConfirm ? executeConfirm() : router.back();
              closeValidasiFormDialog();
            }}
          >
            Ya
          </Button>
          <Button onClick={closeValidasiFormDialog} variant="outline">
            Tidak
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogValidasiForm;
