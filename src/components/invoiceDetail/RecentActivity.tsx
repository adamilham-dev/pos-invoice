import { Banknote, FileCheck, FileText, Send } from "lucide-react";
import { Card, CardTitle } from "../ui/card";

const RecentActivity = () => (
  <div className="mx-4 md:mx-6 mt-6 flex flex-col gap-4">
    <p className="body-large-bold text-neutral-100">Aktivitas Terbaru</p>
    <div className="flex gap-2">
      <FileText size={20} />
      <div>
        <p className="body-small-reguler text-neutral-100">
          Invoice 09289/KCUBD/102025 berhasil dibuat oleh Fadhil Ibrahim (Admin)
        </p>
        <p className="caption-large-reguler text-neutral-90">
          3 Okt 2025, 15.06
        </p>
      </div>
    </div>
    <div className="flex gap-2">
      <FileCheck size={20} />
      <div>
        <p className="body-small-reguler text-neutral-100">
          Invoice 09289/KCUBD/102025 ditandatangani oleh Ajeng Narulita (Manajer
          Penjualan Bisnis Korporat)
        </p>
        <p className="caption-large-reguler text-neutral-90">
          4 Okt 2025, 14.00
        </p>
      </div>
    </div>
    <div className="flex gap-2">
      <FileText size={20} />
      <div>
        <p className="body-small-reguler text-neutral-100">
          Invoice 09289/KCUBD/102025 sudah ditandai terkirim ke customer oleh
          Fadhil Ibrahim (Admin)
        </p>
        <p className="caption-large-reguler text-neutral-90">
          3 Okt 2025, 15.06
        </p>
      </div>
    </div>
    <div className="flex gap-2">
      <Banknote size={20} />
      <div>
        <p className="body-small-reguler text-neutral-100">
          Tagihan invoice 09289/KCUBD/102025 ditandai sudah dibayar sebagian
          oleh Fadhil Ibrahim (Admin)
        </p>
        <p className="caption-large-reguler text-neutral-90">
          3 Okt 2025, 15.06
        </p>
      </div>
    </div>
    <div className="flex gap-2">
      <Send size={20} />
      <div>
        <p className="body-small-reguler text-neutral-100">
          Invoice 09289/KCUBD/102025 dikirim ke customer via email oleh Fadhil
          Ibrahim (Admin)
        </p>
        <p className="caption-large-reguler text-neutral-90">
          3 Okt 2025, 17.00
        </p>
      </div>
    </div>
    <Card>
      <CardTitle className="caption-large-reguler text-neutral-90 px-5">
        Jumlah yang Dibayar: 1.000.000
      </CardTitle>
    </Card>
  </div>
);

export default RecentActivity;
