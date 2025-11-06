import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Pen, Trash } from "lucide-react";

const page = () => {
  return (
    <div className="flex flex-col gap-5 pl-9 pr-10 py-6">
      <p>Profile</p>
      <Card className="py-10">
        <div className="w-2/3 mx-auto space-y-6">
          <div className="flex items-end justify-between">
            <div className="w-[100px] h-[100px] heading-3 text-white rounded-full bg-neutral-80 flex items-center justify-center">
              AN
            </div>
            <Button variant={"outline"}>Ubah kata sandi</Button>
          </div>
          <div className="space-y-5">
            <div className="grid grid-cols-3">
              <p className="body-small-semibold text-neutral-100 col-span-1">
                Nama Lengkap
              </p>
              <p className="body-small-reguler text-neutral-80 col-span-2">
                Ajeng Narulita
              </p>
            </div>
            <div className="grid grid-cols-3">
              <p className="body-small-semibold text-neutral-100 col-span-1">
                NIPPOS
              </p>
              <p className="body-small-reguler text-neutral-80 col-span-2">
                900736472
              </p>
            </div>
            <div className="grid grid-cols-3">
              <p className="body-small-semibold text-neutral-100 col-span-1">
                Role
              </p>
              <p className="body-small-reguler text-neutral-80 col-span-2">
                Manager Penjualan Bisnis Korporat
              </p>
            </div>
            <div className="grid grid-cols-3">
              <p className="body-small-semibold text-neutral-100 col-span-1">
                Kantor Penempatan
              </p>
              <p className="body-small-reguler text-neutral-80 col-span-2">
                KCU Bandung
              </p>
            </div>
            <div className="grid grid-cols-3">
              <p className="body-small-semibold text-neutral-100 col-span-1">
                Email
              </p>
              <p className="body-small-reguler text-neutral-80 col-span-2">
                ajeng.narulita@posindonesia.co.id
              </p>
            </div>
            <div className="grid grid-cols-3">
              <p className="body-small-semibold text-neutral-100 col-span-1">
                Tanda Tangan
              </p>
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center text-success caption-large-reguler">
                    <CheckCircle2 fill="#52bd94" color="white" />
                    Terverifikasi
                  </div>
                  <div className="w-[100px] h-[100px] rounded-2xl border shadow"></div>
                </div>
                <div className="flex items-center gap-2">
                  <Pen size={20} />
                  <Trash size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default page;
