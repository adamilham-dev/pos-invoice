import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { XIcon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent } from "../ui/card";
import { useSignatureDialogStore } from "../../stores/signatueDialog";
import { DeleteIcon } from "../icon/DeleteIcon";
import { SignatureIcon } from "../icon/Siganture";

const DialogSignature = () => {
  const { isSignatureDialogOpen, closeSignatureDialog } =
    useSignatureDialogStore();

  return (
    <Dialog open={isSignatureDialogOpen} onOpenChange={closeSignatureDialog}>
      <DialogContent className="max-w-lg">
        <DialogHeader className="flex-row items-center justify-between">
          <DialogTitle>Tanda Tangan Belum Tersimpan</DialogTitle>
          <DialogClose asChild>
            <Button variant={"outline"}>
              <XIcon />
            </Button>
          </DialogClose>
        </DialogHeader>

        <div className="space-y-6 p-6 flex flex-col items-center justify-center">
          <SignatureIcon />
          <div className="flex flex-col gap-1 text-center">
            <p className="heading-6 text-neutral-100">
              Tambahkan Tanda Tangan Digital
            </p>
            <p className="body-small-reguler text-neutral-80">
              Anda belum memiliki tanda tangan digital di sistem. Silakan
              tambahkan terlebih dahulu agar dapat menandatangani dokumen.
            </p>
          </div>

          <Tabs defaultValue="image" className="w-full">
            <TabsList className="mx-auto w-full">
              <TabsTrigger value="image">Gambar</TabsTrigger>
              <TabsTrigger value="unggah">Unggah</TabsTrigger>
            </TabsList>
            <TabsContent value="image">
              <Card className="relative w-full h-40 py-0">
                <CardContent className="flex items-center justify-center h-full">
                  <SignatureIcon />
                  <DeleteIcon className="absolute top-5 right-5 cursor-pointer" />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="unggah" className="h-36">
              <Card className="flex flex-col gap-2 items-center justify-center py-0 h-40">
                <Button variant={"outline"}>Unggah tanda tangan</Button>
                <p className="caption-large-reguler text-neutral-80">
                  Menerima: PNG, JPG, dan SVG
                </p>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex gap-3">
            <Checkbox id="signature" />
            <Label htmlFor="signature" className="body-small-reguler">
              Gunakan tanda tangan ini untuk semua dokumen berikutnya.
            </Label>
          </div>

          <div className="flex flex-col w-full gap-3">
            <Button>Simpan tanda tangan</Button>
            <Button onClick={closeSignatureDialog} variant="outline">
              Batal
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSignature;
