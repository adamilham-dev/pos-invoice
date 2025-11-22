import { Card } from "@/components/ui/card";

const InvoiceInfoCard = () => (
  <Card className="p-5">
    <div className="text-neutral-100">
      <p className="body-small-reguler">No. Invoice</p>
      <p className="body-large-bold">09289/KCUBD/102025</p>
    </div>
    <div className="flex flex-col gap-2 body-small-reguler text-neutral-80">
      <div className="flex items-center gap-4">
        <p className="w-60">Tanggal Terbit</p>
        <p className="text-nowrap">3 Oktober</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="w-60">Due Date</p>
        <p className="text-nowrap">17 Oktober 2025 (H+14)</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="w-60">No. PKS</p>
        <p className="text-nowrap">-</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="w-60">Tanggal PKS</p>
        <p className="text-nowrap">-</p>
      </div>
    </div>
  </Card>
);

export default InvoiceInfoCard;
