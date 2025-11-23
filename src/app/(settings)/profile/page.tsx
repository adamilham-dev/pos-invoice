import { DeleteIcon } from "@/components/icon/DeleteIcon";
import { SignatureIcon } from "@/components/icon/Siganture";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CircleCheck, Pen } from "lucide-react";

const page = () => {
  return (
    <div className="flex flex-col gap-5 p-4 sm:p-6 lg:pl-9 lg:pr-10 lg:py-6">
      <p className="heading-5 text-neutral-100 mt-4">Profile</p>
      <Card className="p-4 sm:p-6 md:py-12">
        <div className="w-full md:w-[720px] mx-auto flex flex-col gap-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="w-[100px] h-[100px] heading-3 text-white rounded-full bg-neutral-80 flex items-center justify-center">
              AN
            </div>
            <Button variant={"outline"} className="w-full sm:w-auto">
              Ubah kata sandi
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-10 flex items-center gap-4">
              <p className="body-small-semibold text-neutral-100 w-[200px]">
                Nama Lengkap
              </p>
              <p className="body-small-reguler text-neutral-80">
                Ajeng Narulita
              </p>
            </div>
            <div className="h-10 flex items-center gap-4">
              <p className="body-small-semibold text-neutral-100 w-[200px]">
                NIPPOS
              </p>
              <p className="body-small-reguler text-neutral-80">900736472</p>
            </div>
            <div className="h-10 flex items-center gap-4">
              <p className="body-small-semibold text-neutral-100 w-[200px]">
                Role
              </p>
              <p className="body-small-reguler text-neutral-80">
                Manager Penjualan Bisnis Korporat
              </p>
            </div>
            <div className="h-10 flex items-center gap-4">
              <p className="body-small-semibold text-neutral-100 w-[200px]">
                Kantor Penempatan
              </p>
              <p className="body-small-reguler text-neutral-80">KCU Bandung</p>
            </div>
            <div className="flex gap-4 h-[66px]">
              <p className="mt-2 body-small-semibold text-neutral-100 min-w-[200px] w-[200px]">
                Email
              </p>
              <div className="flex flex-col gap-2 w-full">
                <Input
                  type="email"
                  placeholder="ajeng.narulita@posindonesia.co.id"
                  className="body-small-reguler text-neutral-100"
                />
                <div className="flex items-center gap-1.5 text-success caption-large-reguler">
                  <CircleCheck className="fill-success text-white border-success size-4" />
                  Terverifikasi
                </div>
              </div>
            </div>
            <div className="flex gap-4 h-[100px]">
              <p className="mt-2 body-small-semibold text-neutral-100 w-[200px]">
                Tanda Tangan
              </p>
              <div className="flex items-start gap-3">
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <div className="w-[100px] h-[100px] flex items-center justify-center rounded-2xl border shadow">
                    <SignatureIcon />
                  </div>
                </div>
                <div className="flex items-center w-full mt-2">
                  <Button className="w-10 h-10 p-0 " variant={"ghost"}>
                    <Pen size={20} fill="black" />
                  </Button>
                  <Button className="w-10 h-10 p-0 " variant={"ghost"}>
                    <DeleteIcon />
                  </Button>
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
