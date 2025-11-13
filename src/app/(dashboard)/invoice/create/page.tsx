"use client";

import CustomerSearch from "@/components/invoiceCreate/CustomerSearch";
import PaymentInfo from "@/components/invoiceCreate/PaymentInfo";
import InvoiceDetailsForm from "@/components/invoiceCreate/InvoiceDetailsForm";
import InvoiceSummary from "@/components/invoiceCreate/InvoiceSummary";
import PageHeader2 from "@/components/layout/PageHeader2";
import TableServices from "@/components/tables/service";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getDataServices } from "@/data/services";
import { TypeServices } from "@/types/services";
import { PlusCircle } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { useServiceDialogStore } from "@/stores/serviceDialogStore";
import { useValidasiFormDialogStore } from "@/stores/validasiFormDialogStore";
import DialogRightService from "@/components/dialog/DialogRightService";
import DialogRightCustomer from "@/components/dialog/DialogRightCustomer";
import DialogValidasiForm from "@/components/dialog/DialogValidasiForm";

const InvoiceCreate = () => {
  const [data, setData] = useState<TypeServices[]>();
  const [invoiceData, setInvoiceData] = useState({
    noInvoice: "",
    tanggalTerbit: "",
    noPks: "",
    tanggalPks: "",
    customer: "",
    rekening: "",
  });

  const { openValidasiFormDialog } = useValidasiFormDialogStore();
  const openServiceDialog = useServiceDialogStore(
    (state) => state.openServiceDialog
  );

  const handleInputChange = useCallback(
    (field: keyof typeof invoiceData, value: string) => {
      setInvoiceData((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    []
  );

  useEffect(() => {
    async function fetchData() {
      const servicesData = await getDataServices();
      setData(servicesData);
    }
    fetchData();
  }, []);

  const isSaveDisabled =
    !invoiceData.noInvoice ||
    !invoiceData.tanggalTerbit ||
    !invoiceData.customer ||
    // !invoiceData.rekening ||
    !data ||
    data.length === 0;

  const handleDelete = (layanan: string) => {
    const updatedData = data?.filter((item) => item.layanan !== layanan);
    setData(updatedData);
  };

  return (
    <div>
      <PageHeader2 title="Buat Invoice" />
      <InvoiceDetailsForm
        invoiceData={invoiceData}
        handleInputChange={handleInputChange}
      />

      <CustomerSearch
        value={invoiceData.customer}
        onCustomerSelect={(customerName) =>
          handleInputChange("customer", customerName)
        }
      />

      <Card className="m-6 gap-4 items-start">
        <p className="body-large-bold px-5">Layanan</p>

        <TableServices data={data ?? []} handleDelete={handleDelete} />

        <Button
          onClick={openServiceDialog}
          variant="ghost"
          className="text-primary mx-3"
        >
          <PlusCircle fill="black" color="white" />
          Tambah layanan
        </Button>
      </Card>

      <div className="grid md:grid-cols-2 items-start gap-5 m-6">
        <PaymentInfo
          value={invoiceData.rekening}
          onRekeningChange={(rekening) =>
            handleInputChange("rekening", rekening)
          }
        />
        <InvoiceSummary data={data ?? []} />
      </div>

      <div className="bg-neutral-10 p-6 flex items-center justify-end gap-4">
        <Button onClick={() => openValidasiFormDialog()} variant={"outline"}>
          Batal
        </Button>
        <Button variant={"outline"}>Simpan sebagai draft</Button>
        <Button disabled={isSaveDisabled}>Simpan</Button>
      </div>

      {/* dialog */}
      <DialogRightService />
      <DialogRightCustomer />
      <DialogValidasiForm />
    </div>
  );
};

export default InvoiceCreate;
