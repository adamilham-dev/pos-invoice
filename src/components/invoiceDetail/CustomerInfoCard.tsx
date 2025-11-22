import { Card } from "@/components/ui/card";

const CustomerInfoCard = () => (
  <Card className="px-5 gap-4">
    <p className="body-large-bold text-neutral-100">Customer</p>
    <div className="flex flex-col gap-1 body-small-reguler text-neutral-80">
      <div className="flex flex-col md:flex-row md:gap-4">
        <p className="w-60">Nama Customer / Perusahaan</p>
        <p className="text-nowrap">PT BCA FINANCE (BPKB)</p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <p className="w-60">No. Telepon</p>
        <p className="text-nowrap">(62) 81234567890</p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <p className="w-60">Email</p>
        <p className="text-nowrap">bcafinance@gmail.com</p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <p className="w-60">Alamat Billing</p>
        <div>
          <p>Indonesia</p>
          <p>Jl. Pondok Kelapa Timur Blok E7/8</p>
          <p>DKI Jakarta</p>
          <p>Jakarta Timur</p>
          <p>Duren Sawit</p>
          <p>13450</p>
        </div>
      </div>
    </div>
  </Card>
);

export default CustomerInfoCard;
